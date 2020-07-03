<!--
 * @Date         : 2020-06-23 15:13:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-03 07:57:06
 * @FilePath     : \dangjianxiangmupcyidongduan\src\components\common\hotTitlePicNews.vue
 * @Description  : 
--> 
<template>
  <div>
    <!-- 这里是带item-title 的热点新闻区域 -->
    <div class="mx-thumbnails-wrapper">
      <div class="mx-thumbnails mx-thumbnails-cos1 mx-m">
        <!-- 共用标题区域 -->
        <div class="mx-item-title">
          <strong>热点 Hot</strong>
          <span class="mx-item-more">
            <a href>
              查看更多
              <i class="iconfont icon-jiantouyou"></i>
            </a>
          </span>
        </div>
        <!-- 图文混排上下 -->
        <ul>
          <!-- 一个li -->
          <li v-for="item in (hotList || '').slice(0,3)" :key="item.id">
            <div class="mx-thumbnails-box">
              <a href="javascript:;" @click="goDetails(item)">
                <img :src="ipAddress+item.imageUrl?ipAddress+item.imageUrl:''" alt />
                <span>{{item.title}}</span>
              </a>
            </div>
          </li>
          <!-- 一个li -->
          <!-- <li>
						<div class="mx-thumbnails-box">
							<a href="">
								<img src="../../assets/img/new-r-1.jpg" alt="">
								<span> 北京大学文化产业研究院一行到北臧村镇就产业发展进行调研 </span>
							</a>
						</div>
          </li>-->
          <!-- 一个li -->
          <!-- <li>
						<div class="mx-thumbnails-box">
							<a href="">
								<img src="../../assets/img/new-r-1.jpg" alt="">
								<span> 北京大学文化产业研究院一行到北臧村镇就产业发展进行调研 </span>
							</a>
						</div>
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotList: {
      type: Array
    }
  },
  data() {
    return {
      ipAddress: ""
    };
  },
  created(){
	  this.ipAddress=this.$store.state.ipAddress;
  },
  methods: {
    //传递item, 获取item项中必要的参数
    goDetails(item) {
      console.log(item.id);
      // 判断type类型
      if (item.type == 0) {
        //普通文章页
        this.$router.push({
          name: "details-news",
          params: {
            access_token: this.$store.state.Authorization,
            category_id: item.categoryId,
            id: item.id,
            type: item.type
          }
        });
      }
      if (item.type == 1) {
        // 音频详情页
        this.$router.push({
          name: "details-radio",
          params: {
            access_token: this.$store.state.Authorization,
            category_id: item.categoryId,
            id: item.id,
            type: item.type
          }
        });
      }
      if (item.type == 2) {
        //视频详情页
        this.$router.push({
          name: "details-video",
          params: {
            access_token: this.$store.state.Authorization,
            category_id: item.categoryId,
            id: item.id,
            type: item.type
          }
        });
      }
    }
  }
};
</script>

<style scoped="scoped">
@media only screen and (max-width: 959px) {
  .mx-thumbnails-wrapper {
    /* 移动端默认百分百宽 */
    width: 100vw;
  }
}
</style>
