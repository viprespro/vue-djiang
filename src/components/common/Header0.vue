<template>
	<div id="header">
		<div class="dj-header-wrapper">
			<!--  -->
			<div class="dj-header-box  clearfix">
				<!-- 隐藏菜单区域开始 -->
				<!--checkbox 用于传值 ，来判断左侧菜单是否打开-->
				<input type="checkbox" id="menu-opener-id">
				<label for="menu-open-id" class="dj-menu-icon"></label>
				<div class="dj-barre-hamburger"></div>
				<!-- 隐藏菜单结束 -->
				<!-- 左边logo区域 -->
				<div class="dj-logo-box">
					<a href="/">
						<img src="../../assets/img/logo.png" alt="" class="dj-logo-img">
					</a>
				</div>
				<!--中间menu区域-->
				<div class="dj-menu-wrapper">
					<div class="dj-menu">
						<ul class="clearfix">
							<li class="fl now"><a href="" class="now f16">首页</a></li>
							<li class="fl"><a href="" class="f16">北臧大事记</a></li>
							<li class="fl"><a href="" class="f16">时政要闻</a></li>
							<li class="fl"><a href="" class="f16">党建课堂</a></li>
							<li class="fl"><a href="" class="f16">党建文库</a></li>
							<li class="fl"><a href="" class="f16">智慧新乡村 </a></li>
							<li class="fl"><a href="" class="f16">书记讲党课</a></li>
							<li class="fl"><a href="" class="f16">北臧新担当</a></li>
							<li class="fl"><a href="" class="f16">北臧新作为</a></li>
						</ul>
					</div>
				</div>
				<!-- 用户登录box -->
				<div class="dj-user-box-wrapper ">
					<div class="dj-user-box">
						<!-- 搜索按钮 -->
						<div class="dj-search-btn clearfix">
							<a href="/search">
								<i class="iconfont icon-sousuo"></i>
							</a>
						</div>
						<!-- 登录盒子 -->
						<div class="dj-login-box">
							<div class="dj-login-info clearfix">
								<a href="">
									<i class="iconfont icon-geren"></i>
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

