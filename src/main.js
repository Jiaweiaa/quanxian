import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import axios from 'axios'

axios.defaults.withCredentials = true;
Vue.use(ElementUI);


//POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'get') {
        var querystring = require('querystring');
        config.data = querystring.encode(config.data);
    }
    if (config.method === 'post') {
        var querystring = require('querystring');
        config.data = querystring.encode(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');