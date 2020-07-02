<template>
  <div id="app" style="overflow:unset;">
    <!-- 头开始 -->
     <Header :activeMenu="activeMenuId"></Header>
    <!-- 头结束 -->
    <!-- 内容开始 -->
    <div class="Memorabilia-content">
      <!-- 面包屑导航start -->
      <div class="phone-none">
        <div class="layout-wrapper">
          <div class="layout">
            <div class="c1-wrapper">
              <div class="c1">
                <!-- 该组件需要传值  需要props  topNav 是一级导航  secNav 二级导航  thirdNav 三级导航-->
                <breadCrumbNav :topNav="topNav"></breadCrumbNav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 面包屑导航end -->
      <!--列表标题区域 start-->
      <div class="layout-wrapper">
        <div class="layout">
          <div class="c1-wrapper">
            <div class="c1">
              <!-- 组件使用 -->
              <columnTitleInfo></columnTitleInfo>
            </div>
          </div>
        </div>
      </div>
      <!--列表标题区域 end-->
      <!-- 列表类区域  start -->
      <div class="layout-wrapper">
        <div class="layout">
          <div class="c1-wrapper">
            <div class="c1">
              <!-- 组件使用 -->
              <columnClassNav></columnClassNav>
            </div>
          </div>
        </div>
      </div>
      <!-- 列表类区域  end -->
      <!-- book-news start -->
      <div class="layout-wrapper">
        <div class="layout r-60-40 clearfix">
          <div class="c1-wrapper">
            <div class="c1">
                <coversNews></coversNews>
            </div>
          </div>
        </div>
      </div>
      <!--  book-news end -->
    </div>
    <!-- 内容结束-->

    <!-- 尾部开始 -->
    <Footer></Footer>
    <!-- 尾部结束 -->
  </div>
</template>
<style scoped="scoped">
.layout-wrapper {
  width: 100%;
  display: block;
  clear: both;
}
/* 低于960*/
@media only screen and (max-width: 959px) {
}
/* 960 -1240尺寸 */
@media only screen and (min-width: 960px) and (max-width: 1239px) {
  .layout {
    width: 960px;
    margin: 0 auto;
  }
}

/*1240尺寸以上 */
@media only screen and (min-width: 1240px) {
  .layout {
    width: 1200px;
    margin: 0 auto;
    /* background: blue; */
  }
}
</style>
<!-- <style scoped src="@/assets/css/media-query/index.css"></style> -->
<script>
//导入Header头文件
import Header from "@/components/common/Header.vue";
// 导入面包屑导航组件
import breadCrumbNav from "@/components/common/breadCrumbNav.vue";

import columnTitleInfo from "@/components/common/columnTitleInfo.vue";
import columnClassNav from "@/components/common/columnClassNav.vue";
//导入coversNews
import coversNews from "@/components/common/coversNews.vue"

//导入Footer组件
import Footer from "@/components/common/Footer.vue";
//导入jquery
import $ from "jquery";
//导入swiper
import Swiper from "swiper";
// 导入token.js
// import tokenFun from "@/api/token";
export default {
  data() {
    return {
       activeMenuId:0,
      //用于存放当前全局token
      tokenStr: "",
      //定义ip地址
      ipAddress: "http://122.51.102.105:8081",
      //用于存放接口取来的数据
      categoryDataList: [],
      hotDataList: [],
      latestDataList: [],
      topicDataList: [],
      //存放路由导航信息 先写死
      topNav: "党建文库"
    };
  },
  //生命周期
  created(){
    //加载首屏数据
    this.getData();
    //调用轮播方法
    //this._initSwiper();
    //窗口调整函数 并实现轮播图片居中
    // window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy(){
    // window.removeEventListener('resize', this.handleResize)
  },
  mounted(){
    //获取swiper
    this.getSwiper();
     console.log(this.$route.path.slice(-1));
    this.activeMenuId=this.$route.path.slice(-1);
  },
  methods: {
    async getData() {
      //   let tokenStr = tokenFun("admin", "admin");
      //   this.tokenStr=tokenStr;
      let { data: resInfo } = await this.$http.get(
        "/api/login?username=admin&password=admin"
      );

      this.tokenStr = resInfo.access_token;
      console.log(this.tokenStr);
      let { data: res } = await this.$http.get("/api/home", {
        params: {
          access_token: this.tokenStr
        }
      });
      console.log(res);
      // 判断数据是否获取成功
      if (res.code != 0) {
        console.log("数据获取失败");
        return;
      } else {
        //数据获取成功
        let data = res.data;
        console.log(data);
        // console.log(data.category)
        //拿到对应模块的数据
        this.categoryDataList = data.category;
        this.hotDataList = data.hot;
        this.topicDataList = data.topics;
        this.latestDataList = data.latest;
      }
    },
    test() {
      $(".test").html(1222);
    },
    // 获取当前页面的尺寸。
    handleResize(event) {
      this.fullWidth = document.documentElement.clientWidth;
      console.log(this.fullWidth);
      // document.querySelector('.layout-12-wrapper').style.width=this.fullWidth;
      //修改所有swiper-slide的尺寸
      document.querySelectorAll(".swiper-slide").style.width = this.fullWidth;
    },
    getSwiper() {
      new Swiper(".swiper-container", {
        direction: "horizontal",

        //播放速度

        loop: true,

        // 自动播放时间

        autoplay: true,

        // 播放的速度

        speed: 2000,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }

        // 如果需要前进后退按钮
        // navigation: {
        // 	nextEl: '.swiper-button-next',
        // 	prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        // 	el: '.swiper-scrollbar',
        // },
      });
    }
  },
  components: {
    Header,
    breadCrumbNav,
    columnTitleInfo,
    columnClassNav,
    coversNews,
    Footer
  }
};
</script>




