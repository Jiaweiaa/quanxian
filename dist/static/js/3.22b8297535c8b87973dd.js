webpackJsonp([3],{

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(564)

var Component = __webpack_require__(199)(
  /* script */
  __webpack_require__(527),
  /* template */
  __webpack_require__(554),
  /* scopeId */
  "data-v-b2f1cb2c",
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

/***/ 527:
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




/* harmony default export */ __webpack_exports__["default"] = ({
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
                permissionId: [{ required: true, message: '请选择权限!', trigger: 'blur' }]
            },

            // 左侧
            roleVisible: false,
            // 新增
            dataForm: {
                name: '',
                msg: ''
            },
            dataFormRules: {
                name: [{ required: true, message: '请输入姓名!', trigger: 'blur' }]
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
            };
            this.$confirm('确认删除？').then(() => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["j" /* delRolePer */])(parmas).then(res => {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                    this.getRoleList();
                });
            }).catch(() => {});
        },
        // 新增权限模糊查询
        remoteMethod(query) {
            if (query !== '') {
                let parmas = {
                    pageSize: 999,
                    name: query
                };
                this.loading = true;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["k" /* permissList */])(parmas).then(res => {
                    this.typeList = res.data.data.list;
                    this.loading = false;
                });
            }
        },
        // 右侧操作
        addJurisd() {
            this.jurisdVisible = true;
        },
        submitAddJusd() {
            this.$refs.jurisdForm.validate(valid => {
                if (valid) {
                    let parmas = Object.assign({
                        roleId: this.roleId
                    }, this.jurisdForm);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["l" /* createRolePerd */])(parmas).then(res => {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                        this.getRoleList();
                        this.cancelAddJusd();
                    });
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
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["m" /* getListByRoleId */])(parmas).then(res => {
                this.tableData = res.data.data.list;
            });
        },

        cancelAdd() {
            this.roleVisible = false;
            this.roleVisibleEdit = false;
            this.$refs['dataForm'].resetFields();
        },
        getList() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["b" /* roleList */])().then(res => {
                this.roleList = res.data.data.list;
            });
        },
        submitAdd() {
            this.$refs.dataForm.validate(valid => {
                if (valid) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["n" /* roleCreate */])(this.dataForm).then(res => {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                        this.cancelAdd();
                        this.getList();
                    });
                }
            });
        },
        submitEdit() {
            this.$refs.dataForm.validate(valid => {
                if (valid) {
                    let parmas = {
                        id: this.dataForm.id,
                        name: this.dataForm.name,
                        msg: this.dataForm.msg
                    };
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["o" /* roleEdit */])(parmas).then(res => {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                        this.cancelAdd();
                        this.getList();
                    });
                }
            });
        },
        addRole() {
            this.roleVisible = true;
        },
        editRole(val) {
            this.roleVisibleEdit = true;
            this.dataForm = Object.assign({}, val);
        },
        delRole(val) {
            let parmas = {
                id: val.id
            };
            this.$confirm('确认删除？').then(() => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["p" /* roleDel */])(parmas).then(res => {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                    this.getList();
                });
            }).catch(() => {});
        }
    }
});

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, ".role .box-card[data-v-b2f1cb2c]{width:25%;float:left}.role .box-card .item[data-v-b2f1cb2c]{font-size:13px;height:25px;line-height:25px;cursor:pointer}.role .childRole[data-v-b2f1cb2c]{float:right}.role .childRole i[data-v-b2f1cb2c]{cursor:pointer;font-size:16px;margin-right:5px}", ""]);

// exports


/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "role"
  }, [_c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    staticStyle: {
      "margin-bottom": "10px",
      "width": "100%"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.addRole
    }
  }, [_vm._v("新增")])], 1), _vm._v(" "), _vm._l((_vm.roleList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      on: {
        "click": function($event) {
          _vm.clickRole(item)
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n            "), _c('div', {
      staticClass: "childRole"
    }, [_c('i', {
      staticClass: "el-icon-edit",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.editRole(item)
        }
      }
    }), _vm._v(" "), _c('i', {
      staticClass: "el-icon-delete",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.delRole(item)
        }
      }
    })])])
  })], 2), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "close-on-press-escape": false,
      "title": "新增",
      "before-close": _vm.cancelAdd,
      "visible": _vm.roleVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.roleVisible = $event
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
      "label": "名称",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入名称",
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
      "label": "备注",
      "prop": "msg"
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
      value: (_vm.dataForm.msg),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "msg", $$v)
      },
      expression: "dataForm.msg"
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
      "title": "编辑",
      "before-close": _vm.cancelAdd,
      "visible": _vm.roleVisibleEdit,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.roleVisibleEdit = $event
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
      "label": "名称",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入名称",
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
      "label": "备注",
      "prop": "msg"
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
      value: (_vm.dataForm.msg),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "msg", $$v)
      },
      expression: "dataForm.msg"
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
        return _vm.submitEdit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.roleId),
      expression: "roleId"
    }],
    staticClass: "jusridClass"
  }, [_c('div', {
    staticStyle: {
      "margin-bottom": "10px",
      "width": "100%"
    }
  }, [_c('el-button', {
    staticStyle: {
      "margin-left": "5%"
    },
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.addJurisd
    }
  }, [_vm._v("新增")])], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "close-on-press-escape": false,
      "title": "添加权限",
      "before-close": _vm.cancelAddJusd,
      "visible": _vm.jurisdVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.jurisdVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "jurisdForm",
    attrs: {
      "model": _vm.jurisdForm,
      "label-width": "130px",
      "rules": _vm.jurisdFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "权限",
      "prop": "permissionId"
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
    model: {
      value: (_vm.jurisdForm.permissionId),
      callback: function($$v) {
        _vm.$set(_vm.jurisdForm, "permissionId", $$v)
      },
      expression: "jurisdForm.permissionId"
    }
  }, _vm._l((_vm.typeList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('div', {
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
        return _vm.cancelAddJusd($event)
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "medium",
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.submitAddJusd($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "float": "right",
      "width": "70%",
      "margin-top": "0"
    },
    attrs: {
      "size": "mini",
      "data": _vm.tableData
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "姓名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "type",
      "label": "类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "url",
      "label": "URL"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('i', {
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
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(539);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(200)("39169179", content, true);

/***/ })

});