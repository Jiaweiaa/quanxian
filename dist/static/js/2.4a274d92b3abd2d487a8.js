webpackJsonp([2],{

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(562)

var Component = __webpack_require__(199)(
  /* script */
  __webpack_require__(528),
  /* template */
  __webpack_require__(552),
  /* scopeId */
  "data-v-af97bcc4",
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

/***/ 528:
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




/* harmony default export */ __webpack_exports__["default"] = ({
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
                name: [{ required: true, message: '公司名称不能为空!', trigger: 'blur' }],
                principal: [{ required: true, message: '负责人姓名不能为空!', trigger: 'blur' }],
                principalPhone: [{ required: true, message: '负责人电话不能为空!', trigger: 'blur' }],
                address: [{ required: true, message: '公司地址不能为空!', trigger: 'blur' }]
            },
            tenantVisible: false,

            // 列表数据
            tableData: [],
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
        // 跳转部门页
        goDepartment(val) {
            this.$router.push({
                path: '/department',
                query: {
                    id: val.id
                }
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
        // 获取列表
        getList() {
            let parmas = {
                pageSize: this.pageSize,
                pageNo: this.currentPage,
                name: this.name,
                address: this.address,
                principal: this.principal

            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["y" /* getTenantList */])(parmas).then(res => {
                this.tableData = res.data.data.list;
                this.totalNum = res.data.data.totalCount;
            });
        },

        // 开关更改
        disableChange(val) {
            let parmas = {
                id: val.id,
                disabled: val.disabled
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["z" /* editTenant */])(parmas).then(res => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this, status => {
                    if (status === 'success') {
                        this.getList();
                    }
                });
            });
        },

        // 新增租户
        addTenant() {
            this.tenantVisible = true;
        },

        // 提交新增和取消
        submitAdd() {
            this.$refs.dataForm.validate(valid => {
                if (valid) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["A" /* addTenant */])(this.dataForm).then(res => {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                        this.getList();
                        this.cancelAdd();
                    });
                }
            });
        },
        cancelAdd() {
            this.tenantVisible = false;
            this.$refs['dataForm'].resetFields();
        }
    }
});

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, ".tenant[data-v-af97bcc4]{overflow:hidden}", ""]);

// exports


/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tenant"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (this.$router.history.current.path == '/tenant'),
      expression: "this.$router.history.current.path == '/tenant'"
    }]
  }, [_c('div', {
    staticClass: "searchBox"
  }, [_c('div', {
    staticClass: "searchItem"
  }, [_c('p', {
    staticClass: "itemName"
  }, [_vm._v("公司名称:")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入公司名称",
      "size": "small"
    },
    model: {
      value: (_vm.name),
      callback: function($$v) {
        _vm.name = $$v
      },
      expression: "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "searchItem"
  }, [_c('p', {
    staticClass: "itemName"
  }, [_vm._v("负责人姓名:")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入负责人姓名",
      "size": "small"
    },
    model: {
      value: (_vm.principal),
      callback: function($$v) {
        _vm.principal = $$v
      },
      expression: "principal"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "searchItem"
  }, [_c('p', {
    staticClass: "itemName"
  }, [_vm._v("地址:")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入地址"
    },
    model: {
      value: (_vm.address),
      callback: function($$v) {
        _vm.address = $$v
      },
      expression: "address"
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
      "click": _vm.addTenant
    }
  }, [_vm._v("新增")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "close-on-press-escape": false,
      "title": "新增租户",
      "before-close": _vm.cancelAdd,
      "visible": _vm.tenantVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.tenantVisible = $event
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
      "label": "公司名称",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
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
      "label": "负责人姓名",
      "prop": "principal"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.dataForm.principal),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "principal", $$v)
      },
      expression: "dataForm.principal"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系电话",
      "prop": "principalPhone"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.dataForm.principalPhone),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "principalPhone", $$v)
      },
      expression: "dataForm.principalPhone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "公司地址",
      "prop": "address"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.dataForm.address),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "address", $$v)
      },
      expression: "dataForm.address"
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
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "table": "",
      "size": "mini",
      "data": _vm.tableData
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "公司名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "principal",
      "label": "负责人姓名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "principalPhone",
      "label": "负责人电话"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "address",
      "label": "地址"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "address",
      "label": "入住时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "禁用"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-switch', {
          attrs: {
            "active-color": "#13ce66",
            "inactive-color": "#ff4949"
          },
          on: {
            "change": function($event) {
              _vm.disableChange(scope.row)
            }
          },
          model: {
            value: (scope.row.disabled),
            callback: function($$v) {
              _vm.$set(scope.row, "disabled", $$v)
            },
            expression: "scope.row.disabled"
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('i', {
          staticClass: "el-icon-setting",
          staticStyle: {
            "cursor": "pointer"
          },
          on: {
            "click": function($event) {
              _vm.goDepartment(scope.row)
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
  })], 1), _vm._v(" "), _c('router-view', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (this.$router.history.current.path == '/department'),
      expression: "this.$router.history.current.path == '/department'"
    }]
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(537);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(200)("3d63f88f", content, true);

/***/ })

});