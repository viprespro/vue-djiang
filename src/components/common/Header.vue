<template>
  <div class="mx-header">
    <div class="layout-header-wrapper">
      <div class="layout-header">
        <div class="c1-wrapper">
          <!-- 主要块 -->
          <div class="c1 clearfix">
            <div class="mx-header">
              <div class="mx-header-height">
                <div class="mx-header-box">
                  <!-- 菜单相关内容 -->
                  <input
                    type="checkbox"
                    id="menu-opener-id"
                    class="mx-menu-opener"
                    style="display: none;"
                  />
                  <!-- 关联按钮 -->
                  <label for="menu-opener-id" class="mx-menu-icon"></label>
                  <div class="mx-barre-hamburger"></div>
                  <!-- logo -->
                  <div class="mx-logo mx-logo-no-slogan">
                    <a href="/" class="mx-logo-link router-link-active">
                      <!-- <img src="../../assets/img/logo.png" class="mx-logo-img" alt /> -->
                      <img :src="commonData.logoUrl" class="mx-logo-img" alt />
                    </a>
                  </div>
                  <!-- 隐藏内容 pc端藏的是当前的的页面 移动端显示  start-->
                  <div class="mx-page-title">首页</div>
                  <!-- 隐藏内容 pc端藏的是当前的的页面 移动端显示  end -->
                  <div class="mx-menu">
                    <div class="mx-first-menu db">
                      <!-- 一个li -->

                      <div :class="activeMenu==0 ? 'now' : ''" class="mx-first-menu-li">
                        <a
                          href="javascript:;"
                          class="mx-first-menu-link"
                          @click.prevent="goIndex('0')"
                        >
                          <label for="menu-opener-id"></label>
                          首页
                        </a>
                      </div>
                      <!-- 一个li -->
                      <!-- <template v-if="item.id==1">
                        
                      </template>-->
                      <div
                        :class="activeMenu==item.id ? 'now' : ''"
                        class="mx-first-menu-li"
                        v-for="item in commonData.headMenu"
                        :key="item.id"
                      >
                        <a
                          href="javascript:;"
                          class="mx-first-menu-link"
                          @click.prevent="goCategory(item.id)"
                        >
                          <label for="menu-opener-id"></label>
                          {{item.name}}
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- 搜索 -->
                  <div class="mx-user-box">
                    <div class="mx-search-button">
                      <router-link to="/search">
                        <i class="iconfont icon-sousuo"></i>
                      </router-link>
                    </div>
                  </div>
                  <!-- 注册登录盒子开始 先不写 -->

                  <!-- 注册登录盒子结束 先不写-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入vuex
import { mapState, mapMutations } from "vuex";
import "../../api/skip";
export default {
  props: {
    activeMenu: {
      // type: String,
      // default: ""
    }
  },
  data() {
    return {};
  },

  created() {
    this.getCommonData();
  },

  computed: {
    // 计算属性
    ...mapState({
      // 导入需要ip地址
      ipAddress: state => state.ipAddress,
      commonData: state => state.commonData
    })
  },

  methods: {
    ...mapMutations(["saveToken", "saveCommonData"]),
    //在头部获取
    async getCommonData() {
      //存在则执行下面代码

      let { data: res } = await this.$http.get("api/header", {
        params: {
          access_token: localStorage.getItem("Authorization")
        }
      });

      if (res.code != 0) return;

      let data = res.data;
      //组装公用数据
      let commonData = {
        //头部菜单
        headMenu: data.category,
        //网站标题title
        title: data.title,
        //版权信息
        copyright: data.copyright,
        //网站logo地址
        logoUrl: `${this.$store.state.ipAddress}${data.logo}`
      };
      //存放到vuex store
      this.saveCommonData(commonData);
    },
    
    //跳转首页
    goIndex(id) {
      this.$router.push({
        path: "/"
      });
    },

    //跳转到指定的菜单页
    goCategory(id) {
      //跳转对应id的菜单页面
      this.$router.push({
        path: `/category/${id}`
        // component:'',
      });
      //请求分类页接口
      // let { data: res } = this.$http.get("api/category", {
      //   params: {
      //     access_token: localStorage.getItem("Authorization"),
      //     categoryId: id
      //   }
      // });
      // console.log(res);
    }
  }
};
</script>

