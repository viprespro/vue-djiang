<template>

	<div id="search">
		<Header></Header>
		<div class="search-content">
			<!-- 搜索区域 start -->
			<div class="layout-search-wrapper">
				<div class="layout-search">
					<div class="c1-wrapper">
						<div class="c1">
							<div class="mx-search-page bg mx-m">
								<div class="mx-search-page-box">
									<!-- 表单 -->
									<form action="">
										<input type="text" placeholder="请输入关键字" name="keyword" class="input">
										<button class="bt">搜索</button>
									</form>

								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<!-- 搜索区域end -->
			<!-- 选项卡 title区域 start  -->
			<div class="layout-tablist-wrapper">
				<div class="layout-tablist">
					<div class="c1-wrapper">
						<div class="c1 mx-m">
							<div class="mx-tab-list">
								<!-- 第一个没有图标 -->
								<a href="" class="router-link-active router-link-exact-active now">全部</a>
								<!-- 第二个 -->
								<a href="" class="router-link-active router-link-exact-active">
									<i class="iconfont icon-wenzhang"></i>
									文章
								</a>
								<!-- 第三个 -->
								<a href="" class="router-link-active router-link-exact-active">
									<i class="iconfont icon-shipin"></i>
									视频
								</a>
								<!-- 第四个 -->
								<a href="" class="router-link-active router-link-exact-active ">
									<i class="iconfont icon-yinpin"></i>
									音频
								</a>
								<!-- 第五个 -->
								<a href="" class="router-link-active router-link-exact-active">
									<i class="iconfont icon-lianjie"></i>
									链接
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 选项卡 title区域 end  -->
			<!-- 选项卡 content区域 start -->
			<div class="layout-tabcontent-wrapper">
				<div class="layout-tabcontent">
					<div class="c1-wrapper">
						<div class="c1">
							<ul class="mx-search-list bg">
								<!-- 一个li -->
								<li>
									<strong>
										<a href="" target="_blank">
											【文明创城】垃圾分类按下“加速键” 绘就美丽乡村新画卷
										</a>
									</strong>
									<span>
										<a href="">
											<img src="../../assets/img/search1.jpg" alt="">
										</a>
										<p>
											为改善镇域人居环境
											加快美丽乡村建设
											助力创建全国文明城区
											<!-- 北为关键字 -->
											<font color="#f00">北</font>
											臧村镇多方着手扎实推进垃圾分类工作
										</p>
									</span>
									<em>新闻 2020年05月23日 08:53</em>
								</li>
								<!-- 一个li -->
								<li>
									<strong>
										<a href="" target="_blank">
											【文明创城】垃圾分类按下“加速键” 绘就美丽乡村新画卷
										</a>
									</strong>
									<span>
										<a href="">
											<img src="../../assets/img/search1.jpg" alt="">
										</a>
										<p>
											为改善镇域人居环境
											加快美丽乡村建设
											助力创建全国文明城区
											<!-- 北为关键字 -->
											<font color="#f00">北</font>
											臧村镇多方着手扎实推进垃圾分类工作
										</p>
									</span>
									<em>新闻 2020年05月23日 08:53</em>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- 选项卡 content区域 end -->
		</div>

		<Footer></Footer>
	</div>

</template>
<style scoped="scoped">
	.mx-m {
		margin: 20px 0 0;
	}

	.bg {
		background-color: #fff;
		box-shadow: 0 2px 6px rgba(76, 86, 114, .12);
	}

	.c1,
	.c2,
	.c3 {
		display: block;
		padding: 1px 10px;
	}

	.layout-search-wrapper,.layout-tablist-wrapper,.layout-tabcontent-wrapper {
		display: block;
		width: 100%;
		clear: both;
	}

	.mx-search-page {
		padding: 50px;
	}

	.mx-search-page-box {
		display: block;
		margin: 0 200px;
		/* 给按钮提供定位点 */
		position: relative;
	}

	/* 美化input */
	.mx-search-page input {
		display: inline-block;
		width: 100%;
		padding: 0 90px 0 10px;
		margin: 0;
		font-size: 16px;
		border: 1px solid #ddd;
		border-right: none;
		height: 45px;
		line-height: 43px;

		border-radius: 5px 0 0 5px !important;
		background-color: #fff;
	}

	/* 美化按钮 */
	.mx-search-page .bt {
		position: absolute;
		right: 0;
		display: inline-block;
		height: 45px;
		padding: 0 25px;
		margin: 0 !important;
		font-size: 14px;
		color: #fff;
		text-align: center;
		border: 1px solid #ddd;
		background-color: #c01;
		border-color: #c01;
		line-height: 43px;
		;
		cursor: pointer;

	}

	.mx-search-page .bt:hover {
		background-color: #d00;
		border-color: #c01;
		color: #fff;
		filter: brightness(1.1);
	}

	/* 第二部分 tab-lsit*/
	.mx-tab-list {
		padding: 10px;
		background-color: #fff;
	}

	.mx-tab-list a {
		display: inline-block;
		line-height: 30px;
		margin: 0 10px;
	}

	.mx-tab-list .now {
		background: transparent !important;
		border-bottom: 3px #c01 solid;
		color: #c01;
		border-radius: 0 !important;
		padding: 0;

	}
	/* tab内容区域 */
	.mx-search-list{
		display: block;
	}
	.mx-search-list li{
		display: block;
		padding:30px;
		border-bottom:1px solid #eee;
		/* 最小宽度 */
		min-height:158px;
	}
	.mx-search-list li strong{
		display:block;
		font-size:18px;
		line-height:1.5;
		padding:0 0 15px;
		font-weight: bold;
	}
	.mx-search-list li strong a{
		font-size: 18px !important;
	}
	.mx-search-list li span{
		display: block;
		font-size: 14px!important;
	}
	.mx-search-list li img{
		float:left;
		width:140px;
		margin-right:20px;
	}
	.mx-search-list li p{
		max-height:60px;
		overflow: hidden;
	}
	.mx-search-list li em{
		display: block;
		margin-top:10px;
		color:#aaa;
		font-size: 14px!important;
	}
	/*  */
	
	/* 1240下通用尺寸 */
	.layout-search,.layout-tablist,.layout-tabcontent {
		width: 1200px;
		margin: 0 auto;
		/* background:red; */
	}
</style>
<script>
	//导入header头文件
	import Header from '../../components/common/Header.vue'
	//导入footer脚文件
	import Footer from '../../components/common/Footer.vue'
	export default {
		data() {

		},
		components: {
			Header,
			Footer
		}
	}
</script>
