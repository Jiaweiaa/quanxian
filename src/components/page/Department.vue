<template>
    <div class="department">
        <!--
            新增
        -->
        <div style="margin-bottom: 10px; width: 100%;">
            <el-button size="small" type="primary" @click="addDepartment" >新增</el-button>
        </div>
        <el-dialog :close-on-press-escape="false"
                   title="新增"
                   :before-close="cancelAdd"
                   :visible.sync="departmentVisible"
                   :close-on-click-modal="false">
            <el-form :model="dataForm" label-width="130px" :rules="dataFormRules" ref="dataForm">
                <el-form-item label="上级部门" prop="parentId">
                    <el-select v-model="dataForm.parentId" clearable placeholder="请选择"  auto-complete="off">
                        <el-option
                                v-for="item in parentList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input size="small" placeholder="请输入名称" v-model="dataForm.name" auto-complete="off"></el-input>
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

        <!--
            手风琴
        -->
        <el-collapse class="accordion" v-model="activeName" accordion>
            <el-collapse-item v-for="(item, index) in accordionList" :name="index" >
                <template slot="title">
                    {{item.name}}
                    <div class="childCollapse">
                        <i class="el-icon-edit" @click.stop="editCollapse(item)"></i>
                        <i class="el-icon-delete" @click.stop="delCollapse(item)"></i>
                    </div>
                </template>
                <div class="collapse" v-for="(childItem, childIndex) in item.childDept"  @click="getUserListClick(childItem)">
                    {{childItem.name}}
                    <div class="childCollapse">
                        <i class="el-icon-edit" @click.stop="editCollapse(childItem)"></i>
                        <i class="el-icon-delete" @click.stop="delCollapse(childItem)"></i>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
        <!--
            编辑
        -->
        <el-dialog :close-on-press-escape="false"
                   title="编辑"
                   :before-close="cancelEdit"
                   :visible.sync="departmentEditVisible"
                   :close-on-click-modal="false">
            <el-form :model="editForm" label-width="130px" :rules="editFormRules" ref="editForm">
                <el-form-item label="上级部门" prop="parentId">
                    <el-select v-model="editForm.parentId" clearable placeholder="请选择"  auto-complete="off">
                        <el-option
                                v-for="item in parentList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input size="small" placeholder="请输入名称" v-model="editForm.name" auto-complete="off"></el-input>
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

        <div  style="float: right; width: 70%; margin-top: 0;">
            <!--
            列表
         -->
            <el-table
                    v-show="tableData.length !== 0"
                    size="mini"
                    :data="tableData">
                <el-table-column
                        prop="name"
                        label="姓名">
                </el-table-column>
                <el-table-column
                        prop="phone"
                        label="电话">
                </el-table-column>
                <el-table-column
                        prop="email"
                        label="邮箱">
                </el-table-column>
                <el-table-column
                        label="状态">
                    <template slot-scope="scope">
                        {{scope.row.disabled ? '启用' : '禁用'}}
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
                    v-show="tableData.length !== 0"
                    class="pageCurrent"
                    style="width: 100%; text-align: right;"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalNum">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import { listByOrgId, listParent, addDepartment, editDepartment, delDepartment, listUserByDeptId } from '../../api/api';
    import Notification from '../../common/Notification';
    export default {
        data() {
            return {
                id: '',
                //新增
                departmentVisible: false,
                dataForm: {
                    parentId: '',
                    name: '',
                    remark: ''
                },
                dataFormRules: {
                    parentId: [
                        {required: true, message: '请选择单位!', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '名称不能为空!', trigger: 'blur'}
                    ]
                },

                // 编辑
                departmentEditVisible: false,
                editForm: {
                    parentId: '',
                    name: '',
                    remark: ''
                },
                editFormRules: {
                    parentId: [
                        {required: true, message: '请选择单位!', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '名称不能为空!', trigger: 'blur'}
                    ]
                },
                // 所有上级部门
                parentList: [{name: '顶级单位', id: '0'}],

                // 手风琴
                activeName: 0,
                accordionList: [],

                // 用户列表
                tableData: [],
                // 翻页
                currentPage: 1,
                totalNum: 0,
                pageSize: 10
            };
        },
        created() {
            this.id = this.$router.history.current.query.id;
            this.getList();
        },
        methods: {
            // 获取手风琴数据
            getList() {
                let parmas = {
                    id: this.id
                }
                this.accordionList = [];
                this.parentList = [{name: '顶级单位', id: '0'}];
                listByOrgId(parmas).then((res) => {
                    this.accordionList = res.data.data;
                })
                listParent(parmas).then((res) => {
                    for(let i = 0 ; i < res.data.data.length; i++) {
                        this.parentList.push(res.data.data[i]);
                    }
                })
            },

            // 新增
            addDepartment() {
                this.departmentVisible = true;
            },
            submitAdd() {
                this.$refs.dataForm.validate((valid) => {
                    if (valid) {
                        let parmas = Object.assign({
                            orgId:this.id
                        }, this.dataForm)
                        addDepartment(parmas).then((res) => {
                            Notification(res, this);
                            this.getList();
                            this.cancelAdd();
                        })
                    }
                });

            },
            cancelAdd() {
                this.departmentVisible = false;
                this.$refs['dataForm'].resetFields();
            },

            // 手风琴父级编辑
            editCollapse(val) {
                this.editForm = Object.assign({}, val);
                this.departmentEditVisible = true;
            },
            submitEdit() {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        let parmas = {
                            id: this.editForm.id,
                            parentId: this.editForm.parentId,
                            orgId: this.editForm.orgId,
                            name: this.editForm.name,
                            remark: this.editForm.remark
                        };
                        editDepartment(parmas).then((res) => {
                            Notification(res, this);
                            this.getList();
                            this.cancelEdit();
                        })
                    }
                });
            },
            cancelEdit() {
                this.departmentEditVisible = false;
                this.editForm = {};
            },

            // 手风琴删除
            delCollapse(val) {
                let parmas = {
                    id: val.id
                }
                this.$confirm('确认删除？').then(() => {
                    delDepartment(parmas).then((res) => {
                        Notification(res, this);
                        this.getList();
                    })
                }).catch(() => {});
            },

            getUserListClick(val) {
                this.tableData = [];
                this.userId = val.id;
                this.pageSize = 10;
                this.currentPage = 1;
                this.getUserList();
            },
            // 获取用户
            getUserList() {
                let parmas = {
                    id: this.userId,
                    pageSize: this.pageSize,
                    pageNo: this.currentPage
                }
                listUserByDeptId(parmas).then((res) => {
                    this.tableData = res.data.data.list;
                    this.totalNum = res.data.data.totalCount;
                })
            },
            // 页数条数更改
            handleSizeChange(val) {
                this.pageSize = val;
                this.getUserList();
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getUserList();
            }
        }
    }
</script>

<style>
    .collapse {
        width: 100%;
        height: 30px;
        cursor: pointer;
        line-height: 30px;
    }
    .childCollapse {
        float: right;
    }
    .childCollapse i {
        cursor: pointer;
        font-size: 16px;
        padding: 5px;
    }
    .department .accordion{
        width: 25%;
        float: left;
    }
</style>
