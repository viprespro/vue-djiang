<template>
  <div id="index">
    <!-- 头开始 -->
    <Header activeMenu="首页"></Header>
    <!-- 头结束 -->
    <!-- Index内容开始 -->
    <div class="index-content">
      <!-- 第一部分3块 -->
      <div class="layout-wrapper special-themes">
        <div class="layout r-42-33-25 clearfix">
          <!-- c1 -->
          <div class="c1-wrapper">
            <div class="c1">
              <swiperBox :lastestList="latestDataList" :ipAddress="ipAddress"></swiperBox>
            </div>
          </div>
          <!-- c2 -->
          <div class="c2-wrapper">
            <div class="c2">
              <sheetNewsShow
                :lastestList="latestDataList"
                :ipAddress="ipAddress"
                :hasBackgroundImg="hasBackgroundImg"
              ></sheetNewsShow>
            </div>
          </div>
          <!-- c3 -->
          <div class="c3-wrapper">
            <div class="c3">
              <topicInfo :topicList="topicDataList" :ipAddress="ipAddress"></topicInfo>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二部分category -->
      <div class="layout-wrapper special-themes">
        <div class="layout">
          <div class="c1-wrapper">
            <div class="c1">
              <categoryNav :categoryList="categoryDataList" :ipAddress="ipAddress"></categoryNav>
            </div>
          </div>
        </div>
      </div>
      <!-- 第三部分3-3-3 -->
      <div class="layout-wrapper">
        <div class="layout r-33-33-33 clearfix">
          <!-- 第一块 -->
          <div class="c1-wrapper">
            <div class="c1">
              <sheetPicNewsShow :lastestList="latestDataList" :ipAddress="ipAddress"></sheetPicNewsShow>
            </div>
          </div>
          <!-- 第二块 -->
          <div class="c2-wrapper">
            <div class="c2">
              <sheetPicNewsShow :lastestList="latestDataList" :ipAddress="ipAddress"></sheetPicNewsShow>
            </div>
          </div>
          <!-- 第三块 -->
          <div class="c3-wrapper">
            <div class="c3">
              <sheetPicNewsShow :lastestList="latestDataList" :ipAddress="ipAddress"></sheetPicNewsShow>
            </div>
          </div>
        </div>
      </div>
      <!-- 第四部分 -->
      <div class="layout-wrapper">
        <div class="layout r-75-25 clearfix">
          <!-- 左边 -->
          <div class="c1-wrapper">
            <div class="c1">
              <listingNewsLatest :lastestList="latestDataList" :ipAddress="ipAddress" :headMenu="commonData.headMenu"></listingNewsLatest>
            </div>
          </div>
          <!-- 右边 -->
          <div class="c2-wrapper">
            <div class="c2">
              <!-- img -->
              <customImg></customImg>
              <!-- topic -->
              <topicTitleInfo :topicList="topicDataList" :ipAddress="ipAddress"></topicTitleInfo>
              <!-- hot -->
              <hotTitlePicNews :ipAddress="ipAddress" :hotList="hotDataList"></hotTitlePicNews>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- index内容结束-->

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

/* 960 -1240尺寸 */
@media only screen and (min-width: 960px) and (max-width: 1239px) {
  .layout {
    width: 960px;
    margin: 0 auto;
  }

  .r-42-33-25 .c1 {
    float: left;
    width: 400px;
  }

  .r-42-33-25 .c2 {
    float: left;
    width: 320px;
  }

  .r-42-33-25 .c3 {
    float: left;
    width: 240px;
  }
  .r-33-33-33 .c1 {
    float: left;
    width: 320px;
  }
  .r-33-33-33 .c2 {
    float: left;
    width: 320px;
  }
  .r-33-33-33 .c3 {
    float: left;
    width: 320px;
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
  }

  .r-42-33-25 .c1 {
    float: left;
    width: 500px;
  }

  .r-42-33-25 .c2 {
    float: left;
    width: 400px;
  }

  .r-42-33-25 .c3 {
    float: left;
    width: 300px;
  }
  .r-33-33-33 .c1 {
    float: left;
    width: 400px;
  }
  .r-33-33-33 .c2 {
    float: left;
    width: 400px;
  }
  .r-33-33-33 .c3 {
    float: left;
    width: 400px;
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
<!-- <style scoped src="../../assets/css/media-query/index.css"></style> -->
<script>
//导入Header头文件
import Header from "../../components/common/Header.vue";
//导入swiper组件
import swiperBox from "../../components/common/swiperBox.vue";
//sheetNewsShow
import sheetNewsShow from "../../components/common/sheetNewsShow.vue";
//导入组件
import topicInfo from "../../components/common/topicInfo.vue";
//导入组件
import topicTitleInfo from "../../components/common/topicTitleInfo.vue";
// 导入categoryNav组件
import categoryNav from "../../components/common/categoryNav.vue";
//导入图文上下混排的组件
import sheetPicNewsShow from "../../components/common/sheetPicNewsShow.vue";
//导入listingNewsLatest组件
import listingNewsLatest from "../../components/common/listingNewsLatest.vue";
//导入customImg组件
import customImg from "../../components/common/customImg.vue";
//导入 热点新闻组件
import hotTitlePicNews from "../../components/common/hotTitlePicNews.vue";

//导入Footer组件
import Footer from "../../components/common/Footer.vue";
//导入jquery
// import $ from "jquery";
//导入swiper
import Swiper from "swiper";
//导入token.js
// import tokenFun from '../../api/token.js';
//导入vuex
import { mapState, mapMutations } from "vuex";
// import Vue from 'vue';
export default {
  data() {
    return {
      //用于存放当前全局token

      //定义ip地址
      // ipAddress: "http://122.51.102.105:8081",
      //判断sheet块是否有背景图
      hasBackgroundImg: true,
      //用于存放接口取来的数据
      categoryDataList: [],
      hotDataList: [],
      latestDataList: [],
      topicDataList: [],
      copyright: "",
      logoUrl: "",
      title: ""
    };
  },
  //生命周期
  created: function() {
    //修改title
    // this.modifyTitle();
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
    this.modifyTitle();
    //获取swiper数据
    this.getSwiper();
    this.test();
  },
  //计算属性
  computed: {
    ...mapState({
      // 导入需要ip地址
      ipAddress: state => state.ipAddress,
      commonData: state => state.commonData
    })
  },
  methods: {
    // 导入vuex中的方法
    ...mapMutations(["saveToken", "saveCommonData"]),
    //自定义方法
    async getData() {
      let { data: res } = await this.$http.get("/api/home", {
        params: {
          access_token: localStorage.getItem('Authorization')
        }
      });
      console.log(res);
      console.log(res);
      // 判断数据是否获取成功
      if (res.code != 0) {
        console.log(res.code)
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
    //修改title
    modifyTitle(){
      console.log(this.$store.state.commonData);
      document.title=this.$store.state.commonData.title;
    },
    test() {
      //提交操作要写在methods方法里面 例如test() 方法里面
      // this.$store.commit({
      //   //type 是函数名
      //   type: "saveCommonData",
      //   //左边是commonData的数据
      //   commonData: commonData
      // });
      console.log(this.$store.state.commonData);
      // console.log(this.$store.state.commonData.copyright);
      // console.log(this.$store.state.Authorization);
      // $(".test").html(1222);
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
