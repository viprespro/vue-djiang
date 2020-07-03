import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
        //公共可用数据
        commonData: {},
        
        //配置公用域名IP
        ipAddress: "http://122.51.102.105:8081",

        // 唯一固定的鉴权Code
        authCode: "44e3f02f3f6c4611bbee5ef0f030212a"
    },
    
    //同步改变state状态
    mutations: {
        //存放公共数据 payload数据是一个对象
        saveCommonData(state, payload) {
            state.commonData = payload;
        }
    },
})