<!--
 * @Date         : 2020-07-03 15:20:40
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-07-07 17:11:30
 * @FilePath     : \党建项目git同步目录\dangjianxiangmupcyidongduan\src\views\topic.vue
 * @Description  : 
--> 
<template>
  <!-- 新闻模版页 -->
  <div id="Memorabilia">
    <Header></Header>

    <!-- 内容开始 -->
    <div class="content">
      <!-- 专题页横幅 start -->
      <div class>
        <div class="layout-wrapper">
          <div class="layout">
            <div class="c1-wrapper">
              <div class="c1">
                <div class="mx-column-topic-wrapper">
                  <div class="mx-column-topic mx-column-title mx-m">
                    <div class="mx-column-icon">
                      <img
                        :src="detailDataList.path?detailDataList.path:''"
                        alt
                      />
                    </div>
                    <div class="mx-column-text">
                      <h2>{{detailDataList.name}}</h2>
                      <em>{{detailDataList.description}}</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 专题页横幅 end -->
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
                :hasBackgroundImg="hasBackgroundImg"
                :isTopicPage="isTopicPage"
              ></sheetNewsShow>
            </div>
          </div>
        </div>
      </div>
      <!-- 轮播图+ sheet 新闻区域 end-->
      <!--最新发布 latest  +  专题topics + 热点hot  start -->
      <div class="layout-wrapper">
        <div class="layout r-75-25 clearfix">
          <!-- 左边 -->
          <div class="c1-wrapper">
            <div class="c1">
              <listingNewsLatest :lastestList="latestDataList"></listingNewsLatest>
            </div>
          </div>
          <!-- 右边 -->
          <div class="c2-wrapper">
            <div class="c2">
               <!-- topic -->
              <topicTitleInfo :topicList="topicDataList"></topicTitleInfo>
              <!-- hot -->
              <hotTitlePicNews :hotList="hotDataList"></hotTitlePicNews>
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
      //判断是否是topic页面
      isTopicPage: true,
      //判断是否有背景图
      hasBackgroundImg: false,
      //存放当前topic专题页的id
      topicsId: "",
      // ip地址
      ipAddress: "",
      //用于存放接口取来的数据
      detailDataList: [],
      hotDataList: [],
      latestDataList: [],
      topicDataList: []
    };
  },
  //生命周期
  created() {
    //打印过来的参数
    console.log(this.$route.query);
    //赋值数据
    this.ipAddress = this.$store.state.ipAddress;
    this.topicsId = this.$route.query.topicsId;
    //加载首屏数据
    this.getData();
  },
  watch:{
    // 强制刷新
     $route(to, from) {
      this.$router.go(0);
    }
  },
  beforeDestroy() {},
  mounted() {
    //获取swiper
    this.getSwiper();
    // this.footAuto();
  },
  updated() {
    let that=this;
    footAuto();
    //调整窗口重新调整footer
    window.onresize=function(){
       footAuto();
    }
  },
  methods: {
    async getData() {
      let { data: res } = await this.$http.get("api/topics", {
        params: {
          code: localStorage.getItem("authCode"),
          topicsId: this.topicsId
        }
      });
      // 判断数据是否获取成功
      if (res.code != 0) {
        console.log("数据获取失败");
        return;
      } else {
        //数据获取成功
        let data = res.data;
        console.log(data);

        //拿到对应模块的数据
        this.detailDataList = data.detail;

        this.hotDataList = data.hot;
        this.topicDataList = data.topics;
        this.latestDataList = data.latest;
      }
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