<style scoped="scoped">
html {
  /* // font-size: 75px; */
}

.c1,
.c2,
.c3 {
  padding: 0 10px;
  display: block;
}

.layout-header-wrapper {
  width: 100%;
  display: block;
  clear: both;
}

.mx-header {
  height: 80px;
  display: block;
  position: relative;
  z-index: 105;
  float: left;
  width: 100%;
  zoom: 1;
}

.mx-header-height {
  display: block;
  height: 80px;
  position: fixed;
  width: 100%;
  background-color: #fff;
  left: 0;
  box-shadow: 0 2px 6px rgba(76, 86, 114, 0.12);
  z-index: 1000;
}

.mx-header-height,
.mx-user-box {
  background-image: url(../../assets/img/menu-bg.png);
  background-color: #8b1d19;
  background-repeat: repeat-x;
  background-size: auto 80px;
}

.mx-header-box {
  width: 1180px;
  margin: 0 auto;
  position: relative;
  z-index: 109;
  display: block;
}

.mx-header-box {
  background: url(../../assets/img/menu-bg-1.png) center top no-repeat;
  background-size: auto 100%;
  height: 80px;
}

.mx-menu-icon {
  display: none;
}

/* logo区域 左浮动 */
.mx-logo {
  float: left;
  position: relative;
  z-index: 1000;

  padding: 15px 0 0;
}

.mx-logo-img {
  height: 50px;
}

/* 隐藏域当前菜单项 */
.mx-page-title {
  display: none;
}

/* 菜单区域 左浮动 */
.mx-menu {
  float: left;
  /* 用于移动端 */
  display: inline-block;
  margin-left: 40px;
  font-size: 16px !important;
  position: relative;
  z-index: 1000;
}

.mx-menu .db {
  display: block;
}

.mx-first-menu {
  position: relative;
  padding: 0;
  /* 最大宽度 超出隐藏*/
  max-width: 800px;
  max-height: 80px;
  overflow: hidden;
}

.mx-first-menu a {
  color: #fea;
}

.mx-first-menu .mx-first-menu-li {
  padding: 0;
  display: inline-block;
}

/* 隐藏label标签 */
.mx-first-menu-li label {
  display: none;
}

.mx-first-menu-link {
  line-height: 35px;
  display: inline-block;
  margin: 23px 15px 0;
  cursor: pointer;
  position: relative;
  border-bottom: 3px solid transparent;
}

/* 重载样式 */
.mx-first-menu-link {
  margin: 23px 9px 0;
}

.mx-first-menu .mx-first-menu-link {
  font-size: 16px !important;
}

/* 菜单激活样式  now*/
.mx-first-menu .now .mx-first-menu-link {
  font-weight: bold;
  border-bottom: 3px #000 solid;
}

.mx-first-menu .now .mx-first-menu-link {
  font-size: 16px !important;
  color: #fff !important;
  border-color: #fff;
}

input {
  /* 隐藏 */
  display: none;
}

input[type="checkbox"] {
  padding: 0;
  box-sizing: border-box;
}

/* 搜索按钮右浮动 去掉个人中心登录盒子 */
.mx-user-box {
  float: right;
  position: relative;
  z-index: 1001;
  padding: 0 0 0 5px;
  background-color: #fff;
}

.mx-user-box {
  background-image: url(../../assets/img/menu-bg.png);
  background-color: #8b1d19;
  background-repeat: repeat-x;
  background-size: auto 80px;
}

.mx-search-button {
  /* 按钮右浮动 */
  float: right;
  width: 30px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-siez: 24px;
  position: relative;
  margin-right: 15px;
}

.mx-search-button a {
  float: right;
  width: 30px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  position: relative;
  font-size: 24px;
  color: #fea;
}

.mx-search-button a i {
  font-size: 24px !important;
}

