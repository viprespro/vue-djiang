<template>
  <div id="detail-radio">
    <!-- header -->
    <Header></Header>
    <!--主体内容 -->
    <div class="detail-radio-content clearfix">
      <!-- 三级标题区域 start -->
      <div class="mx-layout layout-wrapper">
        <div class="layout phone-none">
          <div class="c1-wrapper">
            <div class="c1">
              <breadCrumbNav></breadCrumbNav>
            </div>
          </div>
        </div>
      </div>
      <!-- 三级标题区域 end -->
      <!-- 音频主模块+推荐模块 -->
      <div class="layout-wrapper mx-audio-skin">
        <div class="layout r-75-25 clearfix">
          <div class="c1-wrapper">
            <div class="c1">
              <!-- 音频播放容器 start -->
              <div class="mx-audio-play mx-m">
                <!-- 音频文章缩略图 start -->
                <div id="mx-audio-play-info" class="mx-audio-play-info ellipsis-s">
                  {{ detail.description }}
                  <a href="javascript:;">
                    展开
                    <i class="iconfont icon-xiajiantou"></i>
                  </a>
                  <a href="javascript:;" style="display: none;">
                    收起
                    <i class="iconfont icon-ico_back"></i>
                  </a>
                </div>
                <!-- 音频文章缩略图 end -->
                <!-- 音频文章标题 start -->
                <div class="mx-audio-play-title">{{ detail.title }}</div>
                <!-- 音频文章标题 end -->
                <!-- 文章列表-book样式 start-->
                <ul class="mx-audio-play-ul clearfix">
                  <li class="" v-for="item in showAudioList" :key="item.id">
                    <a href="javascript:;" @click.prevent="audioPlay($event)">
                      <i :class="['iconfont', flag?'':'icon-caret-right']">
                        <img v-if="flag" src="../../assets/img/sound.gif" alt />
                      </i>
                      <img :src="ipAddress + item.imageUrl" alt />
                      <span>
                        <strong>{{ item.title }}</strong>
                        <em>{{ item.month }}月</em>
                        <em class="mx-audio-play-day">{{ item.day }}</em>
                        <em>{{ item.year }}年</em>
                      </span>
                      <audio
                        id="5e588997207d2131782712"
                        :src="ipAddress + item.audioUrl"
                        loop="loop"
                        class="audio-control"
                      ></audio>
                    </a>
                  </li>
                </ul>
                <!-- 文章列表-book样式 end -->
                <!-- 自定义播放控制条 start -->
                <div class="mx-audio-play-controls">
                  <!-- 播放按钮区域 -->
                  <div class="mx-audio-button">
                    <!-- 上一个 -->
                    <span id>
                      <i class="iconfont icon-svgprevious"></i>
                    </span>
                    <!-- 播放  暂停 -->
                    <span id @click="getInitTotal($event)">
                      <i :class="['iconfont', flag?'icon-pause':'icon-play']"></i>
                      <!-- 下一个 -->
                    </span>
                    <span id>
                      <i class="iconfont icon-iconfontsvgnext"></i>
                    </span>
                  </div>
                  <!-- 播放进度条区域-->
                  <div class="mx-audio-line clearfix" style="cursor: pointer;">
                    <em class="mx-audio-time">00:00</em>
                    <em class="mx-audio-all">{{radioTotal}}</em>
                    <!-- 进度条小圆点 -->
                    <span class="mx-audio-radius" style></span>
                    <!-- 已经加载的进度条线 -->
                    <span class="mx-audio-way" style="width:100%"></span>
                    <!-- 初始进度条loading -->
                    <span class="mx-audio-loading"></span>
                  </div>
                </div>
                <!-- 自定义播放控制条 end -->
              </div>
              <!-- 音频播放容器 end -->

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

              <!-- 音频内容全部内容 start -->
              <div class="mx-media-main mx-m b-shadow">
                <div id="media-main" class="mx-media-text-body mx-media-noneheight">
                  <div v-html="detail.content"></div>
                </div>

                <!-- 收起 全文  加载全文 小按钮 -->
                <!-- <div class="mx-media-main-more" style="margin-top:20px;">
                  <span>
                    <i class="iconfont icon-ico_back">收起</i>
                  </span>
                </div>-->
              </div>
              <!-- 音频内容全部内容 end -->
            </div>
          </div>
          <!-- 右边推荐新闻区域 -->
          <div class="c2-wrapper">
            <div class="c2">
              <hotKeywords :keywordList="keywordList" v-if="keywordList.length"></hotKeywords>
              <topicSimple :recommendList="recommendList" v-if="recommendList.length"></topicSimple>
              <sheetNewsSide :relatedList="relatedList" v-if="relatedList.length"></sheetNewsSide>
              <topicTitleInfo :topicList="topicList" v-if="topicList.length"></topicTitleInfo>
            </div>
            <!-- 简单新闻图文区域 -->
            <!-- https://dangjian.zhizhongdj.com/stories/v-5e5887febb3eb453871848 -->
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script>
//导入Header头文件
import Header from "@/components/common/Header.vue";
//导入面包屑
import breadCrumbNav from "../../components/common/breadCrumbNav";
//导入 右边推荐模块

