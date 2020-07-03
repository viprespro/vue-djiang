// import axios from 'axios'
// export default {
//     async getToken(username = 'admin', password = 'admin') {
//         const {
//             data: resInfo
//         } = await axios.get(`/api/login?username=${username}&password=${password}`);
        
//         if (resInfo.code == 0) {
//             localStorage.setItem('Authorization', resInfo.access_token);
//         } else {
//             console.log('登录失败');
//             return false;
//         }
//     }
// }