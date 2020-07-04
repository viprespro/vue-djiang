<template>
  <div id="details-video">
    <!-- Header组件 -->
    <Header></Header>
    <!-- 视频插件 -->
    <div class="details-video-content clearfix">
      <!-- 三级标题区域 start -->
      <!-- {{id}} -->
      <div class="layout-wrapper">
        <div class="layout phone-none">
          <div class="c1-wrapper">
            <div class="c1">
              <breadCrumbNav></breadCrumbNav>
            </div>
          </div>
        </div>
      </div>
      <!-- 三级标题区域 end -->
      <!-- 内容左右块 -->
      <div class="layout-wrapper mx-video-skin">
        <div class="layout r-75-25 clearfix">
          <div class="c1-wrapper">
            <div class="c1">
              <!-- 主要视频区域 start -->
              <div class="mx-media-n mx-m">

                <!-- 视频容器部分 start -->
                <div ref="my-player" class="dplayer">

                </div>
                <!-- 视频容器部分 end -->

                <!-- 下层标题遮罩 start -->
                <div class="mx-media-title">
                  <h1>{{ detailsInfo.title }}</h1>
                  <div class="mx-media-time">
                    <span v-if="detailsInfo.createTime">{{ detailsInfo.createTime }}</span>
                    <!-- <span style="margin-left:10px;">user1111</span> -->
                  </div>
                  <div id="media-info" class="mx-media-info">
                    {{ detailsInfo.description }}
                  </div>
                </div>
                <!-- 下层标题遮罩 end -->
              </div>
              <!-- 主要视频区域 end -->
              <!-- 观看次数+分享区域 start-->
              <!-- <div class="mx-media-watch clearfix">
                <div class="left-icon">
                  <span>
                    <i class="iconfont icon-yanjing"></i>
                    60
                  </span>
                </div>
              </div>-->
              <!-- 观看次数+分享区域 end-->
              <!-- 视频内容简介 start -->
              <div class="mx-media-main mx-m b-shadow">
                <div class="mx-media-text-body mx-media-noheight" v-html="detailsInfo.content">
                </div>
              </div>
              <!-- 视频内容简介 end -->
            </div>
          </div>
          <!-- 右边推荐模块 -->
          <div class="c2-wrapper">
            <div class="c2">
              <hotKeywords :keywordList="keywordList" v-if="keywordList.length"></hotKeywords>
              <topicSimple :recommendList="recommendList" v-if="recommendList.length"></topicSimple>
              <sheetNewsSide :relatedList="relatedList" v-if="relatedList.length"></sheetNewsSide>
              <topicTitleInfo :topicList="topicList" v-if="topicList.length"></topicTitleInfo>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer组件 -->
    <Footer></Footer>
  </div>
