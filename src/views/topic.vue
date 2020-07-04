<!--
 * @Date         : 2020-07-03 15:20:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-04 13:15:59
 * @FilePath     : \dangjian\src\views\topic.vue
 * @Description  : 
--> 
<template>
<!-- 新闻模版页 -->
  <div id="Memorabilia">
    <!-- 头开始 -->
    <Header></Header>
    <!--  -->
    <!-- 内容开始 -->
    <div class="content">
      <!-- 专题页横幅 start -->
      <div class="">
        <div class="layout-wrapper">
          <div class="layout">
            <div class="c1-wrapper">
              <div class="c1">
                
              
                <div class="mx-column-topic-wrapper">
                  <div class="mx-column-topic mx-column-title mx-m">
                    <div class="mx-column-icon">
                      <img src="../assets/img/topicIcon.jpg" alt="">
                    </div>
                    <div class="mx-column-text">
                      <h2>学习四史</h2>
                      <em>学好党史、新中国史、改革开放史、社会主义发展史，是党员领导干部的必修课。</em>
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
      <!-- 缩略图新闻区域 start -->
      <div class="layout-wrapper">
        <div class="layout">
          <div class="c1-wrapper">
            <div class="c1">
              <!-- 这里是缩略图新闻区域 -->
              <thumbnailsNews></thumbnailsNews>
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
              <listingNewsLatest></listingNewsLatest>
            </div>
          </div>
          <!-- 右边 -->
          <div class="c2-wrapper">
            <div class="c2">
              <!-- topic -->
              <topicTitleInfo></topicTitleInfo>
              <!-- hot -->
              <hotTitlePicNews></hotTitlePicNews>
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
// 导入token.js
// import tokenFun from "@/api/token";
export default {
  data() {
    return {
      //判断是否是topic
      isTopicPage:true,
      //判断是否有背景图
      hasBackgroundImg:false,
      //用于存放接口取来的数据
      categoryDataList: [],
      hotDataList: [],
      latestDataList: [],
      topicDataList: [],
    };
  },
  //生命周期
  created: function() {
    //打印过来的参数
    console.log(this.$route.query)
    //加载首屏数据
    this.getData();
    //调用轮播方法
    //this._initSwiper();
    //窗口调整函数 并实现轮播图片居中
    // window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy: function() {
    // window.removeEventListener('resize', this.handleResize)
  },
  mounted: function() {
    //获取swiper
    this.getSwiper();
  },
  methods: {
    async getData() {
      // //   let tokenStr = tokenFun("admin", "admin");
      // //   this.tokenStr=tokenStr;
      // let { data: resInfo } = await this.$http.get(
      //   "/api/login?username=admin&password=admin"
      // );

      // this.tokenStr = resInfo.access_token;
      // console.log(this.tokenStr);
      // let { data: res } = await this.$http.get("/api/home", {
      //   params: {
      //     access_token: this.tokenStr
      //   }
      // });
      // console.log(res);
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
@media only screen and (max-width: 959px){

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

