/*
 * @Date         : 2020-06-15 09:54:27
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-07-01 17:11:44
 * @FilePath     : \dangjianxiangmupcyidongduan\src\store\index.js
 * @Description  : 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //存放token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        //公共可用数据
        commonData: {},
        //配置公用域名IP
        ipAddress: "http://122.51.102.105:8081",
    },
    //同步改变state状态
    mutations: {
        // 修改token，并将token存入localStorage 这个user是个对象 ，Authorizaiton 是这个user下方的属性。
        // saveToken(state, user) {
        //     state.Authorization = user.Authorization;
        //     localStorage.setItem('Authorization', user.Authorization);
        // },
        //存放公共数据 payload数据是一个对象
        saveCommonData(state, payload) {
            state.commonData = payload;

        }
    },
    actions: {},
    modules: {}
})