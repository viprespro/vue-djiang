<!--
 * @Author: your name
 * @Date: 2020-06-28 07:58:08
 * @LastEditTime: 2020-07-06 23:45:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath     : \dangjian\src\components\common\topicSimple.vue
--> 

<template>
  <!--这里是右侧简单新闻推荐模块-->
  <div>
    <div class="mx-topic-wrapper">
      <div class="mx-topic mx-topic-simple mx-m">
        <!-- 标题可隐藏 v-for="" start-->
        <div>
          <div class="mx-item-title">
            <strong>推荐</strong>
            <span class="mx-item-more">
               <a href="javascript:;" @click="goArticleList(recommendList,activeMenuId,0,1)">
                查看更多
                <i class="iconfont icon-jiantouyou"></i>
              </a>
            </span>
          </div>
        </div>

        <!-- 新闻列表ul start -->
        <ul>
          <li v-for="item in recommendList" :key="item.id">
            <a href="javascript:;" @click="goDetails(item)" class="clearfix">
              <img :src="ipAddress+item.imageUrl?ipAddress+item.imageUrl:''" alt />
              <span>
                <strong>{{item.title}}</strong>
              </span>
            </a>
          </li>
        </ul>
        <!-- 新闻列表 ul  end-->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    recommendList: {
      type: Array
    }
  },
  data() {
    return {
      ipAddress: ""
    };
  },
  created() {
    console.log(this);
    // this.ipAddress=this.$store.state.ipAddress;
    // console.log(this.ipAddress)
  },
  mounted() {
    this.ipAddress = this.$store.state.ipAddress;
  },
  methods: {
    //跳到文章列表展示页 isMore 默认是查看更多跳转过去的
    goArticleList(totalData, activeMenuId, isTopic = 0, isMore = 1) {
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
    },
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
          path: "/details-video",
          query: { categoryId: item.categoryId, id: item.id, type: item.type }
        });
        // this.saveDetailParams();
      }
    }
  }
};
</script>
<style scoped="scoped" lang="scss">
@media only screen and (max-width: 959px) {
  $times: 2;
  .mx-topic-wrapper {
    width: 100vw;
  }
}
</style>