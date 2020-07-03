<!--
 * @Date         : 2020-06-15 09:54:27
 * @LastEditors: Ares
 * @LastEditTime: 2020-07-03 15:29:26
 * @FilePath: \dangjian\src\App.vue
 * @Description  : 
--> 

<template>
  <div id="app">
    <keep-alive include="details-news,details-video,details-radio,details-essay">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import tokenInfo from "./api/token.js";
export default {
  created() {
    //在页面加载时读取sessionStorage/localStorage里的状态信息 vuex的刷新页面丢失问题处理
    if (localStorage.getItem("storedata")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("storedata"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("storedata", JSON.stringify(this.$store.state));
    });
    // 兼容iphone手机
    window.addEventListener("pagehide", () => {
      localStorage.setItem("storedata", JSON.stringify(this.$store.state));
    });
  },
  mounted() {
    window.addEventListener("unload", this.saveState);
  },
  methods: {
    saveState() {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state));
    }
  }
};
</script>
<style lang="stylus"></style>
