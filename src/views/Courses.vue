<template>
  <div id>
    <!-- 头开始 -->
     <Header :activeMenu="activeMenuId"></Header>
    <!-- 头结束 -->
    <!-- 内容开始 -->
    <div class="content">
      <!-- 面包屑导航start -->
      <div class="phone-none">
        <div class="layout-wrapper">
          <div class="layout">
            <div class="c1-wrapper">
              <div class="c1">
               
               <breadCrumbNav :categoryList="categoryDataList" :categoryId="categoryId"></breadCrumbNav>
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
              
              <columnTitleInfo  :categoryDetailList="categoryDetailDataList"></columnTitleInfo>
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
             
               <columnClassNav :activeMenu="activeMenuId" :categoryList="categoryDataList" ></columnClassNav>
            </div>
          </div>
        </div>
      </div>
      <!-- 列表类区域  end -->
      <!-- 轮播图+ 4个上下横排视频 start -->
      <div class="layout-wrapper">
        <div class="layout r-60-40 clearfix">
          <div class="c1-wrapper">
            <div class="c1">
              <swiperBox :lastestList="latestDataList" :isCoursePage="isCoursePage"></swiperBox>
            </div>
          </div>
          <div class="c2-wrapper">
            <div class="c2">
              <thumbnailsVideoNews :latestList="latestDataList"></thumbnailsVideoNews>
            </div>
          </div>
        </div>
      </div>
      <!-- 轮播图+ 4个上下横排视频 end -->
      <!-- 热点音视频 start -->
      <div class="layout-wrapper">
        <div class="layout">
          <div class="c1">
            <hotVideos :hotList="hotDataList" :activeMenuId="activeMenuId"></hotVideos>
          </div>
        </div>
      </div>
      <!-- 热点音视频 end -->
    </div>
    <!-- 内容结束-->
    <!-- 垫块 -->
    
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
  .r-60-40 .c1 {
    width: 560px;
    float: left;
  }
  .r-60-40 .c2 {
    width: 400px;
    float: right;
  }
}

/*1240尺寸以上 */
@media only screen and (min-width: 1240px) {
  .layout {
    width: 1200px;
    margin: 0 auto;
    /* background: blue; */
  }
  .r-60-40 .c1 {
    width: 700px;
    float: left;
  }
  .r-60-40 .c2 {
    width: 500px;
    float: right;
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
//导入swiper组件
import swiperBox from "@/components/common/swiperBox.vue";
//新闻缩略图视频组件
import thumbnailsVideoNews from "@/components/common/thumbnailsVideoNews.vue";
//热门新闻音视频组件
import hotVideos from "@/components/common/hotVideos.vue";

//导入Footer组件
import Footer from "@/components/common/Footer.vue";
// 导入floatMenu组件
import floatMenu from "@/components/common/floatMenu.vue";
//导入jquery
import $ from "jquery";
//导入swiper
import Swiper from "swiper";
// 导入token.js
// import tokenFun from "@/api/token";
//导入footer控制
import {footAuto} from "../lib/domFixed.js"
export default {
  data() {
    return {
      ipAddress:'',
      activeMenuId: 0,
      categoryId:'',
      // 是否有背景图
      hasBackgroundImg:false,
      //是否是courses页面,来单独控制course页图片大小
      isCoursePage:true,
      //用于存放接口取来的数据
      // 所有菜单信息
      categoryDataList:[],
      //菜单详情页
      categoryDetailDataList: [],
      hotDataList: [],
      latestDataList: [],
      topicDataList: []
      
    };
  },
  
  created() {
    console.log(this.$store.state.commonData.headMenu);
    //ip地址
    this.ipAddress=this.$store.state.ipAddress;
    // 共用菜单数据赋值
    this.categoryDataList=this.$store.state.commonData.headMenu;
    // console.log(this.$route.path.slice(-1));
    //获取地址栏的activemenuId
    this.activeMenuId = this.$route.path.slice(-1);
    // 拿到categoryId
    this.categoryId=this.$route.path.slice(-1);

    //加载首屏数据
    this.getData();
    // console.log(this.categoryDetailDataList)
    // console.log(this.categoryDataList);
    
    
  },
  beforeDestroy() {
    // window.removeEventListener('resize', this.handleResize)
  },
  mounted() {
    //获取swiper
    this.getSwiper();
    // console.log(this.$route.path.slice(-1));
    this.activeMenuId=this.$route.path.slice(-1);
  },
  updated() {
    let that=this;
    footAuto();
    //调整窗口重新调整footer
    window.onresize=function(){
       footAuto();
      //  console.log(1111)
    }
  },
  methods: {
    async getData() {
      //去请求分类页接口  需要参数  token   categoryId
      let {data:res}=await this.$http.get('api/category',{
        params:{
          code: localStorage.getItem('authCode'),
          categoryId:this.categoryId
        }
      })
      console.log(res);
      if(res.code!=0) return "数据获取失败";
      let data=res.data;
      //取出所有的数据块
      this.categoryDetailDataList=data.categoryDetail;
      this.hotDataList=data.hot;
      this.latestDataList=data.latest;
      this.topicDataList=data.topics;
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
    },
    
  },
  components: {
    Header,
    breadCrumbNav,
    columnTitleInfo,
    columnClassNav,
    thumbnailsVideoNews,
    swiperBox,
    hotVideos,
    Footer,
    floatMenu
  }
};
</script>



