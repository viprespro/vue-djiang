<template>
	<div id="main-content">
		<!-- header区域 -->
		<Header></Header>
		<!-- 智慧乡村主要内容区域-->
		<div class="smart-country-content">
			<!-- 面包屑区域 start，移动端消失 -->
			<div class="phone-none">
				<div class="layout-wrapper">
					<div class="layout">
						<div class="c1-wrapper">
							<div class="c1">
								<!-- 该组件需要传值  需要props-->
								<breadCrumbNav></breadCrumbNav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 面包屑区域 end，移动端消失 -->
			<!--列表标题区域 start-->
			<div class="layout-wrapper">
				<div class="layout">
					<div class="c1-wrapper">
						<div class="c1">
							<!-- 组件使用 -->
							<columnTitleInfo></columnTitleInfo>
						</div>
					</div>
				</div>
			</div>
			<!--列表标题区域 end-->
			<!-- 列表类区域  start -->
			<div class="layout-wrapper">
				<div class="layout">
					<div class="c1-wrapper">
						<div class="c1">
							<!-- 组件使用 -->
							<columnClassNav></columnClassNav>
						</div>
					</div>
				</div>
			</div>
			<!-- 列表类区域  end -->
			<!--乡村商品列表区域  start-->
			<div class="layout-wrapper">
				<div class="layout">
					<div class="c1-wrapper">
						<div class="c1">
							<!-- 组件使用 -->
							<columnCustomList></columnCustomList>
						</div>
					</div>
				</div>
			</div>	
			<!--乡村商品列表区域  end-->
			
		</div>
		<!-- footer区域 -->
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
	/* 960 -1240尺寸 */
	@media only screen and (min-width:960px) and (max-width:1239px) {
		.layout{
			width:960px;
		}
	}
</style>
<script>
	import Header from '../../components/common/Header.vue'
	import breadCrumbNav from '../../components/common/breadCrumbNav.vue'
	import columnTitleInfo from '../../components/common/columnTitleInfo.vue'
	import columnClassNav from '../../components/common/columnClassNav.vue'
	import columnCustomList from '../../components/common/columnCustomList.vue'
	import Footer from '../../components/common/Footer.vue'
	export default {
		data() {
			return {
				// mainContentHeight:''
			}
		},
		mounted(){
			// this.mainContentHeight=document.querySelector("#main-content").clientHeight;
			// console.log(this.mainContentHeight);
			// window.innerHeight=this.mainContentHeight;
		},
		methods: {
	
		},
		components: {
			Header,
			breadCrumbNav,
			columnTitleInfo,
			columnClassNav,
			columnCustomList,
			Footer
		}
	
	}
</script>


