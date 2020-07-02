<!--
 * @Date         : 2020-06-22 11:55:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-01 18:23:10
 * @FilePath     : \dangjianxiangmupcyidongduan\src\components\common\breadCrumbNav.vue
 * @Description  : 
--> 
<template>
  <div>
    <!-- 这是面板屑导航共用组件 -->
    <div class="mx-bread-crumb-wrapper">
      <div class="mx-bread-crumb mx-m touch">
        <router-link to="/">党建平台</router-link>
        <em class="divider">/</em>
        <router-link to='/'></router-link>
        <em class="divider">/</em>
        <!--  this.breadCrumbList={menuId: this.detailsInfo.categoryId,articleTitle: this.detailsInfo.title}; -->
        <!-- 是否存在三级标题 有就是文章标题  还要把文章标题存放在document.title max-page-title-->
        <!-- 文章title -->
        <span class="last-title">{{breadCrumbList.articleTitle?breadCrumbList.articleTitle:''}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topNav: {
      type: String
    },
    breadCrumbList:{
      type:Object
    }
  },
  data() {
    return {
      
    };
  },
  methods: {

  }
};
</script>

<style scoped="scoped">
@media only screen and (max-width: 959px) {
  .mx-bread-crumb-wrapper {
    width: 100vw;
  }
}
</style>
