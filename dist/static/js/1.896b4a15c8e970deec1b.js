webpackJsonp([1],{

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(563)

var Component = __webpack_require__(199)(
  /* script */
  __webpack_require__(529),
  /* template */
  __webpack_require__(553),
  /* scopeId */
  "data-v-b2ee5982",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


let base = '/auth';

const urlGlobal = base;
/* unused harmony export urlGlobal */


// 登陆
const login = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/login`, params);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = login;

// 新增租户
const addTenant = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/organize/create`, params);
};
/* harmony export (immutable) */ __webpack_exports__["A"] = addTenant;

// 获取租户列表
const getTenantList = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/organize/getOrganizeList`, params);
};
/* harmony export (immutable) */ __webpack_exports__["y"] = getTenantList;

// 租户开关
const editTenant = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/organize/editDisabled`, params);
};
/* harmony export (immutable) */ __webpack_exports__["z"] = editTenant;

// 获取租户下的部门
const listByOrgId = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/dept/listByOrgId`, params);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = listByOrgId;

// 拿所有的上级的部门
const listParent = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/dept/listParent`, params);
};
/* harmony export (immutable) */ __webpack_exports__["t"] = listParent;

// 新增部门
const addDepartment = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/dept/add`, params);
};
/* harmony export (immutable) */ __webpack_exports__["u"] = addDepartment;

// 编辑部门
const editDepartment = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/dept/edit`, params);
};
/* harmony export (immutable) */ __webpack_exports__["v"] = editDepartment;

// 删除部门
const delDepartment = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/dept/del`, params);
};
/* harmony export (immutable) */ __webpack_exports__["w"] = delDepartment;

// 部门用户列表
const listUserByDeptId = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/dept/listUserByDeptId`, params);
};
/* harmony export (immutable) */ __webpack_exports__["x"] = listUserByDeptId;


// 用户列表
const roleList = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/role/getList`, params);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = roleList;

// 创建用户
const roleCreate = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/role/create`, params);
};
/* harmony export (immutable) */ __webpack_exports__["n"] = roleCreate;

// 编辑用户
const roleEdit = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/role/edit`, params);
};
/* harmony export (immutable) */ __webpack_exports__["o"] = roleEdit;

// 删除用户
const roleDel = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/role/del`, params);
};
/* harmony export (immutable) */ __webpack_exports__["p"] = roleDel;

// 创建用户权限
const createRolePerd = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/role/createRolePer`, params);
};
/* harmony export (immutable) */ __webpack_exports__["l"] = createRolePerd;

// 获取用户下的所有权限
const getListByRoleId = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/role/getListByRoleId`, params);
};
/* harmony export (immutable) */ __webpack_exports__["m"] = getListByRoleId;

// 新建用户权限
const createPermiss = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/permission/create`, params);
};
/* harmony export (immutable) */ __webpack_exports__["q"] = createPermiss;

// 获取权限列表
const permissList = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/permission/getList`, params);
};
/* harmony export (immutable) */ __webpack_exports__["k"] = permissList;

// 编辑权限列表
const editPermiss = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/permission/edit`, params);
};
/* harmony export (immutable) */ __webpack_exports__["s"] = editPermiss;

// 删除权限列表
const delPermiss = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/permission/del`, params);
};
/* harmony export (immutable) */ __webpack_exports__["r"] = delPermiss;

// 列表删除
const delRolePer = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/role/delRolePer`, params);
};
/* harmony export (immutable) */ __webpack_exports__["j"] = delRolePer;


// user表
const listAccount = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/account/listAccount`, params);
};
/* harmony export (immutable) */ __webpack_exports__["f"] = listAccount;

// 公司模糊匹配查询
const getOrganize = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/organize/getOrganize`, params);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getOrganize;

// 用户新增
const createAccount = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/account/createAccount`, params);
};
/* harmony export (immutable) */ __webpack_exports__["e"] = createAccount;

// 删除
const delAccount = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/account/del`, params);
};
/* harmony export (immutable) */ __webpack_exports__["g"] = delAccount;

// 编辑获取详情
const getAccountInfo = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/account/getAccountInfo`, params);
};
/* harmony export (immutable) */ __webpack_exports__["i"] = getAccountInfo;