</template>
<style scoped="scoped">
.c1,
.c2 {
}
.layout-wrapper {
  width: 100%;
  display: block;
  clear: both;
}
/* 第一档  移动端  大小翻倍*/
@media only screen and (max-width: 959px) {
  .phone-none {
    display: none;
  }
  .mx-media-n {
    margin: 0 !important;
  }
  /* .mx-m {
    margin: 20px 0 0;
  } */
  /* 移动端菜单滚动 */
  .touch {
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .layout {
    width: 100%;
    margin: 0 auto;
  }
  .layout .c1,
  .layout .c2 {
    float: none !important;
    width: 100% !important;
    padding: 0 !important;
  }
  /* 都是2倍 */
  .mx-bread-crumb {
    padding: 0 160px 0 20px;
  }
  /* 视频页通用样式 -n 表示normal  -s 表示特殊 */
  .mx-media-s {
    /* background:#90683c; */
  }
  .mx-media-n {
    display: block;
    background-color: #27272f;
  }
  .mx-media-title {
    padding: 30px 60px 40px;
  }
  .mx-media-title h1 {
    display: block;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
  }
  .mx-media-time {
    display: block;
    margin: 10px 0 0;
    color: rgba(255, 255, 255, 0.3);

    font-size: 14px;
  }
  .mx-media-info {
    color: rgba(255, 255, 255, 0.5);
    display: block;
    margin: 10px 0 0;
    position: relative;
    line-height: 48px;
    /* max-height: 40px; */
    overflow: hidden;
    font-size: 24px;
  }
  .mx-media-watch {
    padding: 30px;
    background-color: #fffdf8;
  }
  .mx-media-watch .left-icon {
    display: inline-block;
    float: left;
    color: #5d2e00;
    font-size: 30px;
    line-height: 84px;
  }
  .mx-media-watch .left-icon span {
    display: inline-block;
    margin: 0 20px;
  }
  /* 字体图标微调 */
  .mx-media-watch .left-icon span i {
    display: inline-block;
    position: relative;
    top: 2px;
    font-size: 40px !important;
  }
  /* 视频内容简介区域 */
  .mx-media-main {
    display: block;
    padding: 60px 100px 100px;
    font-size: 32px;
    line-height: 2;
    color: #5d2e00;
    background-color: #fffdf8;
  }
}
/* 第二档 */
@media only screen and (min-width: 960px) and (max-width: 1239px) {
  .layout {
    width: 960px;
    margin: 0 auto;
  }
  .r-75-25 .c1 {
    width: 720px;
    float: left;
  }
  .r-75-25 .c2 {
    width: 240px;
    float: right;
  }
}
/* 第三档 pc端 */
@media only screen and (min-width: 1240px) {
  .layout {
    width: 1200px;
    margin: 0 auto;
  }
  .r-75-25 .c1 {
    width: 900px;
    float: left;
  }
  .r-75-25 .c2 {
    width: 300px;
    float: right;
  }
}
</style>
<script>
//导入Header头文件
import Header from "../../components/common/Header.vue";
//导入面包屑
import breadCrumbNav from "../../components/common/breadCrumbNav";
//导入 右边推荐模块

import hotKeywords from "../../components/common/hotKeywords.vue";
import topicSimple from "../../components/common/topicSimple.vue";
import sheetNewsSide from "../../components/common/sheetNewsSide.vue";
import topicTitleInfo from "../../components/common/topicTitleInfo.vue";
//导入Footer脚文件
import Footer from "../../components/common/Footer.vue";
// 导入视频插件
import DPlayer from "dplayer";

export default {
  // props: {
  //   id: {}
  // },
  data() {
    return {
      detailsInfo: {},
      paramsData: {},
      relatedList: [], // 相关
      keywordList: [],
      topicList: [], // 专题
      recommendList: [], // 推荐
    };
  },
  mounted() {
    //操作dom
    this.getDetailsData();
    // this.dplayerInit();

    console.log(this.paramsData);
  },
  methods: {
    //利用传递过来的参数获取对应id的详情
    async getDetailsData() {
      this.paramsData = this.$route.query;
      let { data: res } = await this.$http.get("/api/detail", {
        params: {
          code: localStorage.getItem("authCode"),
          category_id: this.paramsData.category_id,
          id: this.paramsData.id,
          type: this.paramsData.type
        }
      });
      console.log(res);
      let data = res.data;
      this.detailsInfo = data.detail;

      this.keywordList = data.keyword;
      this.relatedList = data.related;
      this.topicList = data.topics;
      this.recommendList = data.recommend;
      this.hotList = data.hot;

      console.log(this.detailsInfo.videoUrl);
      this.dplayerInit();
    },

    //视频插件实例化
    dplayerInit() {
      //创建一个视频插件实例
      const dp = new DPlayer({
        container: document.querySelector(".dplayer"),
        autoplay: false,
        preload: 'auto',
        hotkey: false,
        mutex: true,
        video: {
          // 测试demo
          url: this.$store.state.ipAddress + "/" + this.detailsInfo.videoUrl,
          type: "auto"
        }
      });
    }
  },
  components: {
    Header,
    breadCrumbNav,
    hotKeywords,
    topicSimple,
    sheetNewsSide,
    topicTitleInfo,
    Footer
  }
};
</script>


