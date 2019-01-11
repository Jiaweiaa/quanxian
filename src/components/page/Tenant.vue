<template>
    <div class="tenant">
        <div v-show="this.$router.history.current.path == '/tenant'">
            <!--
                搜索
            -->
            <div class="searchBox">
                <div class="searchItem">
                    <p class="itemName">公司名称:</p>
                    <el-input
                            placeholder="请输入公司名称"
                            size="small"
                            v-model="name">
                    </el-input>
                </div>
                <div class="searchItem">
                    <p class="itemName">负责人姓名:</p>
                    <el-input
                            placeholder="请输入负责人姓名"
                            size="small"
                            v-model="principal">
                    </el-input>
                </div>
                <div class="searchItem">
                    <p class="itemName">地址:</p>
                    <el-input
                            size="small"
                            placeholder="请输入地址"
                            v-model="address">
                    </el-input>
                </div>
                <div class="searchBtn searchItem">
                    <el-button size="small" plain @click="getList">搜索</el-button>
                    <el-button size="small" type="primary" @click="addTenant" >新增</el-button>
                </div>
            </div>

            <!--
                新增form
            -->
            <el-dialog :close-on-press-escape="false"
                       title="新增租户"
                       :before-close="cancelAdd"
                       :visible.sync="tenantVisible"
                       :close-on-click-modal="false">
                <el-form :model="dataForm" label-width="130px" :rules="dataFormRules" ref="dataForm">
                    <el-form-item label="公司名称" prop="name">
                        <el-input size="small" v-model="dataForm.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="负责人姓名" prop="principal">
                        <el-input size="small" v-model="dataForm.principal" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="principalPhone">
                        <el-input size="small" v-model="dataForm.principalPhone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="公司地址" prop="address">
                        <el-input size="small" v-model="dataForm.address" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button size="medium" @click.native="cancelAdd">取消</el-button>
                    <el-button size="medium" type="primary" @click.native="submitAdd">提交</el-button>
                </div>
            </el-dialog>

            <!--
                列表
            -->
            <el-table
                    table
                    size="mini"
                    :data="tableData">
                <el-table-column
                        prop="name"
                        label="公司名称">
                </el-table-column>
                <el-table-column
                        prop="principal"
                        label="负责人姓名">
                </el-table-column>
                <el-table-column
                        prop="principalPhone"
                        label="负责人电话">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="入住时间">
                </el-table-column>
                <el-table-column
                        label="禁用">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row.disabled"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                @change="disableChange(scope.row)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <i class="el-icon-setting" style="cursor: pointer;" @click="goDepartment(scope.row)"></i>
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

        <router-view v-show="this.$router.history.current.path == '/department'"></router-view>
    </div>
</template>

<script>
    import { addTenant, getTenantList, editTenant } from '../../api/api';
    import Notification from '../../common/Notification';

    export default {
        data() {
            return {
                // 搜索三个参数
                name: '',
                principal: '',
                address: '',

                // 新增租户
                dataForm: {
                    name: '',
                    principal: '',
                    principalPhone: '',
                    address: ''
                },
                dataFormRules: {
                    name: [
                        {required: true, message: '公司名称不能为空!', trigger: 'blur'}
                    ],
                    principal: [
                        {required: true, message: '负责人姓名不能为空!', trigger: 'blur'}
                    ],
                    principalPhone: [
                        {required: true, message: '负责人电话不能为空!', trigger: 'blur'}
                    ],
                    address: [
                        {required: true, message: '公司地址不能为空!', trigger: 'blur'}
                    ]
                },
                tenantVisible: false,

                // 列表数据
                tableData:[],
                // 翻页
                currentPage: 1,
                totalNum: 0,
                pageSize: 10
            }
        },
        created() {
            this.getList();
        },
        methods: {
            // 跳转部门页
            goDepartment(val) {
                this.$router.push({
                    path: '/department',
                    query: {
                        id: val.id
                    }
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
            // 获取列表
            getList() {
                let parmas = {
                    pageSize: this.pageSize,
                    pageNo: this.currentPage,
                    name: this.name,
                    address: this.address,
                    principal: this.principal

                }
                getTenantList(parmas).then((res) => {
                    this.tableData = res.data.data.list;
                    this.totalNum = res.data.data.totalCount;
                })
            },

            // 开关更改
            disableChange(val) {
                let parmas = {
                    id: val.id,
                    disabled: val.disabled
                }
                editTenant(parmas).then((res) => {
                    Notification(res, this, (status) => {
                        if(status === 'success') {
                            this.getList();
                        }
                    })
                })

            },

            // 新增租户
            addTenant() {
                this.tenantVisible = true;
            },

            // 提交新增和取消
            submitAdd() {
                this.$refs.dataForm.validate((valid) => {
                    if (valid) {
                        addTenant(this.dataForm).then((res) => {
                            Notification(res, this);
                            this.getList();
                            this.cancelAdd();
                        })
                    }
                });
            },
            cancelAdd() {
                this.tenantVisible = false;
                this.$refs['dataForm'].resetFields();
            }
        }
    }
</script>

<style scoped>
    .tenant {
        overflow: hidden;
    }
</style>