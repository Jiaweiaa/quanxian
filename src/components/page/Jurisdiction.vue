<template>
    <div class="role">
        <!--
            新增
        -->
        <el-dialog :close-on-press-escape="false"
                   title="新增"
                   :before-close="cancelAdd"
                   :visible.sync="roleVisible"
                   :close-on-click-modal="false">
            <el-form :model="dataForm" label-width="130px" :rules="dataFormRules" ref="dataForm">
                <el-form-item label="名称" prop="name">
                    <el-input size="small" placeholder="请输入名称" v-model="dataForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="URL" prop="url">
                    <el-input size="small" placeholder="请输入名称" v-model="dataForm.url" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="类型" prop="type">
                    <el-select v-model="dataForm.type" clearable placeholder="请选择"  auto-complete="off">
                        <el-option
                                v-for="item in typeList"
                                :key="item.value"
                                :label="item.name"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="msg">
                    <el-input
                            size="small"
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            resize="none"
                            placeholder="请输入内容"
                            v-model="dataForm.msg">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="medium" @click.native="cancelAdd">取消</el-button>
                <el-button size="medium" type="primary" @click.native="submitAdd">提交</el-button>
            </div>
        </el-dialog>

        <!--
            搜索
        -->
        <div class="searchBox">
            <div class="searchItem">
                <p class="itemName">名称:</p>
                <el-input
                        placeholder="请输入名称"
                        size="small"
                        v-model="name">
                </el-input>
            </div>
            <div class="searchItem">
                <p class="itemName">URL:</p>
                <el-input
                        placeholder="请输入URL"
                        size="small"
                        v-model="url">
                </el-input>
            </div>
            <div class="searchBtn searchItem">
                <el-button size="small" plain @click="getList">搜索</el-button>
                <el-button size="small" type="primary" @click="addRole" >新增</el-button>
            </div>
        </div>

        <!--
            列表
        -->
        <el-table
                table
                size="mini"
                :data="tableData">
            <el-table-column
                    prop="name"
                    label="名称">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="类型">
            </el-table-column>
            <el-table-column
                    prop="url"
                    label="url">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <i class="el-icon-edit" style="margin-right: 10px; cursor: pointer;" @click.stop="editJuris(scope.row)"></i>
                    <i class="el-icon-delete"  style="margin-right: 10px; cursor: pointer;"  @click.stop="delJuris(scope.row)"></i>
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

        <!--
            编辑
        -->
        <el-dialog :close-on-press-escape="false"
                   title="编辑"
                   :before-close="cancelEdit"
                   :visible.sync="editVisible"
                   :close-on-click-modal="false">
            <el-form :model="editForm" label-width="130px" :rules="dataFormRules" ref="editForm">
                <el-form-item label="名称" prop="name">
                    <el-input size="small" placeholder="请输入名称" v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="URL" prop="url">
                    <el-input size="small" placeholder="请输入名称" v-model="editForm.url" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="类型" prop="type">
                    <el-select v-model="editForm.type" clearable placeholder="请选择"  auto-complete="off">
                        <el-option
                                v-for="item in typeList"
                                :key="item.value"
                                :label="item.name"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="msg">
                    <el-input
                            size="small"
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            resize="none"
                            placeholder="请输入内容"
                            v-model="editForm.msg">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="medium" @click.native="cancelEdit">取消</el-button>
                <el-button size="medium" type="primary" @click.native="submitEdit">提交</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>

    import { createPermiss, permissList, editPermiss, delPermiss } from '../../api/api';
    import Notification from '../../common/Notification';

    export default {
        data() {
            return {
                name: '',
                url: '',

                roleList: [],

                // 新增
                typeList: [
                    {
                        name: 'get',
                        value: 'get'
                    },
                    {
                        name: 'post',
                        value: 'post'
                    },
                    {
                        name: 'put',
                        value: 'put'
                    },
                    {
                        name: 'delete',
                        value: 'delete'
                    }
                ],
                roleVisible: false,
                editVisible: false,
                // 新增

                dataForm: {
                    name: '',
                    type: '',
                    url: '',
                    msg: ''
                },
                dataFormRules: {
                    name: [
                        {required: true, message: '请输入姓名!', trigger: 'blur'}
                    ],
                    type: [
                        {required: true, message: '请选择类型!', trigger: 'blur'}
                    ],
                    url: [
                        {required: true,  message: '请输入url!', trigger: 'blur'}
                    ],
                },
                editForm: {
                    name: '',
                    type: '',
                    url: '',
                    msg: ''
                },
                editFormRules: {
                    name: [
                        {required: true, message: '请输入姓名!', trigger: 'blur'}
                    ],
                    type: [
                        {required: true, message: '请选择类型!', trigger: 'blur'}
                    ],
                    url: [
                        {required: true, message: '请输入url!', trigger: 'blur'}
                    ],
                },

                // 列表数据
                tableData:[],
                // 翻页
                currentPage: 1,
                totalNum: 0,
                pageSize: 10
            };
        },
        created() {
            this.getList();
        },
        methods: {
            // 页数条数更改
            handleSizeChange(val) {
                this.pageSize = val;
                this.getList();
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getList();
            },
            getList() {
                let parmas = {
                    pageSize: this.pageSize,
                    pageNo: this.currentPage,
                    name: this.name,
                    url: this.url
                }
                permissList(parmas).then((res) => {
                    this.tableData = res.data.data.list;
                    this.totalNum = res.data.data.totalCount;
                })
            },
            cancelAdd() {
                this.$refs['dataForm'].resetFields();
                this.roleVisible = false;
            },
            submitAdd() {
                this.$refs.dataForm.validate((valid) => {
                    if(valid) {
                        createPermiss(this.dataForm).then((res) => {
                            Notification(res, this);
                            this.cancelAdd();
                            this.getList();
                        })
                    }
                });
            },
            addRole() {
                this.roleVisible = true;
            },
            editJuris(val) {
                this.editForm = Object.assign({}, val);
                this.editVisible = true;
            },
            delJuris(val) {
                let parmas = {
                    id: val.id
                }
                this.$confirm('确认删除？').then(() => {
                    delPermiss(parmas).then((res) => {
                        Notification(res, this);
                        this.getList();
                    })
                }).catch(() => {});
            },

            //编辑
            submitEdit() {
                this.$refs.editForm.validate((valid) => {
                    if(valid) {
                        editPermiss(this.editForm).then((res) => {
                            Notification(res, this);
                            this.cancelEdit();
                            this.getList();
                        })
                    }
                });
            },
            cancelEdit() {
                this.$refs['editForm'].resetFields();
                this.editVisible = false;
            }

        }
    }
</script>

<style scoped>
    .role .box-card{
        width: 25%;
        float: left;
    }
    .role .box-card .item {
        font-size: 13px;
    }
    .role .childRole {
        float: right;
    }
    .role .childRole i {
        cursor: pointer;
        font-size: 16px;
        margin-right: 5px;
    }
</style>