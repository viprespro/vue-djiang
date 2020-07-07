<template>
  <div id="details-essay">
    <!-- Header组件 -->
    <Header></Header>
    <!-- 主要内容 -->
    <div class="details-essay-content">
      <!-- 三级标题区域 start  -->
      <div class="layout-wrapper mx-book-bread phone-none">
        <div class="layout">
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
      <!-- 三级标题区域 end -->
      <!-- 文章详情内容区域 start -->
      <div class="layout-wrapper mx-book">
        <div class="layout">
          <div class="c1-wrapper">
            <div class="c1">
              <div class="mx-story-book-wrapper">
                <div class="mx-story-book">
                  <!-- 内容区域 -->
                  <div class="mx-story-book-content clearfix">
                    <div class="mx-story-book-page">
                      <!-- 标题 -->
                      <h1>{{detailsList.title}}</h1>
                      <!-- 时间 -->
                      <p class="mx-story-time">
                        <span class="mr-10">{{detailsList.createTime}}</span>
                        
                      </p>
                      <!-- 内容输出块 -->
                      <div v-html="detailsList.content">
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 文章详情内容区域 end -->
    </div>
    <!-- Footer组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
//导入Header头文件
import Header from "../../components/common/Header.vue";
//导入面包屑
import breadCrumbNav from "../../components/common/breadCrumbNav.vue";
//导入Footer脚文件
import Footer from "../../components/common/Footer.vue";

export default {
  data() {
    return {
      ipAddress: "",
      categoryDataList: [],
      categoryId: "",
      // 需要传到breadCrumbnav组件的值
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
      ralatedList: [],
      //专题数据
      topicList: [],
      categoryName: ""
    };
  },
	created(){
		 //ip地址
    this.ipAddress = this.$store.state.ipAddress;
    // 共用菜单数据赋值
    this.categoryDataList = this.$store.state.commonData.headMenu;
    //
    this.paramsData = this.$route.query;
    // 拿到categoryId 先写死
    this.categoryId = 6;
    //dom更新后
    this.getDetailsData();
  },
   watch: {
    $route: "getDetailsData"
  },
  mounted() {
    
  },
  updated() {
    //处理富文本
    this.dealHtml();
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
	  console.log(res)
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
      this.ralatedList = data.related;
      //专题数据
      this.topicList = data.topics;
      //标题
      document.title = this.detailsList.title; // 设置标题
    //   console.log(this.recommendList);
    },
    //处理富文本
    dealHtml() {
      var that = this;
      //文章处理
      //给图片的文章加样式  .mx-details-main img
      $(".mx-story-book-page img").css({
        margin: "20px auto",
        display: "block",
        // width: "200px",
        "max-width": "100%"
      });
      //遍历图片 得到图片的路径
      $(function(){
        $(".mx-story-book-page img").each(function() {
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
    Footer
  }
};
</script>

<style scoped="scoped">
.mr-10 {
  margin-right: 10px;
}

.layout-wrapper {
  width: 100%;
  display: block;
  clear: both;
}

/* 第一档  移动端  大小翻倍*/
@media only screen and (max-width: 959px) {
  .c1,
  .c2,
  .c3 {
    float: none !important;
    width: 100% !important;
    padding: 0 !important;
  }
  .mr-10 {
    margin-right: 20px;
  }
  .mx-m {
    margin: 10px 0 0;
  }
  .touch {
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .layout {
    width: 100%;
  }

  .mx-book-bread {
    display: none !important;
  }

  .mx-bread-crumb {
    padding: 0 160px 0 20px;
  }
  /* story-book-文库文章详情 样式 */
  .mx-book {
    position: relative;
  }

  .mx-book:after {
    content: "";
    display: block;
    background-color: #e9d2b0;
    background-image: linear-gradient(
      #90683c 60px,
      #e2c594 400px,
      #e9d2b0 1600px
    );
    height: 100%;
    width: 100%;
    left: 0;
    top: -120px;
    padding: 0 0 160px 0;
    position: absolute;
    z-index: -5;
    box-sizing: content-box;
  }

  .mx-story-book {
    display: block;
    position: relative;
    padding: 0 0 40px;
  }

  .mx-story-book-content {
    display: block;
    margin-top: -40px;
  }

  .mx-story-book-page {
    margin-top: 0px;
    display: block;
    background-color: #fffdf8;
    background-image: linear-gradient(#f3ecdc 0px, #fffdf8 200px);
    color: #5d2e00;
    padding: 60px 60px 40px;
    font-size: 32px;
    border: 2px #e2c594 solid;
    position: relative;
    min-height: 100vh;
  }
  .mx-story-book-page h1 {
    color: rgba(0, 0, 0, 0.85);
    font-size: 48px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
  }
  .mx-story-time {
    color: #aaa;
    font-size: 28px;
  }
  .mx-story-time span {
    color: #aaa;
  }
  .mx-story-book-page p {
    display: block;
    margin: 40px 0 0 !important;
    font-size: 32px !important;
    line-height: 2;
    /* color: #5d2e00; */
  }
  .mx-story-book-page p.essay-img {
    text-align: center;
  }
  .mx-story-book-page p span.sub-title {
    font-weight: bold;
    color: #5d2e00;
  }
  .mx-story-book-page img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
  /* 文字 两段剧中 */
  .mx-story-book-page p.essay-text {
    text-align: justify;
  }
  .mx-story-book-page p span.essay-author {
    text-align: left;
    color: #5d2e00;
  }
  .mx-story-book-page:after,
  .mx-story-book-page:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    left: 10px;
    top: 10px;
    background: #fffdf8;
    border: 2px #e2c594 solid;
    z-index: -3;
  }
  .mx-story-book-page:before {
    left: 18px;
    top: 18px;
  }
}

/* 第二档 ipad端 */
@media only screen and (min-width: 960px) and (max-width: 1239px) {
  .layout {
    width: 960px;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1240px) {
  .layout {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
