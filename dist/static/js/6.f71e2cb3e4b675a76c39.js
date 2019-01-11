webpackJsonp([6],{

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(555)

var Component = __webpack_require__(199)(
  /* script */
  __webpack_require__(523),
  /* template */
  __webpack_require__(544),
  /* scopeId */
  null,
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

/***/ 523:
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



/* harmony default export */ __webpack_exports__["default"] = ({
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
                parentId: [{ required: true, message: '请选择单位!', trigger: 'blur' }],
                name: [{ required: true, message: '名称不能为空!', trigger: 'blur' }]
            },

            // 编辑
            departmentEditVisible: false,
            editForm: {
                parentId: '',
                name: '',
                remark: ''
            },
            editFormRules: {
                parentId: [{ required: true, message: '请选择单位!', trigger: 'blur' }],
                name: [{ required: true, message: '名称不能为空!', trigger: 'blur' }]
            },
            // 所有上级部门
            parentList: [{ name: '顶级单位', id: '0' }],

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
            };
            this.accordionList = [];
            this.parentList = [{ name: '顶级单位', id: '0' }];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["d" /* listByOrgId */])(parmas).then(res => {
                this.accordionList = res.data.data;
            });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["t" /* listParent */])(parmas).then(res => {
                for (let i = 0; i < res.data.data.length; i++) {
                    this.parentList.push(res.data.data[i]);
                }
            });
        },

        // 新增
        addDepartment() {
            this.departmentVisible = true;
        },
        submitAdd() {
            this.$refs.dataForm.validate(valid => {
                if (valid) {
                    let parmas = Object.assign({
                        orgId: this.id
                    }, this.dataForm);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["u" /* addDepartment */])(parmas).then(res => {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                        this.getList();
                        this.cancelAdd();
                    });
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
            this.$refs.editForm.validate(valid => {
                if (valid) {
                    let parmas = {
                        id: this.editForm.id,
                        parentId: this.editForm.parentId,
                        orgId: this.editForm.orgId,
                        name: this.editForm.name,
                        remark: this.editForm.remark
                    };
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["v" /* editDepartment */])(parmas).then(res => {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                        this.getList();
                        this.cancelEdit();
                    });
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
            };
            this.$confirm('确认删除？').then(() => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["w" /* delDepartment */])(parmas).then(res => {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Notification__["a" /* default */])(res, this);
                    this.getList();
                });
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
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["x" /* listUserByDeptId */])(parmas).then(res => {
                this.tableData = res.data.data.list;
                this.totalNum = res.data.data.totalCount;
            });
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
});

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(90)();
// imports


// module
exports.push([module.i, ".collapse{width:100%;height:30px;cursor:pointer;line-height:30px}.childCollapse{float:right}.childCollapse i{cursor:pointer;font-size:16px;padding:5px}.department .accordion{width:25%;float:left}", ""]);

// exports


/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "department"
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
      "click": _vm.addDepartment
    }
  }, [_vm._v("新增")])], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "close-on-press-escape": false,
      "title": "新增",
      "before-close": _vm.cancelAdd,
      "visible": _vm.departmentVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.departmentVisible = $event
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
      "label": "上级部门",
      "prop": "parentId"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.dataForm.parentId),
      callback: function($$v) {
        _vm.$set(_vm.dataForm, "parentId", $$v)
      },
      expression: "dataForm.parentId"
    }
  }, _vm._l((_vm.parentList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
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
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-collapse', {
    staticClass: "accordion",
    attrs: {
      "accordion": ""
    },
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, _vm._l((_vm.accordionList), function(item, index) {
    return _c('el-collapse-item', {
      attrs: {
        "name": index
      }
    }, [_c('template', {
      slot: "title"
    }, [_vm._v("\n                " + _vm._s(item.name) + "\n                "), _c('div', {
      staticClass: "childCollapse"
    }, [_c('i', {
      staticClass: "el-icon-edit",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.editCollapse(item)
        }
      }
    }), _vm._v(" "), _c('i', {
      staticClass: "el-icon-delete",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.delCollapse(item)
        }
      }
    })])]), _vm._v(" "), _vm._l((item.childDept), function(childItem, childIndex) {
      return _c('div', {
        staticClass: "collapse",
        on: {
          "click": function($event) {
            _vm.getUserListClick(childItem)
          }
        }
      }, [_vm._v("\n                " + _vm._s(childItem.name) + "\n                "), _c('div', {
        staticClass: "childCollapse"
      }, [_c('i', {
        staticClass: "el-icon-edit",
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.editCollapse(childItem)
          }
        }
      }), _vm._v(" "), _c('i', {
        staticClass: "el-icon-delete",
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.delCollapse(childItem)
          }
        }
      })])])
    })], 2)
  })), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "close-on-press-escape": false,
      "title": "编辑",
      "before-close": _vm.cancelEdit,
      "visible": _vm.departmentEditVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.departmentEditVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.editForm,
      "label-width": "130px",
      "rules": _vm.editFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "上级部门",
      "prop": "parentId"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.parentId),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "parentId", $$v)
      },
      expression: "editForm.parentId"
    }
  }, _vm._l((_vm.parentList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
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
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "right",
      "width": "70%",
      "margin-top": "0"
    }
  }, [_c('el-table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tableData.length !== 0),
      expression: "tableData.length !== 0"
    }],
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
      "prop": "phone",
      "label": "电话"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "email",
      "label": "邮箱"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                    " + _vm._s(scope.row.disabled ? '启用' : '禁用') + "\n                ")]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tableData.length !== 0),
      expression: "tableData.length !== 0"
    }],
    staticClass: "pageCurrent",
    staticStyle: {
      "width": "100%",
      "text-align": "right"
    },
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
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(530);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(200)("ab0b6ac2", content, true);

/***/ })

});