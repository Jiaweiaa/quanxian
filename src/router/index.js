import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            name: '首页',
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    name: '租户',
                    path: '/tenant',
                    component: resolve => require(['../components/page/Tenant.vue'], resolve),
                    children: [
                        {
                            name: '部门',
                            path: '/department',
                            component: resolve => require(['../components/page/Department.vue'], resolve)
                        }
                    ]
                },
                {
                    name: '日志',
                    path: '/journal',
                    component: resolve => require(['../components/page/Journal.vue'], resolve)
                },
                {
                    name: '权限',
                    path: '/jurisdiction',
                    component: resolve => require(['../components/page/Jurisdiction.vue'], resolve)
                },
                {
                    name: '角色',
                    path: '/role',
                    component: resolve => require(['../components/page/Role.vue'], resolve)
                },
                {
                    name: '用户',
                    path: '/user',
                    component: resolve => require(['../components/page/User.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
