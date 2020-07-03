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
                  今天，我们隆重集会，庆祝中华人民共和国成立70周年。此时此刻，全国各族人民、海内外中华儿女，都怀着无比喜悦的心情，都为我们伟大的祖国感到自豪，都为我们伟大的祖国衷心祝福。
                  <a
                    href="javascript:;"
                  >
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
                <div class="mx-audio-play-title">习近平在庆祝中华人民共和国成立70周年 大会上的讲话</div>
                <!-- 音频文章标题 end -->
                <!-- 文章列表-book样式 start-->
                <ul class="mx-audio-play-ul clearfix">
                  <!-- 一个li -->
                  <li>
                    <a href="javascript:;">
                      <i :class="['iconfont', flag?'':'icon-caret-right']">
                        <img v-if="flag" src="../../assets/img/sound.gif" alt />
                      </i>
                      <img src="../../assets/img/yinpin-book-img1.jpg" alt />
                      <span>
                        <strong>习近平在庆祝中华人民共和国成立70周年 大会上的讲话</strong>
                        <em>三月</em>
                        <em class="mx-audio-play-day">28</em>
                        <em>2020年</em>
                      </span>
                      <!-- 音频文件 id  .audio-control 该样式用于美化进度条 -->
                      <audio
                        id="5e58890a8523e268070218"
                        src="https://boot-video.xuexi.cn/audio/1005/p/e9351e4cd7ea3c4467ff9316321316a3-e644cfb7887443e7bfcdedec18b09e34-1.mp3"
                        loop="loop"
                        class="audio-control-bea"
                      ></audio>
                    </a>
                  </li>
                  <!-- 一个li 激活  -->
                  <li class="now">
                    <!-- <router-link to="" @click.prevent="audioPlay()"> -->
                    <a href="javascript:;" @click.prevent="audioPlay($event)">
                      <i :class="['iconfont', flag?'':'icon-caret-right']">
                        <img v-if="flag" src="../../assets/img/sound.gif" alt />
                      </i>
                      <img src="../../assets/img/yinpin-book-img2.jpg" alt />
                      <span>
                        <strong>习近平在庆祝中华人民共和国成立70周年xxxxxxxxxxxxxxxxxxx</strong>
                        <em>三月</em>
                        <em class="mx-audio-play-day">28</em>
                        <em>2020年</em>
                      </span>
                      <!-- 音频文件 id  .audio-control 该样式用于美化进度条 -->
                      <audio
                        id="5e588997207d2131782712"
                        :src="audioUrl"
                        loop="loop"
                        class="audio-control"
                      ></audio>
                    </a>
                    <!-- </router-link> -->
                  </li>
                  <!-- 一个li -->
                  <li>
                    <a href="javascript:;">
                      <i :class="['iconfont', flag?'':'icon-caret-right']">
                        <img v-if="flag" src="../../assets/img/sound.gif" alt />
                      </i>
                      <img src="../../assets/img/yinpin-book-img1.jpg" alt />
                      <span>
                        <strong>习近平在庆祝中华人民共和国成立70周年 大会上的讲话</strong>
                        <em>三月</em>
                        <em class="mx-audio-play-day">28</em>
                        <em>2020年</em>
                      </span>
                      <!-- 音频文件 id  .audio-control 该样式用于美化进度条 -->
                      <audio
                        id="5e58890a8523e268070218"
                        src="https://boot-video.xuexi.cn/audio/1005/p/e9351e4cd7ea3c4467ff9316321316a3-e644cfb7887443e7bfcdedec18b09e34-1.mp3"
                        loop
                        class="audio-control-bea"
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
              <div class="mx-media-watch clearfix">
                <div class="left-icon">
                  <span>
                    <i class="iconfont icon-yanjing"></i>
                    60
                  </span>
                </div>
              </div>
              <!-- 观看次数+分享区域 end-->
              <!-- 音频内容全部内容 start -->
              <div class="mx-media-main mx-m b-shadow">
                <div id="media-main" class="mx-media-text-body mx-media-noneheight">
                  <!-- 第一块文章内容 start-->
                  <div>
                    <div>
                      <p>全国同胞们</p>
                      <p>同志们,朋友们</p>
                    </div>
                  </div>
                  <!-- 第一块文章内容 end -->
                  <!-- 第二块文章内容 start -->
                  <div>
                    <p>
                      今天，我们隆重集会，庆祝中华人民共和国成立70周年。
                      此时此刻，全国各族人民、海内外中华儿女，都怀着无比喜悦的心情，都为我们伟大的祖国感到自豪，都为我们伟大的祖国衷心祝福。
                    </p>
                    <p>
                      <img
                        src="../../assets/img/yinpin-content-img.jpg"
                        alt
                        style="max-width:100%;"
                      />
                    </p>
                    <p>
                      在这里，我代表党中央、全国人大、国务院、全国政协和中央军委，向一切为民族独立和人民解放、国家富强和人民幸福建立了不朽功勋的革命先辈和烈士们，表示深切的怀念！
                      向全国各族人民和海内外爱国同胞，致以热烈的祝贺！向关心和支持中国发展的各国朋友，表示衷心的感谢！
                    </p>
                    <p>
                      70年前的今天，毛泽东同志在这里向世界庄严宣告了中华人民共和国的成立，中国人民从此站起来了。这一伟大事件，彻底改变了近代以后100多年中国积贫积弱、受人欺凌的悲惨命运，中华民族走上了实现伟大复兴的壮阔道路。
                      70年来，全国各族人民同心同德、艰苦奋斗，取得了令世界刮目相看的伟大成就。今天，社会主义中国巍然屹立在世界东方，没有任何力量能够撼动我们伟大祖国的地位，没有任何力量能够阻挡中国人民和中华民族的前进步伐。
                      同志们、朋友们！
                      前进征程上，我们要坚持中国共产党领导，坚持人民主体地位，坚持中国特色社会主义道路，全面贯彻执行党的基本理论、基本路线、基本方略，不断满足人民对美好生活的向往，不断创造新的历史伟业。
                      前进征程上，我们要坚持“和平统一、一国两制”的方针，保持香港、澳门长期繁荣稳定，推动海峡两岸关系和平发展，团结全体中华儿女，继续为实现祖国完全统一而奋斗。
                      前进征程上，我们要坚持和平发展道路，奉行互利共赢的开放战略，继续同世界各国人民一道推动共建人类命运共同体。
                      中国人民解放军和人民武装警察部队要永葆人民军队性质、宗旨、本色，坚决维护国家主权、安全、发展利益，坚决维护世界和平。
                      同志们、朋友们！
                      中国的昨天已经写在人类的史册上，中国的今天正在亿万人民手中创造，中国的明天必将更加美好。全党全军全国各族人民要更加紧密地团结起来，不忘初心，牢记使命，继续把我们的人民共和国巩固好、发展好，继续为实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦而努力奋斗！
                      伟大的中华人民共和国万岁！
                      伟大的中国共产党万岁！
                      伟大的中国人民万岁！
                    </p>
                  </div>
                  <!-- 第二块文章内容 end -->
                </div>
                <!-- 收起 全文  加载全文 小按钮 -->
                <div class="mx-media-main-more" style="margin-top:20px;">
                  <span>
                    <i class="iconfont icon-ico_back">收起</i>
                  </span>
                </div>
              </div>
              <!-- 音频内容全部内容 end -->
            </div>
          </div>
          <!-- 右边推荐新闻区域 -->
          <div class="c2-wrapper">
            <div class="c2">
              <hotKeywords></hotKeywords>
              <topicSimple></topicSimple>
              <sheetNewsSide></sheetNewsSide>
              <topicTitleInfo></topicTitleInfo>
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
      paramsData: {}
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
          access_token: localStorage.getItem("Authorization"),
          category_id: this.paramsData.category_id,
          id: this.paramsData.id,
          type: this.paramsData.type
        }
      });
      console.log(res);
      return;
      // let data = res.data;
      // this.audioUrl = this.ipAddress + "/" + this.detailsInfo.audioUrl;

      // 拿到音频后去获取音频的长度
      this.getInitTotal();
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

      console.log(media);
      //获取当前时长 s 要四舍五入
      //   console.log(media.currentTime);
      //   console.log(this.secondsFormat(media.currentTime));
      //   console.log(typeof media.currentTime);
      //获取当前总时间  要转换成分钟
      //   console.log(media.duration);

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
      // time.parseInt
      // //转成字符串

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
