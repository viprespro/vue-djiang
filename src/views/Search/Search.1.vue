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
                  :to="{name:'searchList',query:{id:item.id, inputVal: inputVal,}}"
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
export default {
  data() {
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
          title: "音乐",
          icon: "icon-yinpin"
        },
        {
          id: 4,
          title: "视频",
          icon: "icon-shipin"
        }
      ],
      afterSearch: false, // 是否执行过搜索
      curId: 1,
      inputVal: "" // input的值
    };
  },
  components: {
    Header,
    Footer
  },
  methods: {
    // 处理搜索
    async doSearch() {
      this.afterSearch = true;
      this.curId = 1;
      if(this.$children[6]) {
        this.$children[6].doSearch();
      }
    },

    handleClick(i) {
      this.curId = i;
      // 搜索的一个选项
      // this.doSearch("tabSearch");
    }
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

