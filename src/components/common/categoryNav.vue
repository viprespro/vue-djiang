<template>
	<div>
		<!-- 这是category导航区域 -->
		<div class="mx-column-list-wrapper">
			<div class="mx-column-list mx-m">
				<ul class="clearfix" >
					<!-- 一个li -->
					<li v-for="item in categoryList" :key="item.id">
						<router-link :to="{path: `/category/${category_id}`}">
							<i class="iconfont icon-shu"></i>
							<!-- <img :src="Ip+item.path" alt=""> -->
							<span>
								<strong>{{item.name}}</strong>
								<em>{{item.description}}</em>
							</span>
					</router-link>
					</li>
					
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			categoryList:{
				type:Array
			}
			// childMsg: {
			//         type: Array,
			//         default: [0,0,0] //这样可以指定默认的值
			//     }
		},
		data(){
			return{
				// Ip:"http://122.51.102.105:8081"
			}
		},
		created(){
			this.getData1()
		},
		methods:{
			getData1(){
				console.log(this.categoryList);
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.mx-m{
		margin: 0;
	}
	.mx-column-list {
		padding: 10px 0;
	}

	.mx-column-list ul {
		display: block;
		margin-left: -10px;
		margin-right: -10px;
	}

	.mx-column-list ul li {
		float: left;
		width: 25%;
		padding: 10px;
	}

	.mx-column-list ul li a {
		display: block;
		padding: 20px 10px;
		height: 100px;
		background: #d7322d;
		background-image: url(../../assets/img/column-bg.png);
		border: 1px solid #ff5842;
		position: relative;
	}

	.mx-column-list ul li a::after,
	.mx-column-list ul li a::before {
		content: '';
		width: 100%;
		height: 100%;
		border: 6px dashed transparent;
		display: block;
		padding: 5px;
		position: absolute;
		left: 0;
		top: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		z-index: 101;
	}

	.mx-column-list ul li a:after {
		border: 6px dashed #94101d;
	}

	.mx-column-list ul li a:before {
		border: 5px solid #c71715;
		z-index: 102;
	}

	.mx-column-list ul li a i {
		float: left;
		width: 58px;
		height: 58px;
		line-height: 58px;
		text-align: center;
		color: #fea;
		margin: 0 5px 0 0;
		font-size: 40px;
		border-radius: 100px;
		background: none;
	}

	.mx-column-list ul li a span {
		display: block;
	}

	.mx-column-list ul li a span strong {
		display: block;
		height: 32px;
		padding: 8px 0 0;
		color: #fff;
		font-size: 16px;
		line-height: 24px;
		overflow: hidden;
	}

	.mx-column-list ul li a span em {
		display: block;
		line-height: 18px;
		font-size: 12px;
		height: 18px;
		color: #fff;
		overflow: hidden;
		opacity: 0.8;
	}

	/* 低于960尺寸 */
	@media only screen and (max-width:959px) {
		$times:2;
		.mx-column-list-wrapper {
			width: 100vw;
		}
		/* 2倍 start */
		.mx-column-list {
			padding: 10px*$times 0;
		}
		
		.mx-column-list ul {
			margin: 0;
			padding:0 5px*$times;
			
		}
		
		.mx-column-list ul li {
			
			width: 50%;
			padding: 5px*$times;
		}
		
		.mx-column-list ul li a {
			display: block;
			padding: 20px*$times 10px*$times;
			height: 80px*$times;
			/* background: #d7322d;
			background-image: url(../../assets/img/column-bg.png); */
			border: 1px*$times solid #ff5842;
			/* position: relative; */
		}
		
		.mx-column-list ul li a::after,
		.mx-column-list ul li a::before {
			content: '';
			width: 100%;
			height: 100%;
			border: 6px*$times dashed transparent;
			display: block;
			padding: 5px*$times;
			position: absolute;
			left: 0;
			top: 0;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			z-index: 101;
		}
		
		.mx-column-list ul li a:after {
			border: 6px*$times dashed #94101d;
		}
		
		.mx-column-list ul li a:before {
			border: 5px*$times solid #c71715;
			z-index: 102;
		}
		
		.mx-column-list ul li a i {
			/* float: left; */
			width: 38px*$times;
			height: 38px*$times;
			line-height: 38px*$times;
			text-align: center;
			color: #fea;
			margin: 0 5px*$times 0 0;
			font-size: 24px*$times;
			border-radius: 100px*$times;
			/* background: none; */
		}
		
		.mx-column-list ul li a span {
			display: block;
			position: relative;
			top:-25%;
		}
		
		.mx-column-list ul li a span strong {
			display: block;
			height: 32px*$times;
			padding: 8px*$times 0 0;
			color: #fff;
			font-size: 14px*$times;
			line-height: 24px*$times;
			overflow: hidden;
		}
		
		.mx-column-list ul li a span em {
			display: block;
			line-height: 18px*$times;
			font-size: 12px*$times;
			height: 18px*$times;
			color: #fff;
			overflow: hidden;
			opacity: 0.8;
		}
		/* 2倍  end */
		
	}
</style>