/* 低于960 移动端 */
@media only screen and (max-width: 959px) {
  body {
    font-size: 16px !important;
  }
  .layout-header {
    width: 100%;
  }

  .c1 {
    float: none !important;
    width: 100% !important;
    padding: 0 !important;
  }

  .mx-header {
    height: 100px;
  }

  .mx-header-height {
    height: 100px;
    background-repeat: repeat-x;
    background-size: auto 100px;
    font-size: 32px;
  }

  .mx-header-box {
    /* 50->100 */
    height: 100px;
    width: 100%;
  }

  /* 移动端按钮 */
  /* 全部翻倍 */
  .mx-menu-icon {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 109;
    width: 90px;
    height: 100px;
    display: block;
    cursor: pointer;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }

  .mx-menu-icon:after,
  .mx-menu-icon:before,
  .mx-barre-hamburger {
    position: absolute;
    top: 28px;
    left: 24px;
    content: "";
    width: 46px;
    height: 4px;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    z-index: 109;
    background: #08f;
  }

  .mx-menu-icon:before {
    top: 64px;
  }

  .mx-menu-icon:after,
  .mx-menu-icon:before,
  .mx-barre-hamburger {
    background-color: #fea;
  }

  .mx-barre-hamburger {
    top: 48px;
  }

  .mx-barre-hamburger {
    background: #fea;
  }

  /* 中间logo */
  .mx-logo {
    width: 100%;
    padding: 0 160px 0;
    box-sizing: border-box;
    position: absolute;
    text-align: center;
    line-height: 90px;
    height: 100px;
    overflow: hidden;
    z-index: 108;
    left: 0;
  }

  .mx-logo-img {
    height: 80px;
    margin: 0;
    vertical-align: middle;
  }

  .mx-page-title {
    color: #fff;
  }

  /* 菜单栏区域 */

  /* 将菜单栏固定在左侧 -220px区域 隐藏 */
  .mx-first-menu {
    position: fixed !important;
    left: -440px;
    /* left:0; */
    top: 100px;
    max-height: 1000px;
    display: block !important;
    background: #fff;
    height: 100%;
    overflow-y: auto;
    z-index: 1000;
    /* 菜单过渡动画 */
    transition: all 0.4s ease;
    padding: 0 0 20px !important;
    box-shadow: 0 2px 6px rgba(76, 86, 114, 0.12);
  }
  /* .mx-first-menu  .mx-first-li{
			display: block !important;
		} */
  .mx-menu .db {
    display: none;
  }
  .mx-first-menu a {
    color: #333;
  }
  .mx-first-menu a {
    color: #333;
  }
  .mx-first-menu-link {
    display: block;
    line-height: 80px;
    width: 400px;
    padding: 0 40px;
    margin: 0;
  }
  .mx-first-menu-li {
    display: block !important;
  }
  .mx-first-menu-li label {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /* 选中的样式 */
  .mx-first-menu .now .mx-first-menu-link {
    font-weight: bold;
    background: #fafafa;
    border-bottom: none;
    border-right: 6px solid #000;
  }
  .mx-first-menu .now .mx-first-menu-link {
    /* 颜色 */
    color: #c01 !important;
    border-color: #c01;
  }
  /* 右侧盒子 */
  .mx-user-box {
    background-repeat: repeat-x;
    background-size: auto 100px;
    position: relative;
  }

  /* 右侧搜索按钮 */
  .mx-search-button {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 40px;
    height: 100px;
    line-height: 100px;
  }
  .mx-search-button a {
    height: 100px;
    line-height: 100px;
  }
  .mx-search-button a i {
    font-size: 48px !important;
  }
}

/* 960-1240 */
@media only screen and (min-width: 960px) and (max-width: 1239px) {
  .layout-header {
    width: 960px;
    margin: 0 auto;
  }

  .mx-header-box {
    width: 960px;
  }

  .mx-first-menu {
    max-width: 650px;
  }
}

/* 大于1240尺寸 */
@media only screen and (min-width: 1240px) {
  .layout-header {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
