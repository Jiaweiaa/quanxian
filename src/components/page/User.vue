<template>
    <div class="user">
        <!--
            搜索
        -->
        <div class="searchBox">
            <div class="searchItem">
                <p class="itemName">用户名:</p>
                <el-input
                        placeholder="请输入用户名"
                        size="small"
                        v-model="accountName">
                </el-input>
            </div>
            <div class="searchItem">
                <p class="itemName">公司名称:</p>
                <el-input
                        placeholder="请输入公司名称"
                        size="small"
                        v-model="orgName">
                </el-input>
            </div>
            <div class="searchItem">
                <p class="itemName">电话:</p>
                <el-input
                        placeholder="请输入电话"
                        size="small"
                        v-model="phone">
                </el-input>
            </div>
            <div class="searchBtn searchItem">
                <el-button size="small" plain @click="getList">搜索</el-button>
                <el-button size="small" type="primary" @click="addUser" >新增</el-button>
            </div>
        </div>

        <!--
            新增form
        -->
        <el-dialog :close-on-press-escape="false"
                   title="新增租户"
                   :before-close="cancelAdd"
                   :visible.sync="userVisible"
                   :close-on-click-modal="false">
            <el-form :model="dataForm" label-width="130px" :rules="dataFormRules" ref="dataForm">
                <el-form-item label="用户名" prop="name" >
                    <el-input size="small" placeholder="请输入用户名" v-model="dataForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input size="small" placeholder="请输入邮箱" v-model="dataForm.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input size="small" placeholder="请输入电话" v-model="dataForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司" prop="orgId">
                    <el-select
                            v-model="dataForm.orgId"
                            filterable
                            remote
                            reserve-keyword
                            @change="companyIdChange"
                            placeholder="请输入关键词"
                            :remote-method="remoteMethod"
                            :loading="loading">
                        <el-option
                                v-for="item in companyList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="部门" prop="deptId">
                    <el-cascader
                            :options="departmentList"
                            :props="props"
                            size="small"
                            change-on-select
                            style="width: 100%;"
                            v-model="dataForm.deptId">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="角色" prop="roleId">
                    <el-select v-model="dataForm.roleId" multiple clearable placeholder="请选择">
                        <el-option
                                v-for="item in roleList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input
                            size="small"
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            resize="none"
                            placeholder="请输入内容"
                            v-model="dataForm.remark">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="medium" @click.native="cancelAdd">取消</el-button>
                <el-button size="medium" type="primary" @click.native="submitAdd">提交</el-button>
            </div>
        </el-dialog>
        <el-dialog :close-on-press-escape="false"
                   title="编辑租户"
                   :before-close="cancelEdit"
                   :visible.sync="userVisibleEdit"
                   :close-on-click-modal="false">
            <el-form :model="editForm" label-width="130px" :rules="dataFormRules" ref="editForm">
                <el-form-item label="用户名" prop="name" >
                    <el-input size="small" placeholder="请输入用户名" v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input size="small" placeholder="请输入邮箱" v-model="editForm.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input size="small" placeholder="请输入电话" v-model="editForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司" prop="orgId">
                    <el-select
                            v-model="editForm.orgId"
                            filterable
                            remote
                            reserve-keyword
                            @change="companyIdChange"
                            placeholder="请输入关键词"
                            :remote-method="remoteMethod"
                            :loading="loading">
                        <el-option
                                v-for="item in companyList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="部门" prop="deptId">
                    <el-cascader
                            :options="departmentList"
                            :props="props"
                            size="small"
                            change-on-select
                            style="width: 100%;"
                            v-model="editForm.deptId">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="角色" prop="roleId">
                    <el-select v-model="editForm.roleId" multiple clearable placeholder="请选择">
                        <el-option
                                v-for="item in roleList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input
                            size="small"
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            resize="none"
                            placeholder="请输入内容"
                            v-model="editForm.remark">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="medium" @click.native="cancelEdit">取消</el-button>
                <el-button size="medium" type="primary" @click.native="submitEdit">提交</el-button>
            </div>
        </el-dialog>

        <!--
           列表
        -->
        <el-table
                style="margin-top: 10px;"
                size="mini"
                :data="tableData">
            <el-table-column
                    prop="acc_name"
                    label="用户名">
            </el-table-column>
            <el-table-column
                    prop="org_name"
                    label="公司名">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="电话">
            </el-table-column>
            <el-table-column
                    prop="roles"
                    label="角色">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <i class="el-icon-edit" style="margin-right: 20px;" @click.stop="tableEdit(scope.row)"></i>
                    <i class="el-icon-delete" @click.stop="tableDel(scope.row)"></i>
                </template>
            </el-table-column>
        </el-table>

        <!--
            分页
            current-change  改变当前页的回调
            page-size 每页的数据个数
            total 数据条数总数
            current-page.sync 数据总页
        -->
        <el-pagination
                class="pageCurrent"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalNum">
        </el-pagination>
    </div>
