/*
 * @Author: your name
 * @Date: 2020-07-02 22:22:14
 * @LastEditTime: 2020-07-02 22:48:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dangjianxiangmupcyidongduan\src\lib\loading.js
 */
import {
    Loading
} from 'element-ui';
export function showLoading(){
    const loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    setTimeout(() => {
        loading.close();
    }, 1500)
}

// let loadingCount = 0;
// var loading;

// const showLoading = () => {
//     let loading = Loading.service({
//         lock: true,
//         text: '加载中……',
//         background: 'rgba(0, 0, 0, 0.7)'
//     });
//     console.log(loading)
//     // setTimeout(() => {
//     //     loading.close();
//     // }, 2000);

// };

// const endLoading = () => {
//     loading.close();
// };

// export const showLoading = () => {
//     // setTimeout(() => {
//     //     loading.close();
//     // }, 2000);
//     if (loadingCount === 0) {
//         startLoading();
//     }
//     loadingCount += 0.5;
// };

// export const hideLoading = () => {
//     if (loadingCount <= 0) {
//         return;
//     }
//     loadingCount -= 0.5;
//     if (loadingCount === 0) {
//         endLoading();
//     }
// };