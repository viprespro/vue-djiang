import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
//导入公共样式
//基础css
import './assets/scss/base.scss'
//导入字体样式
import './assets/css/iconfont.css'

//导入elementui  css
import 'element-ui/lib/theme-chalk/index.css'
// 公用css
import './assets/css/common.css'
//导入通用样式
import './assets/css/mx-style.css'

//导入2倍距离(移动端apk使用 375*768)
import './assets/css/two-media.scss'
//导入图片大小控制
import './assets/css/img-ctrl.scss'
//导入主题色
import './assets/css/themes.css'
//导入lib-flexible
import './assets/js/flexible.js'
//导入element.js
import './plugins/element.js'

//导入Swiper
// import Swiper from 'swiper'
import './assets/css/swiper.min.css';

//使用elementui
Vue.use(ElementUI)
//定义全局过滤器 处理时间
Vue.filter('timeCut', function (originVal) {
    return originVal.substring(5, 10).replace('/', '-');
});

import {
    showLoading
} from './lib/loading.js';

//引入axios
import axios from 'axios'
//导入token.js
import tokenInfo from './api/token.js'
//默认全局路由地址配置
axios.defaults.baseURL = 'http://122.51.102.105:8081';

//挂载到原型上去
Vue.prototype.$http = axios;

//axios请求拦截器
axios.interceptors.request.use(config => {
    if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem('Authorization');
    }
    // showLoading();
    return config;
}, error => {
    return Promise.reject(error);
})

//axios 响应拦截器
axios.interceptors.response.use(res => {
    //code 401 身份验证失败 或者token过期
    if (res.data.code !== 0) {
        //重新登录请求token
        tokenInfo.getToken();
    }
    return res;
}, error => {
    return Promise.reject(error);
})

Vue.config.productionTip = false;

//动态修改标题
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')