<style lang="scss">
	//分辨率高的写上面 ，分辨率低的写下面 层级下面的会覆盖上面 
	//分辨率高于1240
	.dj-header-wrapper {
		width: 100%;
		height: 80px;


		background: url(../../assets/img/menu-bg.png) repeat-x;
		background-color: #8b1d19;
		background-size: auto 80px;
		// background-repeat:repeat-x;

		.dj-header-box {
			width: 1200px;
			height: 80px;
			margin: 0 auto;
			line-height: 80px;
			background: url(../../assets/img/menu-bg-1.png);
			background-size: auto 100%;
			background-position: center top;
			background-repeat: no-repeat;

			//隐藏菜单区域pc端隐藏
			//移动端隐藏菜单区域开始
			//隐藏input框
			#menu-opener-id {
				display: none;
			}

			.dj-menu-icon {
				display: none;
			}


			.dj-barre-hamburger {
				// display: none;



			}


			//移动端菜单区域结束


			//logo区域
			.dj-logo-box {
				float: left;

				a {
					display: block;
					color:#fea;
					.dj-logo-img {
						height: 50px;
					}

					img {
						vertical-align: middle;
						border-style: none;
					}
				}
			}

			//menu菜单域
			.dj-menu-wrapper {
				float: left;
				margin-left: 40px;
				height: 80px;

				// line-height: 80px;
				.dj-menu {
					//最大宽度800
					max-width: 800px;
					max-height: 80px;
					overflow: hidden;

					ul {
						li {

							// line-height: 80px;
							a {
								display: block;
								// height: 80px;
								// width: 100%;
								line-height: 35px;
								margin: 23px 9px 0 9px;
								color: #fea;

								&:hover {
									color: #fff;
								}
							}

							a.now {
								color: #fff;
								font-weight: bold;
								border-bottom: 3px #fff solid;
							}
						}
					}
				}

			}

			//用户盒子
			.dj-user-box-wrapper {
				float: right;

				// height: 80px;
				// width: 93px;
				// background-color: green;
				.dj-user-box {
					// float: left;
					// width: 70px;
					// width: 98px;
					// background-color: blue;

					.dj-search-btn {
						float: left;
						// width: 80px;
						height: 80px;
						margin-right: 15px;

						// background-color: yellow;
						a {
							// position: relative;
							// display: inline-block;
							// float: left;
							display: block;
							width: 30px;
							height: 80px;
							line-height: 80px;
							text-align: center;
							color:#fea;
							// font-size: 24px;
							i {
								font-size: 24px;
							}
						}
					}

					.dj-login-box {
						float: right;
						height: 80px;


						.dj-login-info {
							a {
								position: relative;
								// display: inline-block;
								// float: left;
								display: block;
								width: 48px;
								height: 80px;
								line-height: 80px;
								text-align: center;
								color:#fea;
								// font-size: 24px;
								i {
									font-size: 24px;
								}

								&:after {
									content: '\e733';
									height: 80px;
									font-family: 'iconfont';
									font-size: 20px;
									color: #ccc !important;
									line-height: 80px;

								}


							}
						}
					}
				}
			}

		}
	}

	// 分辨率960-1240
	@media only screen and (max-width:1240px) {
		.dj-header-wrapper {
			// width: 750px;
			height: 80px;


			background: url(../../assets/img/menu-bg.png) repeat-x;
			background-color: #8b1d19;
			background-size: auto 80px;
			// background-repeat:repeat-x;

			.dj-header-box {
				width: 960px;
				height: 80px;
				margin: 0 auto;
				line-height: 80px;
				background: url(../../assets/img/menu-bg-1.png);
				background-size: auto 100%;
				background-position: center top;
				background-repeat: no-repeat;

				//隐藏菜单区域pc端隐藏
				//移动端隐藏菜单区域开始
				//隐藏input框
				#menu-opener-id {
					display: none;
				}

				.dj-menu-icon {
					display: none;
				}


				.dj-barre-hamburger {
					// display: none;



				}


				//移动端菜单区域结束


				//logo区域
				.dj-logo-box {
					float: left;

					a {
						display: block;

						.dj-logo-img {
							height: 50px;
						}

						img {
							vertical-align: middle;
							border-style: none;
						}
					}
				}

				//menu菜单域
				.dj-menu-wrapper {
					float: left;
					margin-left: 40px;
					height: 80px;

					// line-height: 80px;
					.dj-menu {
						//最大宽度650
						max-width: 650px;
						max-height: 80px;
						overflow: hidden;

						ul {
							li {

								// line-height: 80px;
								a {
									display: block;
									// height: 80px;
									// width: 100%;
									line-height: 35px;
									margin: 23px 9px 0 9px;
									color: #fea;

									&:hover {
										color: #fff;
									}
								}

								a.now {
									color: #fff;
									font-weight: bold;
									border-bottom: 3px #fff solid;
								}
							}
						}
					}

				}

				//用户盒子
				.dj-user-box-wrapper {
					float: right;

					// height: 80px;
					// width: 93px;
					// background-color: green;
					.dj-user-box {
						// float: left;
						// width: 70px;
						// width: 98px;
						// background-color: blue;

						.dj-search-btn {
							float: left;
							// width: 80px;
							height: 80px;
							margin-right: 15px;

							// background-color: yellow;
							a {
								// position: relative;
								// display: inline-block;
								// float: left;
								display: block;
								width: 30px;
								height: 80px;
								line-height: 80px;
								text-align: center;
								color:#fea;
								// font-size: 24px;
								i {
									font-size: 24px;
								}
							}
						}

						.dj-login-box {
							float: right;
							height: 80px;


							.dj-login-info {
								a {
									position: relative;
									// display: inline-block;
									// float: left;
									display: block;
									width: 48px;
									height: 80px;
									line-height: 80px;
									text-align: center;
									color:#fea;
									// font-size: 24px;
									i {
										font-size: 24px;
									}

									&:after {
										content: '\e733';
										height: 80px;
										font-family: 'iconfont';
										font-size: 20px;
										color: #ccc !important;
										line-height: 80px;

									}


								}
							}
						}
					}
				}

			}
		}
	}

	//分辨率低于960 移动端 80的高全是100
	@media only screen and (max-width: 960px) {
		.dj-header-wrapper {
			width:100%;
			height: 100px;
			background: url(../../assets/img/menu-bg.png) repeat-x;
			background-color: #8b1d19;
			background-size: auto 100px;

			background-color: #a40112;

			.dj-header-box {
				//自适应布局
				// height: 100%;
				width: 100%;
				height: 100px;
				display: flex;
				// flex-direction: row;
				justify-content: center;
				align-items: center;

				background: url(../../assets/img/menu-bg-1.png);
				background-size: auto 100%;
				background-position: 50% 50%;
				background-repeat: no-repeat;



				// height: 50px !important;
				//移动端隐藏菜单区域开始
				.dj-menu-icon {
					position: absolute;
					top: 0px;
					left: 0px;
					z-index: 109;
					width: 90px;
					height: 100px;
					display: block;
					cursor: pointer;
					// background-color: #8b1d19;
					-webkit-transition: all 0.4s ease;
					transition: all 0.4s ease;
				}

				.dj-menu-icon:after,
				.dj-menu-icon:before,
				.dj-barre-hamburger {

					position: absolute;
					top: 32px;
					left: 24px;
					content: "";
					width: 46px;
					height: 4px;
					-webkit-transition: all 0.4s ease;
					transition: all 0.4s ease;
					z-index: 109;
					background: #08f;


				}

				.dj-menu-icon:after,
				.dj-menu-icon:before,
				.dj-barre-hamburger {
					background: #fea;
				}

				.dj-barre-hamburger {
					top: 48px;
				}

				.dj-menu-icon:before {
					top: 64px;
				}

				//移动端菜单区域结束
				// 隐藏1240的以上分辨率的菜单区域
				.dj-menu-wrapper {
					display: none;
				}

				//中间菜单区域移动到左边
				//左边logo区域移动到中间并居中,内容自适应
				// 图的大小是2倍
				//logo区域
				.dj-logo-box {
					// width:100%;
					flex: 1;
					// padding:0 80px;
					// position: absolute;
					// left:50%;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					align-items: center;

					// width: 215px !important;
					// background-color: red;
					a {

						.dj-logo-img {
							width: 202px;
							height: 80px !important;
							// padding:10px 0;
							// margin-top:10px;

						}

						img {
							vertical-align: middle;
							border-style: none;
						}
					}

				}

				//用户盒子区域
				.dj-user-box-wrapper {
					height: 100px;
					position: absolute;
					right: 0;
					top: 0;

					// height: 80px;
					// width: 93px;
					// background-color: green;
					.dj-user-box {
						// float: left;
						// width: 70px;
						// width: 98px;
						// background-color: blue;

						.dj-search-btn {
							float: left;

							height: 100px;
							margin-right: 30px;

							// background-color: yellow;
							a {

								display: block;
								// width: 30px;
								height: 100px;
								line-height: 100px;
								text-align: center;
								color:#fea;
								// font-size: 24px;
								i {
									font-size: 48px;
								}
							}
						}

						.dj-login-box {
							float: right;
							height: 100px;


							.dj-login-info {
								a {
									
									position: relative;
									// display: inline-block;
									// float: left;
									display: block;
									width: 96px;
									height: 100px;
									line-height: 100px;
									text-align: center;
									color:#fea;

									// font-size: 24px;
									i {
										font-size: 48px;
									}

									&:after {
										content: '\e733';
										height: 100px;
										font-family: 'iconfont';
										font-size: 40px;
										color: #ccc !important;
										line-height: 100px;

									}


								}
							}
						}
					}
				}
			}

		}
	}
</style>
