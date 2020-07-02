<template>
	<div>
		<!-- 该组件需要传值  
			- icon  图标路径
			-智慧新乡村  
			- 智慧新乡村助力农商
		-->
		<!-- 列标题信息区域 -->
		<div class="mx-column-title-wrapper">
			<div class="mx-column-title mx-m">
				<div class="mx-column-icon">
					<i class="iconfont icon-outdoors-tree-valley"></i>
				</div>
				<div class="mx-column-text">
					<h2>智慧新乡村</h2>
					<em>智慧新乡村助力农商</em>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
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
