<!--
 * @Author: your name
 * @Date: 2020-06-22 22:41:12
 * @LastEditTime: 2020-07-06 01:15:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dangjianxiangmupcyidongduan\src\App.vue
--> 

<template>
  <div id="app">
   <!-- <Header :activeMenu="activeMenuId"></Header> -->
    <!-- <keep-alive include="details-news,details-video,details-radio,details-essay"> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    <!-- <Footer></Footer> -->
    <floatMenu></floatMenu>
  </div>
</template>
<script>
// import tokenInfo from "./api/token.js";
import $ from 'jquery'
//导入Header头文件
import Header from "@/components/common/Header.vue";
//导入Footer组件
import Footer from "@/components/common/Footer.vue";
 // 导入floatMenu组件
import floatMenu from "@/components/common/floatMenu.vue";
export default {
  data(){
    return{
      pageHeight:'',
      windowHeight:'',
      foo:''
    }
  },
  watch:{
    foo: function(){
      if(this.foo>0){
        return 1;
      }
    }
  },
  created() {
    // this.foo=document.body.clientHeight-document.documentElement.clientHeight;
    // console.log(this.foo)
    //在页面加载时读取sessionStorage/localStorage里的状态信息 vuex的刷新页面丢失问题处理
    if (localStorage.getItem("storedata")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("storedata"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("storedata", JSON.stringify(this.$store.state));
    });
    // 兼容iphone手机
    window.addEventListener("pagehide", () => {
      localStorage.setItem("storedata", JSON.stringify(this.$store.state));
    });
  },
  mounted() {
    window.addEventListener("unload", this.saveState);
    // this.handleFooter();
  },
  updated(){
    // this.foo=document.body.clientHeight-document.documentElement.clientHeight;
    // console.log(this.foo)
    // console.log(1)
    //  this.handleFooter();
  },
  methods: {
    saveState() {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state));
    },
    //判断内容高度是否大于窗口的高度，大于则取消底部的固定定位
    // handleFooter(){
    //  // console.log($(document).height());
    //   //console.log($(window).height());
    //   if($(document).height()-$(window).height()>0){
    //    // console.log(1)
    //     $('#FooterBox').removeClass('add-footer');
    //   }
    // }
  },
  components:{
     Header,
     Footer,
    floatMenu
  }
};
</script>
<style lang="scss" scoped="scoped">
  
</style>
