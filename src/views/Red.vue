<template>
  <!-- 新闻模版页 -->
  <div id="Memorabilia">
    <!-- 头开始 -->
    <Header :activeMenu="activeMenuId"></Header>
    <!-- 头结束 -->
    <!-- 大事记内容开始 -->
    <div class="content">
      <!-- 面包屑导航start -->
      <div class="phone-none">
        <div class="layout-wrapper">
          <div class="layout">
            <div class="c1-wrapper">
              <div class="c1">
                <!--  -->
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
      <!-- 轮播图+ sheet 新闻区域 start-->
      <div class="layout-wrapper">
        <div class="layout r-40-60 clearfix">
          <div class="c1-wrapper">
            <div class="c1">
              <!--这里存放轮播图组件-->
              <swiperBox :lastestList="latestDataList"></swiperBox>
            </div>
          </div>
          <div class="c2-wrapper">
            <div class="c2">
              <!-- 这里是sheet 新闻组件 -->
              <sheetNewsShow
                :lastestList="latestDataList"
                :ipAddress="ipAddress"
                :hasBackgroundImg="hasBackgroundImg"
              ></sheetNewsShow>
            </div>
          </div>
        </div>
      </div>
      <!-- 轮播图+ sheet 新闻区域 end-->
      <!-- 缩略图新闻区域 start -->
      <div class="layout-wrapper">
        <div class="layout">
          <div class="c1-wrapper">
            <div class="c1">
              <!-- 这里是缩略图新闻区域 -->
              <thumbnailsNews :lastestList="latestDataList" ></thumbnailsNews>
            </div>
          </div>
        </div>
      </div>
      <!-- 缩略图新闻区域 end -->
      <!--最新发布 latest  +  专题topics + 热点hot  start -->
      <div class="layout-wrapper">
        <div class="layout r-75-25 clearfix">
          <!-- 左边 -->
          <div class="c1-wrapper">
            <div class="c1">
              
             <listingNewsLatest
                :lastestList="latestDataList"
                :ipAddress="ipAddress"
               
                :activeMenuId="activeMenuId"
              ></listingNewsLatest>
            </div>
          </div>
          <!-- 右边 -->
          <div class="c2-wrapper">
            <div class="c2">
              <!-- topic -->
              <topicTitleInfo :topicList="topicDataList" :activeMenuId="activeMenuId"></topicTitleInfo>
              <!-- hot -->
              <hotTitlePicNews :hotList="hotDataList" :activeMenuId="activeMenuId"></hotTitlePicNews>
            </div>
          </div>
        </div>
      </div>
      <!--最新发布 latest  +  专题topics + 热点hot  end -->
    </div>
    <!-- 大事记内容结束-->

    <!-- 尾部开始 -->
    <Footer></Footer>
    <!-- 尾部结束 -->
  </div>
</template>

<script>
//导入Header头文件
import Header from "@/components/common/Header.vue";
// 导入面包屑导航组件
import breadCrumbNav from "@/components/common/breadCrumbNav.vue";

import columnTitleInfo from "@/components/common/columnTitleInfo.vue";
import columnClassNav from "@/components/common/columnClassNav.vue";
//导入swiper组件
import swiperBox from "@/components/common/swiperBox.vue";
//sheetNewsShow
import sheetNewsShow from "@/components/common/sheetNewsShow.vue";
// thumbnailsNews
import thumbnailsNews from "@/components/common/thumbnailsNews.vue";
//导入组件
import topicInfo from "@/components/common/topicInfo.vue";
//导入组件
import topicTitleInfo from "@/components/common/topicTitleInfo.vue";
// 导入categoryNav组件
import categoryNav from "@/components/common/categoryNav.vue";
//导入图文上下混排的组件
import sheetPicNewsShow from "@/components/common/sheetPicNewsShow.vue";
//导入listingNewsLatest组件
import listingNewsLatest from "@/components/common/listingNewsLatest.vue";
//导入customImg组件
import customImg from "@/components/common/customImg.vue";
//导入 热点新闻组件
import hotTitlePicNews from "@/components/common/hotTitlePicNews.vue";

//导入Footer组件
import Footer from "@/components/common/Footer.vue";
//导入jquery
import $ from "jquery";
//导入swiper
import Swiper from "swiper";
//导入footer控制
import {footAuto} from "../lib/domFixed.js"
// 导入token.js
// import tokenFun from "@/api/token";
export default {
  data() {
    return {
      ipAddress:'',
      activeMenuId: 0,
      categoryId:'',
      // 是否有背景图
      hasBackgroundImg:false,
      //用于存放接口取来的数据
      // 所有菜单信息
      categoryDataList:[],
      //菜单详情页
      categoryDetailDataList: [],
      hotDataList: [],
      latestDataList: [],
      topicDataList: []
      //存放路由导航信息 先写死
      //topNav: "北臧大事记"
    };
  },
  //生命周期
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
    console.log(this.categoryDataList);
    
    
  },
  beforeDestroy() {
    // window.removeEventListener('resize', this.handleResize)
  },
  mounted() {
    
    //获取swiper
    this.getSwiper();
  },
  updated() {
    
    footAuto();
    //调整窗口重新调整footer
    window.onresize=function(){
       footAuto();
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
    // test() {
    //   $(".test").html(1222);
    // },

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
    thumbnailsNews,
    columnClassNav,
    swiperBox,
    topicInfo,
    sheetNewsShow,
    categoryNav,
    listingNewsLatest,
    customImg,
    topicTitleInfo,
    hotTitlePicNews,
    sheetPicNewsShow,
    Footer
  }
};
</script>
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
  .r-40-60 .c1 {
    float: left;
    width: 400px;
  }
  .r-40-60 .c2 {
    float: right;
    width: 560px;
  }
  .r-75-25 .c1 {
    float: left;
    width: 720px;
  }
  .r-75-25 .c2 {
    float: left;
    width: 240px;
  }
}

/*1240尺寸以上 */
@media only screen and (min-width: 1240px) {
  .layout {
    width: 1200px;
    margin: 0 auto;
    /* background: blue; */
  }
  .r-40-60 .c1 {
    float: left;
    width: 500px;
  }
  .r-40-60 .c2 {
    float: right;
    width: 700px;
  }
  .r-75-25 .c1 {
    float: left;
    width: 900px;
  }
  .r-75-25 .c2 {
    float: left;
    width: 300px;
  }
}
</style>
<!-- <style scoped src="@/assets/css/media-query/index.css"></style> -->

