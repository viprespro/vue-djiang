<template>
	<div>
		<!-- 这里是带图片的sheet新闻列表 -->
		<div class="mx-sheet-wrapper">
			<div class="mx-sheet mx-m">
				<ul class="clearfix">
					<!-- 第一个显示图片 -->
					<li class="mx-sheet-first-title clearfix" v-for="item in (lastestList || '').slice(0,1)" :key="item.id">
						<a href="">
							<!-- <img src="../../assets/img/b1.jpg" alt=""> -->
							<img :src="item.imageUrl?ipAddress+item.imageUrl:''" alt="">
							{{item.title}}
						</a>
						<em>{{item.createTime}}</em>
					</li>
					<!-- 其他一个 -->
					<li class="clearfix" v-for="item in (lastestList || '').slice(1,5)" :key="item.id">
						<a href="">
							{{item.title}}
						</a>
						<em>{{item.createTime}}</em>
					</li>
					
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		props:{
			lastestList:{
				type:Array
			},
			ipAddress:{
				type:String
			}
		},
		data(){
			return{}
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	@media only screen and (max-width:959px){
		$times:2;
		.mx-sheet-wrapper{
			width: 100vw;
		}
		/* 2倍  start */
		.mx-sheet ul {
			
			padding: 10px*$times 15px * $times;
			
		}
		
		.mx-sheet ul li {
			
			padding: 5px * $times 0;
			position: relative;
			
			font-size: 16px * $times;
		
		
		
		}
		
		.mx-sheet ul li a {
			/* float: left; */
			width: calc(100% - 130px);
			width: -moz-calc(100% - 130px);
			width: -webkit-calc(100% - 130px);
			height: 22px*$times;
			line-height: 22px*$times;
			font-size: 14px*$times;
			/* //省略号 */
			/* overflow: hidden; */
			/* text-overflow: ellipsis; */
			/* white-space: nowrap; */
		
		}
		
		.mx-sheet ul li em {
			float: right;
			/* display: inline-block; */
			width: 60px*$times;
			/* text-align: right; */
			font-size: 12px*$times;
			/* color: #aaa; */
			/* position: absolute; */
			right: 0;
			top: 50%;
			margin-top: -8px*$times;
		}
		
		.mx-sheet ul li a img {
			display: none;
		}
		.mx-sheet-first{
			padding:5px*$times 0 10px*$times !important;
			font-weight: bold;
		}
		.mx-sheet-first a{
			width: 100% !important;
			font-size: 14px*$times;
		}
		.mx-sheet-first em {
			display: none !important;
		}
		
		/* // 第一个加重新闻标题 图文上下混排 */
		.mx-sheet-first-title a {
			/* height: auto !important; */
			/* width: 100% !important; */
			font-size: 14px*$times;
			/* font-weight: bold; */
			border-bottom: 1px*$times #eee solid;
			padding-bottom: 15px*$times;
			/* position: relative; */
		}
		
		.mx-sheet-first-title a img {
			/* display: block !important;
			width: 100%;
			height: auto !important; */
			margin-bottom: 15px*$times !important;
		
		}
		
		.mx-sheet-first-title em {
			/* //隐藏 */
			/* display: none !important; */
		}
		/* 2倍  end */
	}
</style>
