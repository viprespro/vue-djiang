<template>
	<div id="details-essay">
		<!-- Header组件 -->
		<Header></Header>
		<!-- 主要内容 -->
		<div class="details-essay-content">
			<!-- 三级标题区域 start  -->
			<div class="layout-wrapper mx-book-bread">
				<div class="layout">
					<div class="c1-wrapper">
						<div class="c1">
							<div class="mx-bread-crumb-wrapper">
								<div class="mx-bread-crumb mx-m touch">
									<a href="/" class="router-link-active">
										北臧村镇党建有声
									</a>
									<em class="divider"> / </em>
									<span>
										<a href="">党建文库</a>
										<em class="divider"> / </em>
									</span>
									<span class="last-title">
										以“新基建”助推经济高质量发展
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 三级标题区域 end -->
			<!-- 文章详情内容区域 start -->
			<div class="layout-wrapper mx-book">
				<div class="layout">
					<div class="c1-wrapper">
						<div class="c1">
							<div class="mx-story-book-wrapper">
								<div class="mx-story-book">
									<!-- 内容区域 -->
									<div class="mx-story-book-content clearfix">
										<div class="mx-story-book-page">
											<!-- 标题 -->
											<h1>以“新基建”助推经济高质量发展</h1>
											<!-- 时间 -->
											<p class="mx-story-time">
												<span class="mr-10">
													2020年06月16日 10:58
												</span>
												党建网提供
											</p>
											<!-- 内容输出块 -->
											<div>
												<!-- 空p隔开 -->
												<p></p>
												<!-- 如果是图片 ，那么就居中对齐 -->
												<p class="essay-img">
													<img src="../../assets/img/essay-img.jpg" alt="">
												</p>
												<!-- 如果是文字， 那么就两端对齐-->
												<p class="essay-text">
													　　前不久，中共中央政治局常务委员会召开会议强调，要加大公共卫生服务、应急物资保障领域投入，加快5G网络、数据中心等新型基础设施建设进度。今年的《政府工作报告》再次对加强新型基础设施建设作出重要部署。这些重要要求，是应对经济下行压力的客观需要，更是党中央在深刻洞察和把握世界科技与产业变迁大趋势基础上作出的战略抉择。我们要充分认识“新基建”的重要意义，把握“新基建”涉足的重点领域，关注推进“新基建”中的关键问题，助推我国经济高质量发展。
												</p>
												<!-- 如果是文字， 那么就两端对齐-->
												<p class="essay-text">
													<!-- 有小标题 则添加小标题 -->
													<span class="sub-title">“新基建”是助推高质量发展的新动能</span>
												</p>
												<!-- 如果是文字， 那么就两端对齐-->
												<p class="essay-text">
													　　眼下，加快推进新型基础设施建设、激发新动力正当其时。面对重要发展机遇，为避免“新基建”成为“一窝蜂”“一阵风”，造成重复建设、产能过剩，需要在推进过程中把握几个关键点。
												</p>
												<!-- 如果是有作者  左对齐 -->
												<p class="essay-text">
													<span class="essay-author">作者&nbsp;</span>
													<span class="essay-author">：李向群</span>
													<span class="essay-author"> </span>
													<span class="essay-author">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单位：(中国社会科学院工业经济研究所)</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 文章详情内容区域 end -->
		</div>
		<!-- Footer组件 -->
		<Footer></Footer>
	</div>
</template>

<script>
	//导入Header头文件
	import Header from '../../components/common/Header.vue'
	//导入Footer脚文件
	import Footer from '../../components/common/Footer.vue'
	
	export default {
		mounted() {
			
			
	
		},
		methods: {
			
		},
		components: {
			Header,
			Footer
		}
	}
</script>

<style scoped="scoped">
	.mr-10 {
		margin-right: 10px;
	}

	.layout-wrapper {
		width: 100%;
		display: block;
		clear: both;
	}

	/* 第一档  移动端  大小翻倍*/
	@media only screen and (max-width:959px) {

		.c1,
		.c2,
		.c3 {
			float: none !important;
			width: 100% !important;
			padding: 0 !important;
		}
		.mr-10{
			margin-right: 20px;
		}
		.mx-m{
			margin: 10px 0 0;
		}
		.touch {
			white-space: nowrap;
			overflow-x: scroll;
			overflow-y: hidden;
		}

		.layout {
			width: 100%;
		}

		.mx-book-bread {
			display: none !important;
		}

		.mx-bread-crumb {
			padding: 0 160px 0 20px;
		}
		/* story-book-文库文章详情 样式 */
		.mx-book {
			position: relative;
		}
		
		.mx-book:after {
			content: '';
			display: block;
			background-color: #e9d2b0;
			background-image: linear-gradient(#90683c 60px, #e2c594 400px, #e9d2b0 1600px);
			height: 100%;
			width: 100%;
			left: 0;
			top: -120px;
			padding: 0 0 160px 0;
			position: absolute;
			z-index: -5;
			box-sizing: content-box;
		}
		
		.mx-story-book {
			display: block;
			position: relative;
			padding: 0 0 40px;
		}
		
		.mx-story-book-content {
			display: block;
			margin-top: -40px;
		}
		
		.mx-story-book-page {
			margin-top: 0px;
			display: block;
			background-color: #fffdf8;
			background-image: linear-gradient(#f3ecdc 0px, #fffdf8 200px);
			color: #5d2e00;
			padding: 60px 60px 40px;
			font-size: 32px;
			border: 2px #e2c594 solid;
			position: relative;
			min-height: 100vh;
		}
		.mx-story-book-page h1{
			color:rgba(0,0,0,.85);
			font-size: 48px;
			font-weight:bold;
			line-height:1.5;
			text-align:center;
			
		}
		.mx-story-time {
			color:#aaa;
			font-size:28px;
		}
		.mx-story-time span{
			color:#aaa;
		}
		.mx-story-book-page p{
			display: block;
			margin:40px 0 0 !important;
			font-size:32px;
			line-height: 2;
			/* color: #5d2e00; */
		}
		.mx-story-book-page p.essay-img{
			text-align: center;
		}
		.mx-story-book-page p span.sub-title{
			font-weight: bold;
			color: #5d2e00;
		}
		.mx-story-book-page img{
			max-width:100%;
			margin:0 auto;
			display: block;
		}
		/* 文字 两段剧中 */
		.mx-story-book-page p.essay-text{
			text-align: justify;
		}
		.mx-story-book-page p span.essay-author{
			text-align: left;
			color: #5d2e00;
		}
		.mx-story-book-page:after,
		.mx-story-book-page:before {
			content: '';
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
			left: 10px;
			top: 10px;
			background: #fffdf8;
			border: 2px #e2c594 solid;
			z-index: -3;
		}
		.mx-story-book-page:before{
			left:18px;
			top:18px;
		}
	}

	/* 第二档 ipad端 */
	@media only screen and (min-width:960px) and (max-width:1239px) {
		.layout {
			width: 960px;
			margin: 0 auto;
		}
	}

	@media only screen and (min-width:1240px) {
		.layout {
			width: 1200px;
			margin: 0 auto;
		}
	}
</style>
