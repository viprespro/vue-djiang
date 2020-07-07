<template>
  <div id="details-news">
    <Header></Header>
    <!-- 这是新闻详情页 -->
    <div class="content">
      <!-- {{id}} -->
      <!-- 第一块部分 3级标题 -->
      <div class="layout-wrapper">
        <div class="layout phone-none">
          <div class="c1-wrapper">
            <div class="c1">
              <breadCrumbNav
                :categoryList="categoryDataList"
                :categoryId="categoryId"
                :breadCrumbList="breadCrumbList"
              ></breadCrumbNav>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二块部分 主新闻模块 +相关推荐模块 -->
      <div class="layout-wrapper">
        <div class="layout r-80-20 clearfix">
          <div class="c1-wrapper">
            <div class="c1">
              <div class="mx-details mx-m clearfix">
                <h1>{{detailsList.title}}</h1>
                <div class="mx-details-time" style="display: inline-block;">
                  <span>{{detailsList.createTime}}</span>
                  <!-- <span style="margin-left: 10px;">User9</span> -->
                </div>
                <!-- 时间状态栏 -->
                <div class="time-status" style>
                  <div class="mx-details-comment clearfix">
                    <span>
                      <!-- <i class="iconfont icon-yanjing"></i>
                      8-->
                    </span>
                  </div>
                </div>
                <!-- 缩略简介栏 -->
                <div class="mx-details-summary mx-m">{{detailsList.description}}</div>
                <!-- 详情栏目 主体 -->
                <div class="mx-details-main">
                  <!-- 当前新闻详情 -->
                  <div v-html="detailsList.content"></div>
                  
                </div>
              </div>
              
            </div>
          </div>
          <!-- c2内容块- 右边 -->
          <div class="c2-wrapper">
            <div class="c2">
              <hotKeywords :keywordList="keywordList" :activeMenuId="activeMenuId" :categoryId="categoryId"></hotKeywords>
              <topicSimple :recommendList="recommendList" :activeMenuId="activeMenuId"></topicSimple>
              <sheetNewsSide :relatedList="relatedList" :activeMenuId="activeMenuId"></sheetNewsSide>
              <topicTitleInfo :topicList="topicList" :activeMenuId="activeMenuId"></topicTitleInfo>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//导入Header头文件
import Header from "@/components/common/Header.vue";
//导入面包屑
import breadCrumbNav from "../../components/common/breadCrumbNav.vue";
//
import listingNewsLatest from "../../components/common/listingNewsLatest.vue";
//导入 右边推荐模块

import hotKeywords from "../../components/common/hotKeywords.vue";
import topicSimple from "../../components/common/topicSimple.vue";
import sheetNewsSide from "../../components/common/sheetNewsSide.vue";
import topicTitleInfo from "../../components/common/topicTitleInfo.vue";
//导入Footer组件
import Footer from "@/components/common/Footer.vue";
import { mapState } from "vuex";
//导入jquery
import $ from "jquery";
//导入footer控制
import {footAuto} from "@/lib/domFixed.js"
export default {
   props: {
    id: {}
  },
  data() {
    return {
      ipAddress: "",
      categoryDataList: [],
      categoryId: "",
      // 需要传到breadCrumbnav组件文章的值
      breadCrumbList: {},
      // 参数信息
      paramsData: {},
      //页面数据
      detailsList: {},
      //热门关键字
      keywordList: [],
      //推荐数据
      recommendList: [],
      //相关数据
      relatedList: [],
      //专题数据
      topicList: [],
      categoryName: "",
      activeMenuId:null
    };
  },
  computed: {
    ...mapState({
      // 导入需要ip地址
      //Authorization: state => state. Authorization,
    })
  },
  created() {
    //ip地址
    this.ipAddress = this.$store.state.ipAddress;
    // 共用菜单数据赋值
    this.categoryDataList = this.$store.state.commonData.headMenu;
    //this.activeMenuId=this.paramsData.categoryId
    this.paramsData = this.$route.query;
    // 拿到categoryId
    this.categoryId = this.paramsData.categoryId;
    //加载详情数据
    this.getDetailsData();
  },
  watch:{
      "$route":"getDetailsData"
  },
  mounted() {
    //操作dom
    
   
  },
  updated() {
    //dom更新后
    //处理富文本
    this.dealHtml();
    footAuto();
  },
  methods: {
    //利用传递过来的参数获取对应id的详情
    async getDetailsData() {
      //获取localStore的参数列表
      // 暂时性赋值
      this.paramsData = this.$route.query;
      console.log(this.$route.query);
      let { data: res } = await this.$http.get("/api/detail", {
        params: {
          code: localStorage.getItem("authCode"),
          category_id: this.paramsData.categoryId,
          id: this.paramsData.id,
          type: this.paramsData.type
        }
      });
      if (res.code != 0) return;
      let data = res.data;
      console.log(data);
      //页面详情数据
      this.detailsList = data.detail;
      //拿到面包屑菜单所需的data
      this.breadCrumbList = {
        menuId: this.detailsList.categoryId,
        articleTitle: this.detailsList.title
      };
      //关键字数据
      this.keywordList = data.keyword;
      //推荐数据
      this.recommendList = data.recommend;
      //相关数据
      this.relatedList = data.related;
      //专题数据
      this.topicList = data.topics;
      //标题
       document.title = this.detailsList.title; // 设置标题
      console.log( this.detailsList);
    },
    //处理富文本
    dealHtml() {
      var that=this;
      //文章处理
      //给图片的文章加样式  .mx-details-main img
      $(".mx-details-main img").css({
        margin: "20px auto",
        display: "block",
        // width: "200px",
        "max-width": "100%"
        
        
      });
      //遍历图片 得到图片的路径
      $(function(){
         $(".mx-details-main img").each(function() {
        // alert($(this).attr("src"));
        let newSrcUrl = "";
        let srcUrl = $(this).attr("src");
        if (srcUrl.indexOf("file") != -1) {
          //console.log(2)
          newSrcUrl =srcUrl.slice(2);
          
          $(this).attr("src", newSrcUrl);
        }
      });
      })
     
      
    }
  },
  components: {
    Header,
    breadCrumbNav,
    listingNewsLatest,
    hotKeywords,
    topicSimple,
    sheetNewsSide,
    topicTitleInfo,
    Footer
  }
};
</script>

