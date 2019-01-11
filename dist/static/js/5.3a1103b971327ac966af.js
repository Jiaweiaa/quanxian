webpackJsonp([5],{

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(556)

var Component = __webpack_require__(199)(
  /* script */
  __webpack_require__(525),
  /* template */
  __webpack_require__(545),
  /* scopeId */
  "data-v-21cfa3f5",
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

/***/ 525:
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





/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            name: '',
            url: '',

            roleList: [],

            // 新增
            typeList: [{
                name: 'get',
                value: 'get'
            }, {
                name: 'post',
                value: 'post'
            }, {
                name: 'put',
                value: 'put'
            }, {
                name: 'delete',
                value: 'delete'
            }],
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
                name: [{ required: true, message: '请输入姓名!', trigger: 'blur' }],
                type: [{ required: true, message: '请选择类型!', trigger: 'blur' }],
                url: [{ required: true, message: '请输入url!', trigger: 'blur' }]
            },
            editForm: {
                name: '',
                type: '',
                url: '',
                msg: ''
            },
            editFormRules: {
                name: [{ required: true, message: '请输入姓名!', trigger: 'blur' }],
                type: [{ required: true, message: '请选择类型!', trigger: 'blur' }],
                url: [{ required: true, message: '请输入url!', trigger: 'blur' }]
            },

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
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["k" /* permissList */])(parmas).then(res => {
                this.tableData = res.data.data.list;
                this.totalNum = res.data.data.totalCount;
            });
        },
        cancelAdd() {
            this.$refs['dataForm'].resetFields();
            this.roleVisible = false;
        },
        submitAdd() {
            this.$refs.dataForm.validate(valid => {
                if (valid) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["q" /* createPermiss */])(this.dataForm).then(res => {
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
        editJuris(val) {
            this.editForm = Object.assign({}, val);
            this.editVisible = true;
        },
        delJuris(val) {
            let parmas = {
                id: val.id
            };
            this.$confirm('确认删除？').then(() => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["r" /* delPermiss */])(parmas).then(res => {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                    this.getList();
                });
            }).catch(() => {});
        },

        //编辑
        submitEdit() {
            this.$refs.editForm.validate(valid => {
                if (valid) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["s" /* editPermiss */])(this.editForm).then(res => {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                        this.cancelEdit();
                        this.getList();
                    });
                }
            });
        },
        cancelEdit() {
            this.$refs['editForm'].resetFields();
            this.editVisible = false;
        }

    }
});

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, ".role .box-card[data-v-21cfa3f5]{width:25%;float:left}.role .box-card .item[data-v-21cfa3f5]{font-size:13px}.role .childRole[data-v-21cfa3f5]{float:right}.role .childRole i[data-v-21cfa3f5]{cursor:pointer;font-size:16px;margin-right:5px}", ""]);

// exports


/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "role"
  }, [_c('el-dialog', {
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
      "label": "URL",
      "prop": "url"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入名称",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.dataForm.url),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "url", $$v)
      },
      expression: "dataForm.url"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "类型",
      "prop": "type"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.dataForm.type),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "type", $$v)
      },
      expression: "dataForm.type"
    }
  }, _vm._l((_vm.typeList), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.name,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
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
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "searchBox"
  }, [_c('div', {
    staticClass: "searchItem"
  }, [_c('p', {
    staticClass: "itemName"
  }, [_vm._v("名称:")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入名称",
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
  }, [_vm._v("URL:")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入URL",
      "size": "small"
    },
    model: {
      value: (_vm.url),
      callback: function($$v) {
        _vm.url = $$v
      },
      expression: "url"
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
      "click": _vm.addRole
    }
  }, [_vm._v("新增")])], 1)]), _vm._v(" "), _c('el-table', {
    attrs: {
      "table": "",
      "size": "mini",
      "data": _vm.tableData
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "type",
      "label": "类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "url",
      "label": "url"
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
            "margin-right": "10px",
            "cursor": "pointer"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.editJuris(scope.row)
            }
          }
        }), _vm._v(" "), _c('i', {
          staticClass: "el-icon-delete",
          staticStyle: {
            "margin-right": "10px",
            "cursor": "pointer"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.delJuris(scope.row)
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
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "close-on-press-escape": false,
      "title": "编辑",
      "before-close": _vm.cancelEdit,
      "visible": _vm.editVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.editVisible = $event
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
      value: (_vm.editForm.name),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "name", $$v)
      },
      expression: "editForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "URL",
      "prop": "url"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": "请输入名称",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.url),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "url", $$v)
      },
      expression: "editForm.url"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "类型",
      "prop": "type"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.type),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "type", $$v)
      },
      expression: "editForm.type"
    }
  }, _vm._l((_vm.typeList), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.name,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
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
      value: (_vm.editForm.msg),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "msg", $$v)
      },
      expression: "editForm.msg"
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
  }, [_vm._v("提交")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(531);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(200)("6cae07f4", content, true);

/***/ })

});