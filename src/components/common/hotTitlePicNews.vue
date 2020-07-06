
  
<!--
 * @Date         : 2020-06-23 15:13:41
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-07-06 15:09:45
 * @FilePath     : \dangjian\src\components\common\hotTitlePicNews.vue
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
            <a href="javascript:;" @click="goArticleList(hotList,activeMenuId,false,true)">
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
          <!-- <div class="hotblock mt">
          
          </div>-->
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
    },
    activeMenuId:{
      
    }
  },
  data() {
    return {
      ipAddress: ""
    };
  },
  created() {
    this.ipAddress = this.$store.state.ipAddress;
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
          query: { categoryId: item.categoryId, id: item.id, type: item.type }
        });
        // this.saveDetailParams();
      }
      if (item.type == 1) {
        // 音频详情页
        this.$router.push({
          path: "/details-radio",
          query: { categoryId: item.categoryId, id: item.id, type: item.type }
        });
        // this.saveDetailParams();
      }
      if (item.type == 2) {
        //视频详情页
        this.$router.push({
          path: "details-video",
          query: { categoryId: item.categoryId, id: item.id, type: item.type }
        });
        // this.saveDetailParams();
      }
    },
    //跳到文章列表展示页 isMore 默认是查看更多跳转过去的
    goArticleList(totalData, activeMenuId, isTopic = false, isMore = true) {
      //拿到当前模块下的所有数据
      console.log(totalData);
      totalData = JSON.stringify(totalData);
      //跳转到对应的文章详情主页  组件为listingNewsMore.attr-value
      this.$router.push({
        path: "/articleList",
        query: {
          totalData: totalData,
          activeMenuId: activeMenuId,
          isTopic: isTopic,
          isMore: isMore
        }
      });
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