<style scoped="scoped" lang="scss">
.c1,
.c2,
.c3 {
  padding: 1px 10px;
  display: block;
}

.mx-m {
  margin: 20px 0 0;
}

.layout-wrapper {
  width: 100%;
  display: block;
  clear: both;
}

/* 面包屑导航样式 */
.mx-bread-crumb {
  display: block;
  padding: 0 140px 0 0;
  line-height: 18px;
  height: 18px;
  position: relative;
}

.mx-bread-crumb a {
  opacity: 0.7;
  transition: all 0.3s;
}

.mx-bread-crumb em {
  color: #ddd;
}

.divider {
  display: inline-block;
  padding: 0 10px;
  color: #ddd;
}

/* 新闻详情排版 */
.mx-details {
  display: block;
  padding: 50px;
  background-color: #fff;
}

.mx-details h1 {
  font-size: 30px;
  line-height: 1.5;
  font-weight: bold;
}

.mx-details-time {
  display: inline-block;
  font-size: 14px;
  color: #aaa;
  margin: 10px 0 0;
}

.time-status {
  display: inline-block;
  float: right;
  margin-top: 6px;
  position: relative;
  top: -5px;
}

.mx-details-time span {
  color: #aaa;
}

.mx-details-comment {
  display: inline-block;
  line-height: 1.5;
  font-size: 15px;
}

.mx-details-comment span i {
  font-size: 18px !important;
}

.mx-details-summary {
  display: block;
  padding: 15px;
  line-height: 2;
  color: #666;
  background: #f9f9f9;
  border-radius: 3px;
  border: 1px solid #f2f2f2;
}

.mx-details-main {
  display: block;
  font-size: 16px;
  line-height: 2;
}

.mx-details-main p {
  margin-top: 20px !important;
  /* padding-top:20px; */
}

.mx-details-main img {
  margin: 20px auto;
  display: block;
  max-width: 100%;
}

/* 第一档  移动端  大小翻倍*/
@media only screen and (max-width: 959px) {
  $times: 2;
  /* 新闻详情排版 */
  .mx-details {
    display: block;
    // padding: 0;
    background-color: #fff;
  }

  .mx-details h1 {
    font-size: 30px * $times;
    line-height: 1.5;
    font-weight: bold;
  }

  .mx-details-time {
    display: inline-block;
    font-size: 14px * $times;
    color: #aaa;
    margin: 10px * $times 0 0;
  }

  .time-status {
    display: inline-block;
    float: right;
    margin-top: 6px * $times;
    position: relative;
    top: -5px * $times;
  }

  .mx-details-time span {
    color: #aaa;
  }

  .mx-details-comment {
    display: inline-block;
    line-height: 1.5;
    font-size: 15px * $times;
  }

  .mx-details-comment span i {
    font-size: 18px * $times !important;
  }

  .mx-details-summary {
    display: block;
    padding: 15px * $times;
    line-height: 2;
    color: #666;
    background: #f9f9f9;
    border-radius: 3px * $times;
    border: 1px * $times solid #f2f2f2;
  }

  .mx-details-main {
    display: block;
    font-size: 16px * $times;
    line-height: 2;
  }

  .mx-details-main p {
    margin-top: 20px * $times !important;
    /* padding-top:20px; */
  }

  .mx-details-main img {
    margin: 20px * $times auto;
    display: block;
    max-width: 100%;
  }
}

/* 第二档 ipad端 */
@media only screen and (min-width: 960px) and (max-width: 1239px) {
  .layout {
    width: 960px;
    margin: 0 auto;
    /* background-color: red; */
  }

  .r-80-20 .c1 {
    width: 720px;
    float: left;
  }

  .r-80-20 .c2 {
    width: 240px;
    float: right;
  }
}

/* 第三档 pc 端 */
@media only screen and (min-width: 1240px) {
  .layout {
    width: 1200px;
    margin: 0 auto;
    /* background-color: red; */
  }

  .r-80-20 .c1 {
    width: 900px;
    float: left;
  }

  .r-80-20 .c2 {
    width: 300px;
    float: right;
  }
}
</style>
