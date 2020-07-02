<template>
  <div id="search">
    <Header></Header>

    <div class="search-content">
      <!-- 搜索区域 start -->
      <div class="layout-wrapper">
        <div class="layout">
          <div class="c1-wrapper">
            <div class="c1">
              <div class="mx-search-page bg mx-m">
                <div class="mx-search-page-box">
                  <!-- 表单 -->
                  <form action>
                    <input
                      type="text"
                      v-model="inputVal"
                      placeholder="请输入关键字"
                      name="keyword"
                      class="input"
                    />
                    <div class="bt" @click="doSearch()">搜索</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 搜索区域end -->

      <!-- 选项卡 title区域 start  -->
      <div class="layout-wrapper" v-if="afterSearch">
        <div class="layout">
          <div class="c1-wrapper">
            <div class="c1 mx-m">
              <div class="mx-tab-list">
                <router-link
                  v-for="item in tabsList"
                  :to="{name:'searchList',query:{id:item.id}}"
                  :key="item.id"
                  @click.native="handleClick(item.id)"
                  :class="{now: item.id == curId}"
                >
                  <i class="iconfont" :class="item.icon"></i>
                  {{ item.title }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 选项卡 title区域 end  -->
      <!-- 选项卡 content区域 start -->
      <div class="layout-wrapper" v-if="afterSearch">
        <div class="layout">
          <div class="c1-wrapper">
            <div class="c1">
              <!-- 此处存放 router-view -->
              <router-view></router-view>
              <!-- 将此模块设计成子路由模块 -->
            </div>
          </div>
        </div>
      </div>
      <!-- 选项卡 content区域 end -->
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
//导入Header头文件
import Header from "../../components/common/Header.vue";
//导入Footer脚文件
import Footer from "../../components/common/Footer.vue";
import { mapState } from "vuex";
// import axios from "axios";
export default {
  methods: {
    //监听pagesize改变的事件
    // handleSizeChange(newSize) {
    //   console.log(newSize);
    //   // this.queryInfo.pagesize=newSize;
    //   // this.getData();
    // },
    // //监听页码值 改变的事件
    // handleCurrentChange(newPage) {
    //   console.log(newPage);
    //   // this.queryInfo.newPage=newPage;
    //   // this.getData();
    // }

    mounted() {},

    // 处理搜索
    async doSearch() {
      this.afterSearch = true;
      let arr = Array.from(arguments);
      if (!arr.length) {
        this.curId = 1; // 回到全部选项
      }
      // localStorage.getItem("Authorization"),

      let data =  {
          access_token: localStorage.getItem("Authorization"),
          keyword: this.inputVal || '',
          type: this.curId  // 全部 1  文章 1 视频 2 音频 3
        }

      // const str = JSON.stringify(data)
      
      let res = await this.$http.get("/api/search",{
        params:{
          access_token: localStorage.getItem("Authorization"),
          keyword: this.inputVal || '',
          type: this.curId  // 全部 1  文章 1 视频 2 音频 3
        }
      }
      );
      console.log(res);
    },

    handleClick(i) {
      this.curId = i;
      // 搜索的一个选项
      this.doSearch("tabSearch");
    }
  },

  computed: {
    ...mapState(["Authorization"])
  },

  data() {
    // return {
    //   currentPage1: 5,
    //   currentPage2: 5,
    //   currentPage3: 5,
    //   currentPage4: 4
    // };
    return {
      tabsList: [
        {
          id: 1,
          title: "全部"
        },
        {
          id: 2,
          title: "文章",
          icon: "icon-wenzhang"
        },
        {
          id: 3,
          title: "视频",
          icon: "icon-shipin"
        },
        {
          id: 4,
          title: "音乐",
          icon: "icon-yinpin"
        },
        {
          id: 5,
          title: "链接",
          icon: "icon-lianjie"
        }
      ],
      afterSearch: false, // 是否执行搜索
      curId: 1,
      inputVal: "" // input的值
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>
<style scoped="scoped">
.mx-m {
  margin: 20px 0 0;
}

.bg {
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(76, 86, 114, 0.12);
}

.c1,
.c2,
.c3 {
  display: block;
  padding: 1px 10px;
}

.layout-wrapper {
  display: block;
  width: 100%;
  clear: both;
}

.mx-search-page {
  padding: 50px;
}

.mx-search-page-box {
  display: block;
  margin: 0 200px;
  /* 给按钮提供定位点 */
  position: relative;
}

/* 美化input */
.mx-search-page input {
  display: inline-block;
  width: 100%;
  padding: 0 90px 0 10px;
  margin: 0;
  font-size: 16px;
  border: 1px solid #ddd;
  border-right: none;
  height: 45px;
  line-height: 43px;

  border-radius: 5px 0 0 5px !important;
  background-color: #fff;
}

/* 美化按钮 */
.mx-search-page .bt {
  position: absolute;
  right: 0;
  display: inline-block;
  height: 45px;
  padding: 0 25px;
  margin: 0 !important;
  font-size: 14px;
  color: #fff;
  text-align: center;
  border: 1px solid #ddd;
  background-color: #c01;
  border-radius: 0px 5px 5px 0px !important;
  border-color: #c01;
  line-height: 43px;
  cursor: pointer;
}

.mx-search-page .bt:hover {
  background-color: #d00;
  border-color: #c01;
  color: #fff;
  filter: brightness(1.1);
}

/* 第二部分 tab-lsit*/
.mx-tab-list {
  padding: 10px;
  background-color: #fff;
}

.mx-tab-list a {
  display: inline-block;
  line-height: 30px;
  margin: 0 10px;
}

.mx-tab-list .now {
  background: transparent !important;
  border-bottom: 3px #c01 solid;
  color: #c01;
  border-radius: 0 !important;
  padding: 0;
}
.router-link-active {
  /* background: transparent !important;
  border-bottom: 3px #c01 solid;
  color: #c01;
  border-radius: 0 !important;
  padding: 0; */
}

/* 媒体查询部分 */
/* 第 0 档 移动端 */

/* 第一档  移动端  大小翻倍*/
@media only screen and (max-width: 959px) {
  .layout {
    width: 100vw;
  }
  .pageStyle {
    width: 100vw;
  }
  .c1 {
    float: none !important;
    width: 100% !important;
    padding: 0 !important;
  }
  .mx-m {
    margin: 20px 0 0;
  }
  .mx-search-page {
    padding: 40px;
    text-align: center;
  }

  .bg {
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(76, 86, 114, 0.12);
  }
  .mx-search-page-box {
    display: block;
    position: relative;
    margin: 0;
  }
  /* 美化input */
  .mx-search-page .input {
    display: inline-block;
    background-color: #fff;
    margin: 0;
    width: 100%;
    line-height: 86px;
    height: 90px;
    border: 2px solid #ddd;
    border-right: none;
    border-radius: 10px 0 0 10px !important;
    padding: 0 180px 0 20px;
    font-size: 32px;
  }
  /* 美化按钮 */
  .mx-search-page .bt {
    position: absolute;
    right: 0;
    display: inline-block;
    height: 90px;
    padding: 0 50px;
    margin: 0 !important;
    font-size: 28px;
    color: #fff;
    text-align: center;
    border: 2px solid #ddd;
    background-color: #c01;
    border-color: #c01;
    border-radius: 0px 10px 10px 0px !important;
    line-height: 86px;
    cursor: pointer;
  }
  .mx-search-page .bt:hover {
    background-color: #d00;
    border-color: #c01;
    color: #fff;
    filter: brightness(1.1);
  }
  /* 第二部分 tab-lsit*/
  .mx-tab-list {
    padding: 20px;
    background-color: #fff;
  }

  .mx-tab-list a {
    display: inline-block;
    line-height: 60px;
    margin: 0 20px;
    font-size: 28px !important;
  }
  .mx-tab-list a i {
    font-size: 32px !important;
  }
  .mx-tab-list .now {
    background: transparent !important;
    border-bottom: 6px #c01 solid;
    color: #c01;
    border-radius: 0 !important;
    padding: 0;
  }
}

/* 第二档  ipad端 */
@media only screen and (min-width: 960px) and (max-width: 1239px) {
  .layout {
    width: 960px;
    margin: 0 auto;
    /* background:red; */
  }
}

/* 第三档 pc 端 */
@media only screen and (min-width: 1240px) {
  .layout {
    width: 1200px;
    margin: 0 auto;
    /* background:red; */
  }
}

/* 1240下通用尺寸 */
</style>

