
<template>
<!-- 这里是备用文章页面 -->
  <div id="details-news">
    <Header></Header>
    <!-- 这是新闻详情页 -->
    <div class="detail-news-content">
      <!-- {{id}} -->
      <!-- 第一块部分 3级标题 -->
      <div class="layout-wrapper">
        <div class="layout phone-none">
          <div class="c1-wrapper">
            <div class="c1">
              <!-- 
                isMore  显示 查看更多 
                isKeyword  显示 关键字
              -->
              <breadCrumbNav :isMore="isMore" :activeMenuId="activeMenuId"></breadCrumbNav>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二块部分 主新闻模块 +相关推荐模块 -->
      <div class="layout-wrapper">
        <div class="layout r-80-20 clearfix">
          <div class="c1-wrapper">
            <div class="c1">
              <listingNewsMore :totalList="totalList"></listingNewsMore> 
            </div>
          </div>
          <!-- c2内容块- 右边 -->
          <div class="c2-wrapper">
            <div class="c2">
              <!-- <hotKeywords :keywordList="keywordList"></hotKeywords> -->
             
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
import breadCrumbNav from "@/components/common/breadCrumbNav.vue";
//

//导入查看更多组件
import listingNewsMore from "@/components/common/listingNewsMore.vue"

//导入 右边推荐模块

import hotKeywords from "@/components/common/hotKeywords.vue";

//导入Footer组件
import Footer from "@/components/common/Footer.vue";
import { mapState } from "vuex";
//导入jquery
// import $ from "jquery";
export default {
  //  props: {
  //   id: {}
  // },
  data() {
    return {
      ipAddress:'',
      categoryDataList:[],
      categoryId:'',
      // 需要传到breadCrumbnav组件的值
      breadCrumbList:{},
      // 参数信息
      paramsData: {},
      //页面数据
      detailsList: {},
      //热门关键字
      keywordList:[],
      //推荐数据
      recommendList:[],
      //相关数据
      ralatedList:[],
      //专题数据
      topicList:[],
      //模块所有数据
      totalList:[],
      //标志变量
      isMore:null,
      //标识页面变量
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
    this.ipAddress=this.$store.state.ipAddress;
    // 共用菜单数据赋值
    this.categoryDataList=this.$store.state.commonData.headMenu;
    //
    this.paramsData = this.$route.query;
    // 拿到categoryId
    this.categoryId=this.paramsData.categoryId;
    // console.log(this.$route.query.totalData);
    //进行数据字符串转码
    this.totalList=JSON.parse(this.$route.query.totalData);
    //拿到标志变量 看一下是否是查看更多按钮跳转过来的
    this.isMore=this.$route.query.isMore;
    //
    this.activeMenuId=this.$route.query.activeMenuId;
    console.log(this.$route.query)
    console.log(this.isMore)
    console.log(this.totalList)
    //加载首批数据
    // this.getDetailsData();
  },
  mounted() {
    //操作dom
    
    // this.dplayerInit();
    
    // console.log(this.$route.query);
    // console.log(this.paramsData.type);
  },
  updated() {
    //dom更新后
    
    
  },
  methods: {
    //利用传递过来的参数获取对应id的详情
    async getDetailsData() {
      //获取localStore的参数列表
      
     
      // let { data: res } = await this.$http.get("/api/detail", {
      //   params: {
      //     access_token: localStorage.getItem("Authorization"),
      //     category_id: this.paramsData.category_id,
      //     id: this.paramsData.id,
      //     type: this.paramsData.type
      //   }
      // });
      // if(res.code!=0) return;
      // let data = res.data;
      // console.log(data)
      // //页面详情数据
      // this.detailsList = data.detail;
      // //拿到面包屑菜单所需的data
      // this.breadCrumbList={menuId: this.detailsList.categoryId,articleTitle: this.detailsList.title};
      // //关键字数据
      // this.keywordList=data.keyword;
      // //推荐数据
      // this.recommendList=data.recommend;
      // //相关数据
      // this.ralatedList=data.related;
      // //专题数据
      // this.topicList=data.topics;
      // //标题
      // this.categoryName=data.categoryName;
      // console.log(this.recommendList)
    }
  },
  components: {
    Header,
    breadCrumbNav,
    listingNewsMore,
    
    hotKeywords,
    
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

