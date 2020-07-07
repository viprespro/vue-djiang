<template>
  <div id="app" style="overflow:unset;">
    <!-- 头开始 -->
    <Header :activeMenu="activeMenuId"></Header>
    <!-- 头结束 -->
    <!-- 内容开始 -->
    <div class="content">
      <!-- 面包屑导航start -->
      <div class="phone-none">
        <div class="layout-wrapper">
          <div class="layout">
            <div class="c1-wrapper">
              <div class="c1">
                <breadCrumbNav :categoryList="categoryDataList" :categoryId="categoryId"></breadCrumbNav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 面包屑导航end -->
      <!--列表标题区域 start-->
      <div class="layout-wrapper">
        <div class="layout">
          <div class="c1-wrapper">
            <div class="c1">
              <columnTitleInfo :categoryDetailList="categoryDetailDataList"></columnTitleInfo>
            </div>
          </div>
        </div>
      </div>
      <!--列表标题区域 end-->
      <!-- book-news start -->
      <div class="layout-wrapper">
        <div class="layout r-60-40 clearfix">
          <div class="c1-wrapper">
            <div class="c1">
              <!-- 暂时渲染hot数据 -->
              <coversNews :latestList="latestDataList" :categoryId="categoryId"></coversNews>
            </div>
          </div>
        </div>
      </div>
      <!--  book-news end -->
    </div>
    <!-- 内容结束-->

    <!-- 尾部开始 -->
    <Footer></Footer>
    <!-- 尾部结束 -->
  </div>
</template>


<script>
//导入Header头文件
import Header from "@/components/common/Header.vue";
// 导入面包屑导航组件
import breadCrumbNav from "@/components/common/breadCrumbNav.vue";

import columnTitleInfo from "@/components/common/columnTitleInfo.vue";
import columnClassNav from "@/components/common/columnClassNav.vue";
//导入coversNews
import coversNews from "@/components/common/coversNews.vue";

//导入Footer组件
import Footer from "@/components/common/Footer.vue";
import floatMenu from "@/components/common/floatMenu.vue";
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
      ipAddress: "",
      activeMenuId: 0,
      categoryId: "",
      // 是否有背景图
      hasBackgroundImg: false,
      //是否是courses页面,来单独控制course页图片大小
      isCoursePage: true,
      //用于存放接口取来的数据
      // 所有菜单信息
      categoryDataList: [],
      //菜单详情页
      categoryDetailDataList: [],
      hotDataList: [],
      latestDataList: [],
      topicDataList: []
    };
  },
  //生命周期
  created() {
    console.log(this.$store.state.commonData.headMenu);
    //ip地址
    this.ipAddress = this.$store.state.ipAddress;
    // 共用菜单数据赋值
    this.categoryDataList = this.$store.state.commonData.headMenu;
    // console.log(this.$route.path.slice(-1));
    //获取地址栏的activemenuId
    this.activeMenuId = this.$route.path.slice(-1);
    // 拿到category_id
    this.categoryId = this.$route.path.slice(-1);

    //加载首屏数据
    this.getData();
    // console.log(this.categoryDetailDataList)
    console.log(this.categoryDataList);
    // 2020/07/03 10:35:36
  },
  beforeDestroy() {
    // window.removeEventListener('resize', this.handleResize)
  },
  mounted() {
    //获取swiper
    this.getSwiper();
    // this.footAuto();
    footAuto();
    //调整窗口重新调整footer
    window.onresize=function(){
       footAuto();
    }
  },
  updated() {
    // let that=this;
    footAuto();
    //调整窗口重新调整footer
    window.onresize=function(){
       footAuto();
    }
  },
  methods: {
    async getData() {
      //去请求分类页接口  需要参数  token   category_id
      let { data: res } = await this.$http.get("api/category", {
        params: {
          code: localStorage.getItem("authCode"),
          categoryId: this.categoryId
        }
      });
      console.log(res);
      if (res.code != 0) return "数据获取失败";
      let data = res.data;
      //取出所有的数据块
      this.categoryDetailDataList = data.categoryDetail;
      this.hotDataList = data.hot;
      this.latestDataList = data.latest;
      this.topicDataList = data.topics;
      // 处理数据
      this.latestDataList = this.handleCreateTime(this.latestDataList);
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
    handleCreateTime(arr) {
      //处理时间 字段拆分年月日
      // console.log(arr);
      for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        //console.log(arr[i].createTime)
        let temp = arr[i].createTime.split(" ");
        //console.log(temp);
        let after = temp[0].split("/");
        //console.log(after)
        arr[i].year = after[0];
        arr[i].month = this.foo(after[1]);
        arr[i].day = after[2];
      }
      return arr;
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
    columnClassNav,
    coversNews,
    Footer,
    floatMenu
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
}

/*1240尺寸以上 */
@media only screen and (min-width: 1240px) {
  .layout {
    width: 1200px;
    margin: 0 auto;
    /* background: blue; */
  }
}
</style>




