
<!--
 * @Author: your name
 * @Date: 2020-07-01 14:23:02
 * @LastEditTime: 2020-07-05 18:14:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dangjian\src\components\common\sheetNewsSide.vue
--> 
<template>
  <div>
    <div class="mx-sheet-wrapper">
      <div class="mx-sheet mx-m">
        <!-- 标题可隐藏 v-for="" start-->
        <div>
          <div class="mx-item-title">
            <strong>相关</strong>
            <span class="mx-item-more">
              <router-link to="/">
                查看更多
                <i class="iconfont icon-jiantouyou"></i>
              </router-link>
            </span>
          </div>
        </div>
        <!-- 标题可隐藏 v-for="" end-->
        <!-- 新闻列表ul  start-->
        
        <ul class="clearfix">
          <!-- {{relatedList}} -->
          <li v-for="item in relatedList" :key="item.id">
            <a href="javascript:;" @click="goDetails(item)">{{item.title}}</a>
            <em>{{item.createTime | timeCut}}</em>
          </li>
         
          <!-- 这个地方 需要判断类型type  显示不同的字体图标  type需要传递过来 -->
                <!-- <em v-for="type===1">
                  <i class="iconfont icon-yinpin"></i>
                </em> -->
                <!-- <em v-for="type===2">
                  <i class="iconfont icon-shipin"></i>
                </em> -->
        </ul>
        <!-- 新闻列表ul  end-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    relatedList:{
      // type:Array
    }
  },
  data(){
    return {
      
    }
  },
  created(){
    console.log(this.relatedList)
  },
  methods:{
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
<style lang="scss" scoped="scoped">
@media only screen and (max-width: 959px) {
  $times: 2;
  .mx-topic-wrapper {
    width: 100vw;
  }
}
</style>

