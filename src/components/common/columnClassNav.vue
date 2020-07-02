<template>
	<div>
		<!-- 这里是二级导航区域 -->
		<div class="mx-column-class-wrapper">
			<div class="mx-column-class mx-m touch">
				<a href="" class="now">
					<strong>智慧新乡村</strong>
				</a>
				<em> | </em>
				<router-link to="">北臧党校</router-link>
				<router-link to="">巴园子</router-link>
				<router-link to="">西大营</router-link>
				<router-link to="">马村</router-link>
				<router-link to="">北臧党校</router-link>
				<router-link to="">巴园子</router-link>
				<router-link to="">西大营</router-link>
				<router-link to="">马村</router-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	@media only screen and (max-width:959px){
		.mx-column-class-wrapper{
			/* 移动端默认百分百宽 */
			width: 100vw;
		}
		/* 去掉移动端滑动条 */
		.touch::-webkit-scrollbar{
			display: none;
		}
		/*  */
	}
</style>
