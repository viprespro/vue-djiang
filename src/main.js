import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入公共样式
//基础css
import './assets/scss/base.scss' 
//导入字体样式
import './assets/css/iconfont.css'
 //主题css
// import './assets/scss/reset-themes.scss'
// 公用css
import './assets/css/common.css'

 //导入通用样式
 import './assets/css/mx-style.css'
//导入主题色
import './assets/css/themes.css'
//导入lib-flexible
import './assets/js/flexible.js'
//导入Swiper
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.css';
import './assets/css/swiper.min.css';
//引入接口
// import Axios from "./lib/ajax.js";
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
