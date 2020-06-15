<template>
	<div id="footer">
		<!-- footer外墙纸 -->
		<div class="footer-wrapper">
			<!-- footer居中块 -->
			<div class="footer-content">
				<!-- 版权内容 -->
				<div class="footer-copyright">
					<div class="footer-copyright-world">
						<img src="../../assets/img/logo.png" class="logo-img" alt="">
						<span class=""> 2020 ©<a href=""> bzcz.zhizhongdj.com</a> </span>
						<span class="android">下载安卓版</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	//尾部分为两种尺寸 一种高于960px pc端   一种低于960px 移动端
	//高于960
	@media only screen and (min-width:961px) {
		.footer-wrapper {
			width: 100%;
			height: 63px;
			background: #7c1618;
		
			.footer-content {
				width:1180px;
				height: 63px;
				margin: 0 auto;
		
				.footer-copyright {
					margin: 20px auto;
					color: #d5a97c;
					line-height: 63px;
					text-align: center;
		
					.footer-copyright-world {
		
						.logo-img {
							display: inline-block;
							width: 50.5px;
							height: 25px;
						}
		
						span {
							font-size: 14px;
							line-height: 14px;
							color: #d5a97c;
		
							a {
								color: #d5a97c;
								// color:rgba(251, 232, 166,0.7);
							}
		
							a:hover {
								color: #fea;
							}
						}
		
						span.copy {
							font-size: 20px;
							line-height: 20px;
							text-align: center;
							position: relative;
							top: 3px;
						}
		
						//安卓
						span.android:hover {
							cursor: pointer;
							color: #fea;
						}
					}
				}
			}
		}
	}
	

	//低于960
	@media only screen and (max-width:960px) {
		.footer-wrapper {
			width: 100%;
			background: #7c1618;
			// height: 133px;
			.footer-content {
				height: 100%;
				
				display: flex;
				align-items: center;
				justify-content: center;

				.footer-copyright {
					padding:40px;
					// margin:40px auto;
					.footer-copyright-world {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						.logo-img {
							display: block;
							width: 202px;
							height: 80px;
						}

						span {
							font-size: 28px;
							line-height: 28px;
							color: #fea;

						}
						span.copy{
							
						}

						//低尺寸隐藏下载安卓
						span.android {
							display: none;
						}
					}
				}
			}
		}
	}
</style>
<script>
</script>