import hotKeywords from "../../components/common/hotKeywords.vue";
import topicSimple from "../../components/common/topicSimple.vue";
import sheetNewsSide from "../../components/common/sheetNewsSide.vue";
import topicTitleInfo from "../../components/common/topicTitleInfo.vue";
//导入Footer组件
import Footer from "@/components/common/Footer.vue";
//导入vuex
import { mapState } from "vuex";
export default {
  //  props: {
  //   id: {}
  // },
  data() {
    return {
      //标志变量
      flag: false,
      //当前音频的总时长
      radioTotal: "",
      audioUrl: "",
      paramsData: {},
      keywordList: [],
      relatedList: [], // 相关
      topicList: [], // 专题
      recommendList: [], // 推荐
      detail: {}, // 本页详情
      showAudioList: []
    };
  },
  computed: {
    ...mapState({
      // 导入需要ip地址
      ipAddress: state => state.ipAddress,
      commonData: state => state.commonData
    })
  },
  created() {
    //渲染数据区域
  },
  mounted() {
    //打印传递过来的参数
    this.paramsData = this.$route.query;
    this.getDetailsData();
  },

  methods: {
    async getDetailsData() {
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
      // this.audioUrl = this.ipAddress + "/" + this.detailsInfo.audioUrl;
      console.log(data);
      this.keywordList = data.keyword;
      this.relatedList = data.related;
      this.topicList = data.topics;
      this.recommendList = data.recommend;
      this.hotList = data.hot;
      this.detail = data.detail;
      document.title = this.detail.title; // 设置标题

      // 处理音频数组数据
      let arr = this.relatedList.slice(0, 3);
      for (let i = 0, len = arr.length; i < len; i++) {
        let temp = arr[i].createTime.split(" ");
        let after = temp[0].split("/");
        arr[i].year = after[0];
        arr[i].month = this.foo(after[1]);
        arr[i].day = after[2];
      }
      console.log(arr);
      this.showAudioList = arr;

      // 拿到音频后去获取音频的长度
      this.getInitTotal();
    },

    foo(str) {
      let arr = [
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
        "十",
        "十一",
        "十二"
      ];
      str = Number(str);
      return arr[str - 1];
    },

    //一个a音频播放暂停功能
    audioPlay(e) {
      var that = this;
      //标志变量取反
      this.flag = !this.flag;
      //点击a标签去获取 获取media对象
      // console.log(this)
      //获取当前绑定点击事件 的a元素
      //   console.log(e.currentTarget);
      //   var oA = e.currentTarget;
      let media = document.querySelector(".now audio");
      //   console.log(media);
      //音频播放/暂停
      this.flag ? media.play() : media.pause();

      //进度条播放进度
      //获取相应的元素
      setInterval(function() {
        document.querySelector(".mx-audio-time").innerHTML = that.secondsFormat(
          media.currentTime
        );
        document.querySelector(".mx-audio-all").innerHTML = that.secondsFormat(
          media.duration
        );
        // console.log(media.currentTime/media.duration)
        let way = document.querySelector(".mx-audio-way");
        way.onclick = function(e) {
          // media.play();
          //   console.log(this.clientWidth);
          //   console.log(e.offsetX);
          document.querySelector(".mx-audio-radius").style.left =
            (e.offsetX / this.clientWidth) * 100 + "%";
          media.pause();
          media.currentTime = (e.offsetX / this.clientWidth) * media.duration;
          media.play();
        };
        document.querySelector(".mx-audio-radius").style.left =
          (media.currentTime / media.duration) * 100 + "%";
      }, 1000);
    },
    secondsFormat(time) {
      // let timeStr=Number.toString(time);
      // console.log(timeStr)
      time = Math.round(time);
      //   console.log(time);
      let mm = parseInt(time / 60) + "";
      //   console.log(mm);
      if (mm < 10) mm = "0" + mm;
      let ss = parseInt(time % 60) + "";
      if (ss < 10) ss = "0" + ss;
      let timeStr = mm + ":" + ss;
      return timeStr;
    },
    //获取当前音频初始时长
    async getInitTotal(e) {
      //获取当前音频的总时长
      var that = this;
      let media1 = document.querySelector(".now audio");
      let temp = await new Promise((resolve, reject) => {
        //音频加载完毕后执行
        media1.oncanplay = function() {
          //   console.log(media1.duration);
          // media1.play();
          this.radioTotal = that.secondsFormat(media1.duration);
          resolve(this.radioTotal);
          //音频加载完毕后才能播放
          that.audioPlay(e);
        };
      });

      //   console.log(data)
      this.radioTotal = temp;
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

<style soped="scoped">
audio {
  display: block;
  width: 200px;
  height: 200px;
}

.c1,
.c2 {
}

.layout-wrapper {
  width: 100%;
  display: block;
  clear: both;
}
@media only screen and (max-width: 959px) {
  .mx-audio-play {
    margin: 0 !important;
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
