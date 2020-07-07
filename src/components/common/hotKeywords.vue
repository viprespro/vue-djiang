<!--
 * @Author: your name
 * @Date: 2020-06-22 22:41:12
 * @LastEditTime: 2020-07-07 00:54:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dangjianxiangmupcyidongduan\src\components\common\hotKeywords.vue
--> 


<template>
  <!-- hotKeywords 共用组件 -->
  <div class="mx-tag-wrapper" style>
    <div class="mx-tag mx-m">
      <div class="mx-item-title">
        <strong>热点关键字</strong>
      </div>
      <div class="mx-tag-box">
        <!-- <a href=""></a> -->
        <!-- <a href="">{{item[item.id]}}</a> -->
        <!-- <router-link to="/" v-for="(item,i) in keywordList" :key="i">{{item}}</router-link> -->
        <!-- {{keywordList}} -->
				<a href="javascript:;" @click="getParamsToList(item,categoryId,1,keywordList)" v-for="(item,i) in keywordList" :key="i">{{item}}</a>
      </div>
    </div>
  </div>
</template>

<script>
// keywordList
export default {
  props: {
    keywordList: {
      type: Array
		},
		categoryId:{
			
		},
	
	},
	data(){
		return {}
	},
	created(){

	},
  mounted() {
    console.log(this.keywordList);
  },
  watch:{
    $route:function(){
      
    }
  },
	methods:{
		//携带keyword 到articleList组件中去 isKeyWords标志面包屑
		getParamsToList(item,categoryId,isKeywords=0,keywordList){
			console.log(item,categoryId);
			//跳到articleList组件中去
			this.$router.push({
				path:"/articleList",
				query:{keywords:item,categoryId:categoryId,isKeywords:isKeywords,keywordList:keywordList}
			})
		},
		//跳到文章列表展示页 isMore 默认是查看更多跳转过去的
    goArticleList(totalData,activeMenuId,isTopic=false,isMore = true) {
      //拿到当前模块下的所有数据
      console.log(totalData);
      totalData = JSON.stringify(totalData);
      //跳转到对应的文章详情主页  组件为listingNewsMore.attr-value
      this.$router.push({
        path: "/articleList",
        query: { totalData: totalData,activeMenuId:activeMenuId,isTopic:isTopic,isMore: isMore }
      });
    }
	}
};
</script>

<style scoped="scoped">
@media only screen and (max-width: 959px) {
  .mx-tag-wrapper {
    /* width: 100%; */
    width: 100vw;
  }
}
</style>