</template>

<script>
    import { listAccount, getOrganize, listByOrgId, roleList, createAccount, delAccount, getAccountInfo, editAccount } from '../../api/api';
    import Notification from '../../common/Notification';

    export default {
        data() {
            return {
                // 搜索三个参数
                orgName: '',
                accountName: '',
                phone: '',

                // 新增租户
                userVisible: false,
                dataForm: {
                    name: '',
                    orgId: '',
                    deptId: [],
                    phone: '',
                    email: '',
                    roleId: []
                },
                dataFormRules: {
                    name: [
                        {required: true, message: '用户名不能为空!', trigger: 'blur'}
                    ],
                    orgId: [
                        {required: true, message: '请选择公司!', trigger: 'blur'}
                    ],
                    deptId: [
                        {type:'array', required: true, message: '请选择部门!', trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, message: '电话不能为空!', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '邮箱不能为空!', trigger: 'blur'}
                    ],
                    roleId: [
                        {type:'array',required: true, message: '请选择角色!', trigger: 'blur'}
                    ],

                },

                editForm: {
                    name: '',
                    orgId: '',
                    deptId: [],
                    phone: '',
                    email: '',
                    roleId: []
                },
                userVisibleEdit:false,

                tenantVisible: false,
                props: {
                    label: 'name',
                    value: 'id',
                    children: 'childDept'
                },

                // 列表数据
                tableData:[],
                // 翻页
                currentPage: 1,
                totalNum: 0,
                pageSize: 10,

                // 公司表
                companyList: [],
                departmentList: [],
                roleList: [],
                loading: false

            }
        },
        created() {
            let parmas = {
                pageSize: 999
            }
            roleList(parmas).then((res) => {
                this.roleList = res.data.data.list;
            })
            this.getList();

        },
        methods: {
            remoteMethod(query) {
                let parmas = {
                    pageSize: 999,
                    orgName: query
                }
                this.loading = true;
                getOrganize(parmas).then((res) => {
                    this.companyList = res.data.data;
                    this.loading = false;
                })
            },
            companyIdChange() {
                if(this.dataForm.orgId) {
                    let parmas = {
                        id: this.dataForm.orgId
                    }
                    listByOrgId(parmas).then((res) => {
                        this.departmentList = res.data.data;
                    })
                }
            },

            addUser() {
                this.userVisible = true;
            },

            // 提交新增和取消
            submitAdd() {
                this.$refs.dataForm.validate((valid) => {
                    if (valid) {
                        createAccount(this.dataForm).then((res) => {
                            Notification(res, this);
                            this.getList();
                            this.cancelAdd();
                        })
                    }
                });
            },
            cancelAdd() {
                this.userVisible = false;
                this.companyList = [];
                this.departmentList = [];
                this.roleList = [];
                this.$refs['dataForm'].resetFields();
            },

            // 页数条数更改
            handleSizeChange(val) {
                this.pageSize = val;
                this.getList();
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getList();
            },
            // 获取列表
            getList() {
                let parmas = {
                    pageSize: this.pageSize,
                    pageNo: this.currentPage,
                    orgName: this.orgName,
                    accountName: this.accountName,
                    principal: this.principal

                }
                listAccount(parmas).then((res) => {
                    this.tableData = res.data.data.list;
                    this.totalNum = res.data.data.totalCount;
                })
            },
            // 页数条数更改
            handleSizeChange(val) {
                this.pageSize = val;
                this.getList();
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getList();
            },
            // 列表删除
            tableDel(val) {
                console.log(val)
                this.$confirm('确认删除？').then(() => {
                    let parmas = {
                        id: val.id
                    }
                    delAccount(parmas).then((res) => {
                        Notification(res, this);
                        this.getList();
                    })
                }).catch(() => {});
            },
            cancelEdit(){
                this.userVisibleEdit = false;
                this.companyList = [];
                this.departmentList = [];
                this.roleList = [];
                this.$refs['editForm'].resetFields();
            },
            submitEdit(){
                let parmas = Object.assign({
                    accountId: this.editForm.id
                }, this.editForm)
                editAccount(parmas).then((res) => {
                    Notification(res, this);
                    this.getList();
                    this.cancelEdit();
                })
            },
            // 列表编辑
            tableEdit(val) {
                let parmas = {
                    accountId: val.id
                }
                getAccountInfo(parmas).then((res) => {
                    this.editForm = res.data.data;
                    console.log(this.editForm)
                    let parmasa = {
                        id: this.editForm.orgId
                    }
                    listByOrgId(parmasa).then((res) => {
                        this.departmentList = res.data.data;
                    })
                })
                this.userVisibleEdit = true;
            }
        }
    }
</script>

<style scoped>
</style>