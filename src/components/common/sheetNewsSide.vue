<!--
 * @Author: your name
 * @Date: 2020-07-01 14:23:02
 * @LastEditTime: 2020-07-03 16:27:58
 * @LastEditors: Ares
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
          <li v-for="item in relatedList" :key="item.id">
            <router-link to="/">{{item.title}}</router-link>
            <em>{{item.createTime}}</em>
          </li>
          <!-- 一个li start -->
          <!-- <li>
            <a href="" target="_blank">
              
               延安故事
            </a>
            <em>06-21</em>
          </li> -->
          <!-- 一个li end -->
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
      type:Array
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