// 编辑提交
const editAccount = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/account/edit`, params);
};
/* harmony export (immutable) */ __webpack_exports__["h"] = editAccount;


/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Notification(res, _this, callback) {
    if (res.data.status == 200) {
        _this.$message({
            message: res.data.msg,
            type: 'success'
        });
        if (callback) callback('success');
    } else {
        _this.$message.error(res.data.msg);
        if (callback) callback('success');
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Notification);

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Notification__ = __webpack_require__(518);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
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
                name: [{ required: true, message: '用户名不能为空!', trigger: 'blur' }],
                orgId: [{ required: true, message: '请选择公司!', trigger: 'blur' }],
                deptId: [{ type: 'array', required: true, message: '请选择部门!', trigger: 'blur' }],
                phone: [{ required: true, message: '电话不能为空!', trigger: 'blur' }],
                email: [{ required: true, message: '邮箱不能为空!', trigger: 'blur' }],
                roleId: [{ type: 'array', required: true, message: '请选择角色!', trigger: 'blur' }]

            },

            editForm: {
                name: '',
                orgId: '',
                deptId: [],
                phone: '',
                email: '',
                roleId: []
            },
            userVisibleEdit: false,

            tenantVisible: false,
            props: {
                label: 'name',
                value: 'id',
                children: 'childDept'
            },

            // 列表数据
            tableData: [],
            // 翻页
            currentPage: 1,
            totalNum: 0,
            pageSize: 10,

            // 公司表
            companyList: [],
            departmentList: [],
            roleList: [],
            loading: false

        };
    },
    created() {
        let parmas = {
            pageSize: 999
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["b" /* roleList */])(parmas).then(res => {
            this.roleList = res.data.data.list;
        });
        this.getList();
    },
    methods: {
        remoteMethod(query) {
            let parmas = {
                pageSize: 999,
                orgName: query
            };
            this.loading = true;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["c" /* getOrganize */])(parmas).then(res => {
                this.companyList = res.data.data;
                this.loading = false;
            });
        },
        companyIdChange() {
            if (this.dataForm.orgId) {
                let parmas = {
                    id: this.dataForm.orgId
                };
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["d" /* listByOrgId */])(parmas).then(res => {
                    this.departmentList = res.data.data;
                });
            }
        },

        addUser() {
            this.userVisible = true;
        },

        // 提交新增和取消
        submitAdd() {
            this.$refs.dataForm.validate(valid => {
                if (valid) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["e" /* createAccount */])(this.dataForm).then(res => {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                        this.getList();
                        this.cancelAdd();
                    });
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

            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["f" /* listAccount */])(parmas).then(res => {
                this.tableData = res.data.data.list;
                this.totalNum = res.data.data.totalCount;
            });
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
            console.log(val);
            this.$confirm('确认删除？').then(() => {
                let parmas = {
                    id: val.id
                };
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["g" /* delAccount */])(parmas).then(res => {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                    this.getList();
                });
            }).catch(() => {});
        },
        cancelEdit() {
            this.userVisibleEdit = false;
            this.companyList = [];
            this.departmentList = [];
            this.roleList = [];
            this.$refs['editForm'].resetFields();
        },
        submitEdit() {
            let parmas = Object.assign({
                accountId: this.editForm.id
            }, this.editForm);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["h" /* editAccount */])(parmas).then(res => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                this.getList();
                this.cancelEdit();
            });
        },
        // 列表编辑
        tableEdit(val) {
            let parmas = {
                accountId: val.id
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["i" /* getAccountInfo */])(parmas).then(res => {
                this.editForm = res.data.data;
                console.log(this.editForm);
                let parmasa = {
                    id: this.editForm.orgId
                };
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["d" /* listByOrgId */])(parmasa).then(res => {
                    this.departmentList = res.data.data;
                });
            });
            this.userVisibleEdit = true;
        }
    }
});

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user"
  }, [_c('div', {
    staticClass: "searchBox"
  }, [_c('div', {
    staticClass: "searchItem"
  }, [_c('p', {
    staticClass: "itemName"
  }, [_vm._v("用户名:")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入用户名",
      "size": "small"
    },
    model: {
      value: (_vm.accountName),
      callback: function($$v) {
        _vm.accountName = $$v
      },
      expression: "accountName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "searchItem"
  }, [_c('p', {
    staticClass: "itemName"
  }, [_vm._v("公司名称:")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入公司名称",
      "size": "small"
    },
    model: {
      value: (_vm.orgName),
      callback: function($$v) {
        _vm.orgName = $$v
      },
      expression: "orgName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "searchItem"
  }, [_c('p', {
    staticClass: "itemName"
  }, [_vm._v("电话:")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入电话",
      "size": "small"
    },
    model: {
      value: (_vm.phone),
      callback: function($$v) {
        _vm.phone = $$v
      },
      expression: "phone"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "searchBtn searchItem"
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "plain": ""
    },
    on: {
      "click": _vm.getList
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.addUser
    }
  }, [_vm._v("新增")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "close-on-press-escape": false,
      "title": "新增租户",
      "before-close": _vm.cancelAdd,
      "visible": _vm.userVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.userVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "dataForm",
    attrs: {
      "model": _vm.dataForm,
      "label-width": "130px",
      "rules": _vm.dataFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户名",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入用户名",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.dataForm.name),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "name", $$v)
      },
      expression: "dataForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "邮箱",
      "prop": "email"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入邮箱",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.dataForm.email),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "email", $$v)
      },
      expression: "dataForm.email"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话",
      "prop": "phone"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入电话",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.dataForm.phone),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "phone", $$v)
      },
      expression: "dataForm.phone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "公司",
      "prop": "orgId"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "remote": "",
      "reserve-keyword": "",
      "placeholder": "请输入关键词",
      "remote-method": _vm.remoteMethod,
      "loading": _vm.loading
    },
    on: {
      "change": _vm.companyIdChange
    },
    model: {
      value: (_vm.dataForm.orgId),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "orgId", $$v)
      },
      expression: "dataForm.orgId"
    }
  }, _vm._l((_vm.companyList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "部门",
      "prop": "deptId"
    }
  }, [_c('el-cascader', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "options": _vm.departmentList,
      "props": _vm.props,
      "size": "small",
      "change-on-select": ""
    },
    model: {
      value: (_vm.dataForm.deptId),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "deptId", $$v)
      },
      expression: "dataForm.deptId"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "角色",
      "prop": "roleId"
    }
  }, [_c('el-select', {
    attrs: {
      "multiple": "",
      "clearable": "",
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.dataForm.roleId),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "roleId", $$v)
      },
      expression: "dataForm.roleId"
    }
  }, _vm._l((_vm.roleList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注",
      "prop": "remark"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "type": "textarea",
      "autosize": {
        minRows: 2,
        maxRows: 4
      },
      "resize": "none",
      "placeholder": "请输入内容"
    },
    model: {
      value: (_vm.dataForm.remark),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "remark", $$v)
      },
      expression: "dataForm.remark"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "size": "medium"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.cancelAdd($event)
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "medium",
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.submitAdd($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "close-on-press-escape": false,
      "title": "编辑租户",
      "before-close": _vm.cancelEdit,
      "visible": _vm.userVisibleEdit,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.userVisibleEdit = $event
      }
    }
  }, [_c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.editForm,
      "label-width": "130px",
      "rules": _vm.dataFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户名",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入用户名",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.name),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "name", $$v)
      },
      expression: "editForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "邮箱",
      "prop": "email"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入邮箱",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.email),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "email", $$v)
      },
      expression: "editForm.email"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话",
      "prop": "phone"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入电话",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.phone),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "phone", $$v)
      },
      expression: "editForm.phone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "公司",
      "prop": "orgId"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "remote": "",
      "reserve-keyword": "",
      "placeholder": "请输入关键词",
      "remote-method": _vm.remoteMethod,
      "loading": _vm.loading
    },
    on: {
      "change": _vm.companyIdChange
    },
    model: {
      value: (_vm.editForm.orgId),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "orgId", $$v)
      },
      expression: "editForm.orgId"
    }
  }, _vm._l((_vm.companyList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "部门",
      "prop": "deptId"
    }
  }, [_c('el-cascader', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "options": _vm.departmentList,
      "props": _vm.props,
      "size": "small",
      "change-on-select": ""
    },
    model: {
      value: (_vm.editForm.deptId),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "deptId", $$v)
      },
      expression: "editForm.deptId"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "角色",
      "prop": "roleId"
    }
  }, [_c('el-select', {
    attrs: {
      "multiple": "",
      "clearable": "",
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.editForm.roleId),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "roleId", $$v)
      },
      expression: "editForm.roleId"
    }
  }, _vm._l((_vm.roleList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注",
      "prop": "remark"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "type": "textarea",
      "autosize": {
        minRows: 2,
        maxRows: 4
      },
      "resize": "none",
      "placeholder": "请输入内容"
    },
    model: {
      value: (_vm.editForm.remark),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "remark", $$v)
      },
      expression: "editForm.remark"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "size": "medium"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.cancelEdit($event)
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "medium",
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.submitEdit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "margin-top": "10px"
    },
    attrs: {
      "size": "mini",
      "data": _vm.tableData
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "acc_name",
      "label": "用户名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "org_name",
      "label": "公司名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "phone",
      "label": "电话"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "roles",
      "label": "角色"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('i', {
          staticClass: "el-icon-edit",
          staticStyle: {
            "margin-right": "20px"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.tableEdit(scope.row)
            }
          }
        }), _vm._v(" "), _c('i', {
          staticClass: "el-icon-delete",
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.tableDel(scope.row)
            }
          }
        })]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticClass: "pageCurrent",
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.pageSize,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.totalNum
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        _vm.currentPage = $event
      }
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(538);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(200)("bb1c5732", content, true);

/***/ })

});