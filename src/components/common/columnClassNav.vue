<!--
 * @Date         : 2020-07-02 12:03:02
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-07-02 16:30:44
 * @FilePath     : \dangjianxiangmupcyidongduan\src\components\common\columnClassNav.vue
 * @Description  : 
--> 
<template>
  <div>
    <!-- 这里是二级导航区域 -->
    <div class="mx-column-class-wrapper">
      <!--  -->
      <div class="mx-column-class mx-m touch" >
				<!-- {{categoryList}} -->
        <!-- <a href class="now">
          <strong>智慧新乡村</strong>
        </a> -->
        <router-link :to="{path: `/category/${item.id}`}" v-for="item in categoryList" :key="item.id" :class="activeMenu==item.id ? 'now' : ''">{{item.name}}</router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeMenu: {
      // type: String
      // default: ""
    },
    categoryList: {
      // type: Object
    }
	},
	created(){
		console.log(this.categoryList)
	}
};
</script>

<style scoped="scoped">
@media only screen and (max-width: 959px) {
  .mx-column-class-wrapper {
    /* 移动端默认百分百宽 */
    width: 100vw;
  }
  /* 去掉移动端滑动条 */
  .touch::-webkit-scrollbar {
    display: none;
  }
  /*  */
}
</style>
