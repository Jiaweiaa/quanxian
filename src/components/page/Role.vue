<template>
    <div class="role">
        <!--
            列表
        -->
        <el-card class="box-card">
            <div style="margin-bottom: 10px; width: 100%;">
                <el-button size="small" type="primary" @click="addRole" >新增</el-button>
            </div>
            <div v-for="(item, index) in roleList" :key="index" class="item" @click="clickRole(item)">
                {{item.name}}
                <div class="childRole">
                    <i class="el-icon-edit" @click.stop="editRole(item)"></i>
                    <i class="el-icon-delete" @click.stop="delRole(item)"></i>
                </div>
            </div>
        </el-card>
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
            编辑
        -->
        <el-dialog :close-on-press-escape="false"
                   title="编辑"
                   :before-close="cancelAdd"
                   :visible.sync="roleVisibleEdit"
                   :close-on-click-modal="false">
            <el-form :model="dataForm" label-width="130px" :rules="dataFormRules" ref="dataForm">
                <el-form-item label="名称" prop="name">
                    <el-input size="small" placeholder="请输入名称" v-model="dataForm.name" auto-complete="off"></el-input>
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
                <el-button size="medium" type="primary" @click.native="submitEdit">提交</el-button>
            </div>
        </el-dialog>


        <div class="jusridClass" v-show="roleId">
            <!--
                权限新增
            -->
            <div style="margin-bottom: 10px; width: 100%;">
                <el-button size="small" style="margin-left: 5%;" type="primary" @click="addJurisd" >新增</el-button>
            </div>
            <!--
                添加权限
            -->
            <el-dialog :close-on-press-escape="false"
                       title="添加权限"
                       :before-close="cancelAddJusd"
                       :visible.sync="jurisdVisible"
                       :close-on-click-modal="false">
                <el-form :model="jurisdForm" label-width="130px" :rules="jurisdFormRules" ref="jurisdForm">
                    <el-form-item label="权限" prop="permissionId">
                        <el-select
                            v-model="jurisdForm.permissionId"
                            filterable
                            remote
                            reserve-keyword
                            placeholder="请输入关键词"
                            :remote-method="remoteMethod"
                            :loading="loading">
                            <el-option
                                    v-for="item in typeList"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button size="medium" @click.native="cancelAddJusd">取消</el-button>
                    <el-button size="medium" type="primary" @click.native="submitAddJusd">提交</el-button>
                </div>
            </el-dialog>
            <!--
               列表
            -->
            <el-table
                style="float: right; width: 70%; margin-top: 0;"
                size="mini"
                :data="tableData">
                <el-table-column
                    prop="name"
                    label="姓名">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="类型">
                </el-table-column>
                <el-table-column
                    prop="url"
                    label="URL">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <i class="el-icon-delete" @click.stop="tableDel(scope.row)"></i>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import { roleList, roleCreate, roleEdit, roleDel, getListByRoleId, permissList,createRolePerd, delRolePer } from '../../api/api';
    import Notification from '../../common/Notification';

    export default {
        data() {
            return {
                loading: true,
                // 用户id
                roleId: '',
                roleList: [],

                //右侧
                jurisdVisible: false,
                roleVisibleEdit: false,
                typeList: [],

                // 新增
                jurisdForm: {
                    permissionId: ''
                },
                jurisdFormRules: {
                    permissionId: [
                        {required: true, message: '请选择权限!', trigger: 'blur'}
                    ]
                },


                // 左侧
                roleVisible: false,
                // 新增
                dataForm: {
                    name: '',
                    msg: ''
                },
                dataFormRules: {
                    name: [
                        {required: true, message: '请输入姓名!', trigger: 'blur'}
                    ]
                },

                tableData: []
            };
        },
        created() {
            this.getList();

        },
        methods: {
            tableDel(val) {
                let parmas = {
                    roleId: val.roleid,
                    permissionId: val.permissionid
                }
                this.$confirm('确认删除？').then(() => {
                    delRolePer(parmas).then((res) => {
                        Notification(res, this);
                        this.getRoleList();
                    })
                }).catch(() => {});
            },
            // 新增权限模糊查询
            remoteMethod(query) {
                if(query !== '') {
                    let parmas = {
                        pageSize: 999,
                        name: query
                    }
                    this.loading = true;
                    permissList(parmas).then((res) => {
                        this.typeList = res.data.data.list;
                        this.loading = false;
                    })
                }
            },
            // 右侧操作
            addJurisd() {
                this.jurisdVisible = true;
            },
            submitAddJusd() {
                this.$refs.jurisdForm.validate((valid) => {
                    if(valid) {
                        let parmas = Object.assign({
                            roleId: this.roleId
                        }, this.jurisdForm)
                        createRolePerd(parmas).then((res) => {
                            Notification(res, this);
                            this.getRoleList();
                            this.cancelAddJusd();
                        })
                    }
                });
            },
            cancelAddJusd() {
                this.jurisdVisible = false;
                this.$refs['jurisdForm'].resetFields();
            },

            // 左侧操作
            // 获取用户下的权限
            clickRole(val) {
                this.roleId = val.id;
                this.getRoleList();
            },
            getRoleList() {
                let parmas = {
                    roleId: this.roleId
                }
                getListByRoleId(parmas).then((res) => {
                    this.tableData = res.data.data.list;
                })
            },

            cancelAdd() {
                this.roleVisible = false;
                this.roleVisibleEdit = false;
                this.$refs['dataForm'].resetFields();
            },
            getList() {
                roleList().then((res) => {
                    this.roleList = res.data.data.list;
                })
            },
            submitAdd() {
                this.$refs.dataForm.validate((valid) => {
                   if(valid) {
                       roleCreate(this.dataForm).then((res) => {
                           Notification(res, this);
                           this.cancelAdd();
                           this.getList();
                       })
                   }
                });
            },
            submitEdit() {
                this.$refs.dataForm.validate((valid) => {
                    if(valid) {
                        let parmas = {
                            id: this.dataForm.id,
                            name: this.dataForm.name,
                            msg: this.dataForm.msg
                        }
                        roleEdit(parmas).then((res) => {
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
            editRole(val) {
                this.roleVisibleEdit = true;
                this.dataForm = Object.assign({}, val)
            },
            delRole(val) {
                let parmas = {
                    id: val.id
                }
                this.$confirm('确认删除？').then(() => {
                    roleDel(parmas).then((res) => {
                        Notification(res, this);
                        this.getList();
                    })
                }).catch(() => {});
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
        height: 25px;
        line-height: 25px;
        cursor: pointer;
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