<template>
	<div>
		<!-- 这里是swiper容器区域 -->
		<div class="mx-sliding-wrapper">
			<div class="mx-sliding mx-m">
				<!-- 轮播图架子 -->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<!-- 一个  接入数据样板-->
						<!-- http://122.51.102.105:8081/file/20200623/1592769836370_1.jpg -->
						<!-- 跟随文本 -->
						
						<div class="swiper-slide" v-for="item in (lastestList || '').slice(0,4)" :key="item.id">
							<a href="" class="sliding-img-box">
								
								<img :src="ipAddress+item.imageUrl?ipAddress+item.imageUrl:''" alt="">
								
								<div class="mx-sliding-text ellipsis-s">
									<a href="" target="_blank">{{item.title}}</a>
								</div>

							</a>

						</div>
						
						
					
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>

					<!-- 如果需要导航按钮 -->
					<!-- <div class="swiper-button-prev"></div>
										<div class="swiper-button-next"></div> -->

					<!-- 如果需要滚动条 -->
					<!-- <div class="swiper-scrollbar"></div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			
			lastestList:{
				type:Array
			}
		},
		data(){
			return {
				ipAddress:''
			}
		},
		created(){
			this.ipAddress=this.$store.state.ipAddress;
		},
		mounted: function() {
			//获取swiper
			// this.getSwiper();
		
		},
		methods:{
			// getSwiper() {
			// 	new Swiper('.swiper-container', {
			// 		direction: 'horizontal',
			
			// 		//播放速度
			
			// 		loop: true,
			
			// 		// 自动播放时间
			
			// 		autoplay: true,
			
			// 		// 播放的速度
			
			// 		speed: 2000,
			
			// 		// 如果需要分页器
					// pagination: {
					// 	el: '.swiper-pagination',
					// },
			
			// 		// 如果需要前进后退按钮
			// 		// navigation: {
			// 		// 	nextEl: '.swiper-button-next',
			// 		// 	prevEl: '.swiper-button-prev',
			// 		// },
			
			// 		// 如果需要滚动条
			// 		// scrollbar: {
			// 		// 	el: '.swiper-scrollbar',
			// 		// },
			// 	})
			// }
		}
	}
</script>

<style scoped="scoped" lang="scss">
	/* 低于960尺寸 */
	@media only screen and (max-width:959px) {
		$times:2;
		.mx-m{
			margin: 0;
		}
		.mx-sliding-wrapper {
			width: 100vw;
		}
		/* 移动端2倍缩放 start*/
		.mx-sliding-text {
			display: block;
			padding: 0 10px*$times;
			line-height: 45px*$times;
			height: 45px*$times;
			font-size: 16px*$times;
			text-align: center;
			font-weight: bold;
		}
		.mx-sliding-text a{
			font-size:16px*$times;
		}
		/* 移动端2倍缩放 end*/
		/* 样式穿透 swiper小圆点 */

		.swiper-container-horizontal>.swiper-pagination-bullets,
		.swiper-pagination-custom,
		.swiper-pagination-fraction {

			bottom: 45px*$times;
		}

		.swiper-container-horizontal>>> .swiper-pagination-bullets .swiper-pagination-bullet {
			/* margin: 0 0.053333rem; */
			// width: 40px;
			// height: 40px;
		}
		.swiper-pagination {
			// height:50px;
			// background: red;
		}
		/deep/ .swiper-pagination-bullet{
			width:20px;
			height:20px;
		}
		/deep/ .swiper-pagination-bullet-active{
			// color:#fff;
		}

		
	}

	/* 960 -1240尺寸 */
	@media only screen and (min-width:960px) and (max-width:1239px) {

		/* 样式穿透 swiper小圆点 */
		.swiper-container-horizontal>.swiper-pagination-bullets,
		.swiper-pagination-custom,
		.swiper-pagination-fraction {
			bottom: 52px;
		}
	}

	/*1240尺寸以上 */
	@media only screen and (min-width:1240px) {

		/* 样式穿透 swiper小圆点 */
		.swiper-container-horizontal>.swiper-pagination-bullets,
		.swiper-pagination-custom,
		.swiper-pagination-fraction {
			bottom: 52px;
		}
	}
</style>
