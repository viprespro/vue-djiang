<template>
	<div id="main-content">
		<!-- 加 -->
		<Header></Header>
		<div class="more-info-content">
			<!-- 面包屑区域 ，移动端消失 -->
			<div class="phone-none">
				<div class="layout-wrapper">
					<div class="layout">
						<div class="c1-wrapper">
							<div class="c1">
								<breadCrumbNav></breadCrumbNav>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!--新闻列表 +热门关键字 -->
			<div class="layout-wrapper">
				<div class="layout r-75-25 clearfix">
					<div class="c1-wrapper">
						<div class="c1">
							<listingNewsMore></listingNewsMore>
						</div>
					</div>
					<div class="c2-wrapper">
						<div class="c2">
							<hotKeywords></hotKeywords>
						</div>
					</div>
				</div>
			</div>
			<!-- 新闻列表盒子 -->
			<!-- <listingNewsMore></listingNewsMore> -->
			<!-- 面包屑导航盒子 -->
			<!-- <breadCrumbNav></breadCrumbNav> -->
			<!-- 热门关键词盒子 -->
			<!-- <hotKeywords></hotKeywords> -->
		</div>

		<!-- 加载更多 -->
		<Footer></Footer>
	</div>
</template>
<style scoped="scoped">
	.layout-wrapper {
		width: 100%;
		display: block;
		clear: both;
	}

	.layout {
		width: 1200px;
		margin: 0 auto;
	}

	.r-75-25 .c1 {
		float: left;
		width: 900px;
	}

	.r-75-25 .c2 {
		float: right;
		width: 300px;
	}

	@media only screen and (max-width:959px) {

		.r-75-25 .c1,
		.r-75-25 .c2,
		.r-75-25 .c3 {
			float: none !important;
			width: 100% !important;
			padding: 0 !important;
		}
	}

	/* 960 -1240尺寸 */
	@media only screen and (min-width:960px) and (max-width:1239px) {
		.layout {
			width: 960px;
			margin: 0 auto;
		}

		.r-75-25 .c1 {
			float: left;
			width: 720px;
		}

		.r-75-25 .c2 {
			float: right;
			width: 240px;
		}
	}
</style>
<script>
	import Header from '../../components/common/Header.vue'
	import breadCrumbNav from '../../components/common/breadCrumbNav.vue'
	import listingNewsMore from '../../components/common/listingNewsMore.vue'
	import hotKeywords from '../../components/common/hotKeywords.vue'
	import Footer from '../../components/common/Footer.vue'
	export default {
		data() {
			return {
				mainContentHeight:''
			}
		},
		mounted(){
			this.mainContentHeight=document.querySelector("#main-content").clientHeight;
			console.log(this.mainContentHeight);
			window.innerHeight=this.mainContentHeight;
		},
		methods: {

		},
		components: {
			Header,
			breadCrumbNav,
			listingNewsMore,
			hotKeywords,
			Footer
		}

	}
	
</script>
