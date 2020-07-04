Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@hub021xxb 
Aspire01
/
dangjian
1
00
Code
Issues
Pull requests
1
Actions
Projects
Wiki
Security
Insights
dangjian/src/components/common/hotTitlePicNews.vue
@Aspire01
Aspire01 1
Latest commit 3ed71b3 11 hours ago
 History
 2 contributors
@Aspire01@hub021xxb
126 lines (124 sloc)  3.19 KB
  
<!--
 * @Date         : 2020-06-23 15:13:41
 * @LastEditors: Ares
 * @LastEditTime: 2020-07-03 17:34:22
 * @FilePath: \dangjian\src\components\common\hotTitlePicNews.vue
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
          <div class="hotblock mt">
          
          </div>
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
          path: "/details-news",
          query: { category_id: item.categoryId, id: item.id, type: item.type }
        });
        // this.saveDetailParams();
      }
      if (item.type == 1) {
        // 音频详情页
        this.$router.push({
          path: "/details-radio",
          query: { category_id: item.categoryId, id: item.id, type: item.type }
        });
        // this.saveDetailParams();
      }
      if (item.type == 2) {
        //视频详情页
        this.$router.push({
          path: "details-video",
          query: { category_id: item.categoryId, id: item.id, type: item.type }
        });
        // this.saveDetailParams();
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
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
