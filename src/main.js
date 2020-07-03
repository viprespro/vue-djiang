/*
 * @Date         : 2020-06-15 09:54:27
 * @FilePath     : \dangjianxiangmupcyidongduan\src\main.js
 * @Description  : 
 */
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
Vue.filter('timeCut', function(originVal) {
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
//axios请求拦截器
axios.interceptors.request.use(config => {

        console.log(config);
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
        console.log(res);
        console.log(res.data.code);
        //code 401 身份验证失败 或者token过期
        if (res.data.code !== 0) {
            //移除旧的token信息
            //localStorage.removeItem('Authorization');
            //重新登录请求token
            tokenInfo.getToken();
            // console.log()
            // //重新设置token
            // localStorage.setItem('Authorization', localStorage.getItem('Authorization'));
        }
        // else if (res.headers.Authorization) {
        //     //判断头部信息里面token是否存在，如果存在说明需要更新token 此时localStorage.getItem('Authorization')是新的值
        //     // localStorage.setItem('Authorization', localStorage.getItem('Authorization'));
        // }

        return res;
    }, error => {

        return Promise.reject(error);
    })
    //挂载到原型上去
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
//动态修改标题
router.beforeEach((to, from, next) => {
        if (to.meta.title) {
            document.title = to.meta.title;
        }
        next();
    })
    //路由守卫
    // router.beforeEach((to, from, next) => {
    //     console.log(to);
    //     console.log(from);
    //     let reg = /\/details-(news|video|radio|essay)\/[1-9]+/;
    //     if (reg.test(to.path)) {
    //         // if (localStorage.getItem('detailData')) return;
    //         localStorage.setItem('detailData', JSON.stringify(to.params));
    //         console.log(1)
    //         console.log(to.params)

//         console.log(localStorage.getItem('detailData'));
//     }

//     //直接调用表示放行
//     next();
// })
// 保存参数
// router.beforeEach((to, from, next) => {
//     //通过该方式可以保存 VueRouter 的数据不被刷新
//     localStorage.setItem('routerParams', JSON.stringify(to.params));
//     next()
// });
// 动态修改title
// let title=to.meta.title;
// document.title=title;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')