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
                <ul class="mx-audio-play-ul clearfix" v-loading="!isReady">
                  <li
                    :class="{now: item.actived }"
                    v-for="(item) in showAudioList"
                    :key="item.id"
                  >
                    <a href="javascript:;" @click.prevent="audioPlay(item.id)">
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
                        :src="ipAddress + item.audioUrl"
                        loop="loop"
                        class="audio-control"
                        @ended="audioEnd"
                        @canplay="getDuration"
                        @timeupdate="updateTime"
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
                      <i class="iconfont icon-svgprevious" @click="handlePlayLift()"></i>
                    </span>
                    <!-- 播放  暂停 -->
                    <span id @click="audioPlay(curAudioId)">
                      <i :class="['iconfont', flag?'icon-pause':'icon-play']"></i>
                      <!-- 下一个 -->
                    </span>
                    <span id>
                      <i class="iconfont icon-iconfontsvgnext" @click="handlePlayRight()"></i>
                    </span>
                  </div>
                  <!-- 播放进度条区域-->
                  <div class="mx-audio-line clearfix" style="cursor: pointer;">
                    <em class="mx-audio-time" v-if="isReady">{{ currentTime }}</em>
                    <em class="mx-audio-all" v-if="isReady">{{ radioTotal }}</em>
                    <!-- 进度条小圆点 -->
                    <span class="mx-audio-radius" style></span>
                    <!-- 已经加载的进度条线 -->
                    <span
                      class="mx-audio-way"
                      @click="handleSetProgress($event)"
                      style="width:100%"
                    ></span>
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
  components: {
    Header,
    breadCrumbNav,
    hotKeywords,
    topicSimple,
    sheetNewsSide,
    topicTitleInfo,
    Footer
  },
  data() {
    return {
      //标志变量
      flag: false,
      isReady: false,
      currentTime: "0:00",
      //当前音频的总时长
      radioTotal: "",
      audioUrl: "",
      audioTotalSeconds: "",
      paramsData: {},
      keywordList: [],
      relatedList: [], // 相关
      topicList: [], // 专题
      recommendList: [], // 推荐
      detail: {}, // 本页详情
      showAudioList: [],
      curAudioId: '', // 此时的音频id
      leftAudioId: '', // 上一首音频id
      rightAudioId: '', //  下一首音频id
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
    console.log(this.$route.query)
    this.nowAudioId=this.$route.query.id;
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
      let data = res.data;
      this.keywordList = data.keyword;
      this.relatedList = data.related;
      this.topicList = data.topics;
      this.recommendList = data.recommend;
      this.hotList = data.hot;
      this.detail = data.detail;
      document.title = this.detail.title; // 设置标题
      // 处理音频数组数据
      let arr;
      if (this.relatedList.length >= 3) {
        arr = this.relatedList.slice(0, 3);
        arr[1].actived = true;
        this.curAudioId = arr[1].id
        this.leftAudioId = arr[0].id
        this.rightAudioId = arr[2].id
      } else {
        arr = this.relatedList;
        arr[arr.length - 1].actived = true;
        this.curAudioId =  arr[arr.length - 1].id
        this.leftAudioId = arr[0].id
      }
      for (let i = 0, len = arr.length; i < len; i++) {
        let temp = arr[i].createTime.split(" ");
        let after = temp[0].split("/");
        arr[i].year = after[0];
        arr[i].month = this.foo(after[1]);
        arr[i].day = after[2];
      }
      this.showAudioList = arr;
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

    // 上一个音频播放
    handlePlayLift() {
      this.audioPlay(this.leftAudioId)
    },

    // 下一个音频播放
    handlePlayRight() {
      this.audioPlay(this.rightAudioId)
    },

    // 手动设置进度条的
    handleSetProgress(_that) {
      const percent = (_that.offsetX / _that.target.clientWidth) * 100 + "%";
      this.setProgress(percent);
      // document.querySelector(".now audio").pause()
      // 设置当前音频的时间
      // document.querySelector(".now audio").currentTime = 120
      // this.audioPlay()
    },

    setProgress(_percent) {
      document.querySelector(".mx-audio-radius").style.left = _percent;
    },

    // 获取当前audio的时间
    updateTime(e) {
      // console.log(e);
      let seconds = e.target.currentTime >> 0;
      this.currentTime = this.formatSeconds(seconds);
      let media = document.querySelector(".now audio");
      // 设置进度条的移动
      this.setProgress((seconds / this.audioTotalSeconds) * 100 + "%");
    },

    // 将秒转为 00：12 此种格式
    formatSeconds(value) {
      var theTime = parseInt(value); // 秒
      var middle = 0; // 分
      var hour = 0; // 小时
      if (theTime > 60) {
        middle = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (middle > 60) {
          hour = parseInt(middle / 60);
          middle = parseInt(middle % 60);
        }
      }
      var result = "";
      if (parseInt(theTime) >= 10) {
        result = "0" + ":" + parseInt(theTime);
      } else {
        result = "0" + ":" + "0" + parseInt(theTime);
      }

      if (middle >= 0 && parseInt(theTime) >= 10) {
        result = parseInt(middle) + ":" + parseInt(theTime);
      } else {
        result = parseInt(middle) + ":" + "0" + parseInt(theTime);
      }
      return result;
    },

    // 获取音频时长 音频加载完成
    getDuration() {
      this.radioTotal = this.formatSeconds(
        document.querySelector(".now audio").duration >> 0
      );
      this.audioTotalSeconds =
        document.querySelector(".now audio").duration >> 0;
      this.isReady = true; // 说明可以播放了
      // console.log(this.radioTotal);
    },

    // 音频播放结束
    audioEnd() {
      this.flag = false;
    },

    // 音频播放暂停
    audioPlay(_id) {
      this.curAudioId = _id // 记录此时的音频id
      let arr = [...this.relatedList];

      // 展示音频的列表
      let show_arr = [...this.showAudioList]

      for(let item of show_arr) {
        if(item.actived) {  // 说明此时换了新的音频
          if(item.id !== _id) {
            this.isReady = false
            document.querySelector(".now audio").pause()
            document.querySelector(".now audio").currentTime = 0
            this.setProgress('0%')
            this.flag = false
          }
        }
      }

      var curIndex;
      arr.forEach((item, index) => {
        item.actived = false // 取消所有的选中状态
        if (item.id == _id) {
          curIndex = index;
        }
      });

      let leftIndex = curIndex - 1;
      let rihgtIndex = curIndex + 1;

      let newArr = [];
      if (leftIndex >= 0) {
        newArr.push(arr[leftIndex]);
      }
      // 设置
      arr[curIndex].actived = true;
      newArr.push(arr[curIndex]);
      if (rihgtIndex >= 0) {
        newArr.push(arr[rihgtIndex]);
      }
      this.rightAudioId = arr[rihgtIndex].id
      this.leftAudioId = arr[leftIndex].id
      this.showAudioList = newArr;

      if (!this.isReady) return;
      var that = this;
      this.flag = !this.flag;
      let media = document.querySelector(".now audio");
      //音频播放/暂停
      this.flag ? media.play() : media.pause();
    }
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