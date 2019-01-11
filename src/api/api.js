import axios from 'axios'

let base = '/auth';

export const urlGlobal = base;


// 登陆
export const login = params => { return axios.post(`${base}/login`, params); };
// 新增租户
export const addTenant = params => { return axios.post(`${base}/organize/create`, params); };
// 获取租户列表
export const getTenantList = params => { return axios.post(`${base}/organize/getOrganizeList`, params); };
// 租户开关
export const editTenant = params => { return axios.post(`${base}/organize/editDisabled`, params); };
// 获取租户下的部门
export const listByOrgId = params => { return axios.post(`${base}/dept/listByOrgId`, params); };
// 拿所有的上级的部门
export const listParent = params => { return axios.post(`${base}/dept/listParent`, params); };
// 新增部门
export const addDepartment = params => { return axios.post(`${base}/dept/add`, params); };
// 编辑部门
export const editDepartment = params => { return axios.post(`${base}/dept/edit`, params); };
// 删除部门
export const delDepartment = params => { return axios.post(`${base}/dept/del`, params); };
// 部门用户列表
export const listUserByDeptId = params => { return axios.post(`${base}/dept/listUserByDeptId`, params); };

// 用户列表
export const roleList = params => { return axios.post(`${base}/role/getList`, params); };
// 创建用户
export const roleCreate = params => { return axios.post(`${base}/role/create`, params); };
// 编辑用户
export const roleEdit = params => { return axios.post(`${base}/role/edit`, params); };
// 删除用户
export const roleDel = params => { return axios.post(`${base}/role/del`, params); };
// 创建用户权限
export const createRolePerd = params => { return axios.post(`${base}/role/createRolePer`, params); };
// 获取用户下的所有权限
export const getListByRoleId = params => { return axios.post(`${base}/role/getListByRoleId`, params); };
// 新建用户权限
export const createPermiss = params => { return axios.post(`${base}/permission/create`, params); };
// 获取权限列表
export const permissList = params => { return axios.post(`${base}/permission/getList`, params); };
// 编辑权限列表
export const editPermiss = params => { return axios.post(`${base}/permission/edit`, params); };
// 删除权限列表
export const delPermiss = params => { return axios.post(`${base}/permission/del`, params); };
// 列表删除
export const delRolePer = params => { return axios.post(`${base}/role/delRolePer`, params); };

// user表
export const listAccount = params => { return axios.post(`${base}/account/listAccount`, params); };
// 公司模糊匹配查询
export const getOrganize = params => { return axios.post(`${base}/organize/getOrganize`, params); };
// 用户新增
export const createAccount = params => { return axios.post(`${base}/account/createAccount`, params); };
// 删除
export const delAccount = params => { return axios.post(`${base}/account/del`, params); };
// 编辑获取详情
export const getAccountInfo = params => { return axios.post(`${base}/account/getAccountInfo`, params); };
// 编辑提交
export const editAccount = params => { return axios.post(`${base}/account/edit`, params); };