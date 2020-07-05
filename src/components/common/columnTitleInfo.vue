<!--
 * @Date         : 2020-07-02 12:03:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-04 17:47:32
 * @FilePath     : \dangjianxiangmupcyidongduan\src\components\common\columnTitleInfo.vue
 * @Description  : 
--> 
<template>
	<div>
		<!-- 该组件需要传值  
			
		-->
		<!-- 列标题信息区域 -->
		<div class="mx-column-title-wrapper">
			<div class="mx-column-title mx-m" >
				<div class="mx-column-icon">
					<i class="iconfont icon-icon_medal"></i>
				</div>
				<div class="mx-column-text">
					<!-- {{categoryDetailList}} -->
					<h2>{{categoryDetailList.name}}</h2>
					<em>{{categoryDetailList.description}}</em>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			categoryDetailList:{
				
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	@media only screen and (max-width:959px){
		.mx-column-title-wrapper{
			/* 移动端默认百分百宽 */
			width: 100vw;
		}
		
	}
</style>
