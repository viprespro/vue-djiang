<!--
 * @Author: your name
 * @Date: 2020-06-22 22:41:12
 * @LastEditTime : 2020-07-07 12:17:19
 * @LastEditors  : 曾迪
 * @Description: In User Settings Edit
 * @FilePath     : \党建项目git同步目录\dangjianxiangmupcyidongduan\src\App.vue
--> 

<template>
  <div id="app">
    <!-- <Header :activeMenu="activeMenuId"></Header> -->
    <!-- include="details-news,details-video,details-radio,details-essay" -->
    <!-- <keep-alive >  -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <!-- <Footer></Footer> -->
    <floatMenu></floatMenu>
  </div>
</template>
<script>
// import tokenInfo from "./api/token.js";
import $ from "jquery";
//导入Header头文件
import Header from "@/components/common/Header.vue";
//导入Footer组件
import Footer from "@/components/common/Footer.vue";
// 导入floatMenu组件
import floatMenu from "@/components/common/floatMenu.vue";
export default {
  data() {
    return {
      pageHeight: "",
      windowHeight: "",
      foo: ""
    };
  },
  watch: {},
  created() {
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
    // let that=this;
     
    // this.handleFooter();
  },
  updated() {
    // this.footAuto();
    // let that=this;
    // this.footAuto();
    // //调整窗口重新调整footer
    // window.onresize=function(){
    //    that.footAuto();
    // }
  },
  methods: {
    saveState() {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state));
    },
    // footAuto() {
    //   var _wh = $(window).height();
    //   var _dh = $(document).height();
    //   var _bh = $(document.body).height();
    //   var _content = $(".content").height();
    //   // var content = document.querySelector(".Memorabilia-content").clientHeight;
    //   console.log(_wh, _content);
      
    //   if ( _content < _wh) {
    //     $(".mx-footer").css({
    //       width: "100%",
    //       position: "fixed",
    //       bottom: "0",
    //       left: "0",
    //        'z-index': "111",
    //     });
    //   } else {
    //     $(".mx-footer").css({
    //       width: "100%",
    //       position: "static",
    //       bottom: "auto",
    //       left: "auto"
    //     });
    //   }
    // }
    
  },
  components: {
    Header,
    Footer,
    floatMenu
  }
};
</script>
<style lang="scss">
.add-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  
  z-index: 111;
  
}
</style>
