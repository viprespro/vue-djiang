<!--
 * @Author: your name
 * @Date: 2020-06-22 22:41:12
 * @LastEditTime: 2020-07-03 15:08:24
 * @LastEditors: Ares
 * @Description: In User Settings Edit
 * @FilePath: \dangjian\src\components\common\hotKeywords.vue
--> 

<template>
	<!-- hotKeywords 共用组件 -->
	<div class="mx-tag-wrapper" style="">
		<div class="mx-tag mx-m">
			<div class="mx-item-title">
				<strong>热点关键字</strong>
			</div>
			<div class="mx-tag-box" >
				
				<!-- <a href=""></a> -->
				<!-- <a href="">{{item[item.id]}}</a> -->
				<router-link to="/" v-for="(item,i) in keywordList" :key="i">{{item}}</router-link>
				
				<!-- <router-link to="/"> 人大常委会</router-link>
				<router-link to="/">非遗传人</router-link>
				<router-link to="/"> 浙江省龙游县</router-link>
				<router-link to="/"> 海南省海口市</router-link>
				<router-link to="/"> 全国人大常委会会议</router-link>
				<router-link to="/">新基建</router-link> -->
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
   
  },
  mounted(){
	  console.log(this.keywordList)
  }
}

</script>

<style scoped="scoped">
	@media only screen and (max-width:959px){
		.mx-tag-wrapper{
			/* width: 100%; */
			width: 100vw;
		}
	}
	
</style>
