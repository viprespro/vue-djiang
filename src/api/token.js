/*
 * @Date         : 2020-06-28 09:51:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-01 13:37:53
 * @FilePath     : \dangjianxiangmupcyidongduan\src\api\token.js
 * @Description  : 
 */
// import Vue from 'vue'
import axios from 'axios'
// 导入vuex
// import store from '../store/index.js'
export default {
    /**
     * @desc:  用于获取token
     * @param {type} 
     * @return:  
     */
    async getToken(username = 'admin', password = 'admin') {
        const {
            data: resInfo
        } = await axios.get(`/api/login?username=${username}&password=${password}`);
        if (resInfo.code === 0) {
            //把token存储到localStorage中去
            localStorage.setItem('Authorization', resInfo.access_token);
        } else {
            console.log('登录失败');
            return false;
        }
        // console.log(localStorage.getItem('Authorization'));


        // return resInfo.access_token;

    }


}