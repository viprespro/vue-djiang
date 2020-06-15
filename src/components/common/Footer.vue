<template>
	<div id="footer" class="mx-footer mx-m">
		<div class="layout-footer-wrapper">
			<div class="layout-footer">
				<div class="c1-wrapper">
					<div class="c1">
						<div class="footer-box">
							<div class="footer-copyright">
								<span class="footer-copyright-info">
									<img src="../../assets/img/logo.png" alt="">
									<span>
										2020 ©
										<a href="https://bzcz.zhizhongdj.com" class="footer-copyright-link">bzcz.zhizhongdj.com</a>
									</span>
								</span>
								<!-- 下载图标 -->
								<a href="" class="footer-copyright-link">
									<i class="iconfont icon-android"> 下载安卓版</i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	/* 内容块基本设置 */
	.c1,
	.c2,
	.c3 {
		padding: 0 10px;
		display: block;
	}

	.layout-footer-wrapper {
		width: 100%;
		display: block;
		clear: both;
	}

	.footer-box {
		display: block;
		text-align: center;
	}

	/* 注意这里 */
	.footer-box div:first-child {
		border: none;
	}

	.footer-copyright,
	.footer-copyright-link {
		color: rgba(251, 232, 166, 0.7);
	}

	.footer-copyright {
		display: block;
		padding: 20px 0;
		color: rgba(255, 255, 255, 0.5);
		border-top: 1px solid #333940;
	}

	.footer-copyright span {
		color: rgba(251, 232, 166, 0.7);
	}

	.footer-copyright img {
		/* logo图片居中 */
		display: inline-block;
		height: 20px;
		vertical-align: middle;
	}

	.footer-copyright-link i {
		font-size: 14px !important;
	}

	.footer-copyright-link:hover {
		color: #fea;
		filter: brightness(1.2);
	}

	/* 移动端 低于960尺寸 */
	@media only screen and (max-width:959px) {

		.c1,
		.c2,
		.c3 {
			float: none !important;
			width: 100% !important;
			padding: 0 !important;
		}

		.layout-footer {
			width: 100%;
		}
		.footer-copyright {
			display: block;
			padding: 40px 0;
			
		}
		
		.footer-copyright span{
			display: block;
			font-size: 28px !important;
		}
		.footer-copyright img{
			height: 80px;
			display: block;
			margin:0 auto;
			opacity: 1;
		}
		.footer-copyright-link{
			font-size: 28px !important;
		}
		.footer-copyright-link i{
			font-size: 28px !important;
		}
		.footer-copyright-info{
			margin:0 0 10px;
		}
	}

	/* 960-1240尺寸 */
	@media only screen and (min-width:960px) and (max-width:1239px) {
		.layout-footer {
			width: 960px;
			margin: 0 auto;
		}
	}

	/* 1240尺寸 */
	@media only screen and (min-width:1240px) {

		.layout-footer {
			width: 1200px;
			margin: 0 auto;
		}



	}
</style>
