<template>
	<div id="PartyLecture">
		<!-- 头开始 -->
		<Header></Header>
		<!-- 头结束 -->
		<!-- PartyLecture内容start -->
		<div class="PartyLecture-content" >
			<!-- 小导航区域 start -->
			<div class="layout-s-nav-wrapper">
				<div class="layout-s-nav">
					<div class="c1-wrapper">
						<div class="c1">
							<div class="mx-bread-crumb mx-m touch">
								<a href="">北臧村镇党建有声</a>
								<em class="divider">/</em>
								<span>党建课堂</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- `小导航区域 end -->
			<!-- 导航标题区域 start -->
			<div class="layout-n-t-wrapper">
				<div class="layout-n-t">
					<div class="c1-wrapper">
						<div class="c1">
							<div class="mx-column-title-wrapper">
								<div class="mx-column-title mx-m">
									<div class="mx-column-icon">
										<i class="iconfont icon-ziyuan"></i>
									</div>
									<div class="mx-column-text">
										<h2>书记讲党课</h2>
										<em>书记讲党课</em>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 导航标题区域 end -->
			<!-- 中型导航区域 start -->
			<div class="layout-m-nav-wrapper">
				<div class="layout-m-nav">
					<div class="c1-wrapper">
						<div class="c1">
							<div class="mx-column-class-wrapper">
								<div class="mx-column-class mx-m touch">
									<a href="" target="_blank">
										北臧大事记
									</a>
									<a href="" target="_blank">
										时政要闻
									</a>
									<a href="" target="_blank" >
										党建课堂
									</a>
									<a href="" target="_blank">
										智慧新乡村
									</a>
									<a href="" target="_blank" class="now">
										书记讲党课
									</a>
									<a href="" target="_blank">
										北臧新担当
									</a>
									<a href="" target="_blank">
										北臧新作为
									</a>
									
									
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 中型导航区域 end -->
			<!-- 党课栏目 书籍区域(注意音频视频) start -->
			<div class="layout-vb-ab-wrapper">
				<div class="layout-vb-ab">
					<div class="c1-wrapper">
						<div class="c1">
							
						</div>
					</div>
				</div>
			</div>
			<!-- 党课栏目 书籍区域(注意音频视频) end -->
			
			
			
		</div>
		<!-- course内容end-->
		
		<!-- 尾部end -->
		<Footer></Footer>
		<!-- 尾部end -->
	</div>
</template>
<style lang="scss" scoped>
	
</style>
<!-- 引入该页面媒体查询 -->
<style scoped src="../../assets/css/media-query/partylecture.css"></style>
<script>
	//导入Header头文件
	import Header from '../../components/common/Header.vue'
	//导入Footer脚文件
	import Footer from '../../components/common/Footer.vue'
	//导入jquery
	import $ from 'jquery'
	//导入swiper
	import Swiper from 'swiper'

	export default {
		data() {
			return {
				//获取页面窗口的宽度
				fullWidth: document.documentElement.clientWidth
				// el-layout12:'',
			}

		},
		//生命周期
		created: function() {
			//调用轮播方法
			//this._initSwiper();
			//窗口调整函数 并实现轮播图片居中
			window.addEventListener('resize', this.handleResize);
		},
		beforeDestroy: function() {
			window.removeEventListener('resize', this.handleResize)
		},
		mounted: function() {
			//获取
			// this.el-layout12=document.querySelector('.layout-12-wrapper');
			// console.log(el-layout12);

			new Swiper('.swiper-container', {
				direction: 'horizontal',

				//播放速度

				loop: true,

				// 自动播放时间

				autoplay: true,

				// 播放的速度

				speed: 2000,

				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},

				// 如果需要前进后退按钮
				// navigation: {
				// 	nextEl: '.swiper-button-next',
				// 	prevEl: '.swiper-button-prev',
				// },

				// 如果需要滚动条
				// scrollbar: {
				// 	el: '.swiper-scrollbar',
				// },
			})
		},
		methods: {
			test() {
				$('.test').html(1222);
			},
			// 获取当前页面的尺寸。
			handleResize(event) {
				this.fullWidth = document.documentElement.clientWidth
				console.log(this.fullWidth)
				// document.querySelector('.layout-12-wrapper').style.width=this.fullWidth;
				//修改所有swiper-slide的尺寸
				document.querySelectorAll('.swiper-slide').style.width = this.fullWidth;
			},


		},
		components: {
			Header,
			Footer
		}
	}
</script>
