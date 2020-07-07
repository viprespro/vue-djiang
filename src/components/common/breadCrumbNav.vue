<!--
 * @Date         : 2020-07-06 18:33:06
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-07-07 14:48:38
 * @FilePath     : \党建项目git同步目录\dangjianxiangmupcyidongduan\src\components\common\breadCrumbNav.vue
 * @Description  : 
--> 

<template>
  <div>
    <!-- 这是面板屑导航共用组件 -->
    <div class="mx-bread-crumb-wrapper">
      <div class="mx-bread-crumb mx-m touch">
        <router-link to="/">党建平台</router-link>
        <em class="divider">/</em>
        <!-- 查看更多页面显示样式 start -->
        <template v-if="isMore==1">
          <span>查看更多</span>
        </template>
      
        <template v-if="isTopic==1">
          <span>查看更多</span>
        </template>
        <template v-if="isKeywords==1">
          <span>关键字：{{keywords}}</span>
        </template>
         <!-- 查看更多页面显示样式 end -->
         <!-- 主菜单页面显示样式 start -->
        <template >
            <router-link :to="{path: `/category/${categoryId}`}">{{categoryName}}</router-link>

        </template>
        <!-- 主菜单页面显示样式 end -->

        <!--  this.breadCrumbList={menuId: this.detailsInfo.categoryId,articleTitle: this.detailsInfo.title}; -->
        <!-- 是否存在三级标题 有就是文章标题  还要把文章标题存放在document.title max-page-title-->
        <!-- breadCrumbList.articleTitle?breadCrumbList.articleTitle:'' -->
        <!-- 文章title -->
        <template v-if="breadCrumbList.articleTitle">
          <em class="divider">/</em>
          <span class="last-title">{{breadCrumbList.articleTitle}}</span>
        </template>
        <template v-else>  
          
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isTopic:{

    },
    isMore:{
      // default:false
    },
    categoryId:{

    },
    activeMenu: {},
    
    categoryList: {
      // type: Object
    },
    breadCrumbList: {
      // type:Object,
      default: ""
    },
    isKeywords: {},
    keywords:{}
  },
  data() {
    return {
      categoryName:''
    };
  },
  created(){
    let cid=this.categoryId;
    let clist=this.categoryList;
    this.categoryName=this.getCategoryName(cid,clist);
    
  },
  methods: {
    //遍历获取当前category 的名称
    getCategoryName(cid,clist){
      //console.log(clist);
      for(let i in clist){
       
        if(clist[i].id==cid){
          return clist[i].name;
        }
      }
    }
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
