<!--
 * @Author: your name
 * @Date: 2020-06-27 11:06:16
 * @LastEditTime: 2020-07-05 13:02:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dangjianxiangmupcyidongduan\src\components\common\coversNews.vue
--> 
<template>
  <div id>
    <div class="mx-covers-wrapper">
      <div class="mx-covers mx-m clearfix">
        <!-- 一列一个ul  4个li-->
        <ul class="mx-covers-ul">
          <li v-for="item in (hotList || '').slice(0,8)" :key="item.id">
            <!-- 是党建文库下的普通文章 -->
            <template v-if="categoryId==6">
              <router-link
                :to="{path:'/details-essay',query: { categoryId: item.categoryId, id: item.id, type: item.type }}"
              >
                <img :src="ipAddress+item.imageUrl?ipAddress+item.imageUrl:''" alt />
                <span>
                  <strong>{{item.title}}</strong>
                  <em>{{item.month}}月</em>
                  <em class="mx-covers-day">{{item.day}}</em>
                  <em>{{item.year}}年</em>
                </span>
              </router-link>
            </template>
            <!-- 该栏目下全是音视频文章 -->
            <template v-if="categoryId==8">
              <a href="javascript:;" @click="goDetails(item)">
                <template v-if="item.type==1">
                  <i class="iconfont icon-yinpin"></i>
                </template>
                <template v-if="item.type==2">
                  <i class="iconfont icon-caret-right"></i>
                </template>
                <img :src="ipAddress+item.imageUrl?ipAddress+item.imageUrl:''" alt />
                <span>
                  <strong>{{item.title}}</strong>
                  <em>{{item.month}}月</em>
                  <em class="mx-covers-day">{{item.day}}</em>
                  <em>{{item.year}}年</em>
                </span>
              </a>
            </template>
          </li>

          <!-- 一个li -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    categoryId: {},
    hotList: {}
  },
  data() {
    return {
      ipAddress: "",
      totalCount: ""
    };
  },
  created() {
    this.ipAddress = this.$store.state.ipAddress;
    // console.log(this.hotList);
    // this.totalCount=this.hotList.length;
    // console.log(this.hotList);
    // /console.log(this.totalCount);
  },
  mounted() {},
  methods: {
    //传递item, 获取item项中必要的参数
    goDetails(item) {
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
/*移动端 低于960 111*/
@media only screen and (max-width: 959px) {
  $times: 2;
  .mx-covers-wrapper {
    /*移动端默认100宽度*/
    width: 100vw;
  }
  .mx-covers-ul {
    background-image: linear-gradient(
      #90683c 0%,
      #e2c594 10%,
      #e9d2b0 50%,
      #90683c 50%,
      #e2c594 60%,
      #e9d2b0 100%
    );
  }
  .mx-covers-ul::before,
  .mx-covers-ul li::before {
    height: 12px * $times;
    border-top: 1px * $times solid #fff5c9;
    border-bottom: 1px * $times solid #e7c9a2;
  }
  .mx-covers-ul li {
    width: 50%;
    padding: 20px * $times 0 15px * $times 0;
  }
  .mx-covers-ul::after,
  .mx-covers-ul li::after {
    border-top: 1px * $times solid #97723a;
    height: 12px * $times;
    bottom: 14px * $times;
  }
  .mx-covers-ul li a {
    width: 150px * $times;
    height: 200px * $times;
    box-shadow: 0 0 15px * $times rgba(112, 67, 18, 0.9);
  }
  .mx-covers-ul li a:before {
    width: 8px * $times;
    border-right: 1px * $times solid rgba(255, 255, 255, 0.2);
  }
  .mx-covers-ul li a i {
    width: 32px * $times;
    height: 32px * $times;
    line-height: 28px * $times;
    font-size: 18px * $times;
    left: 15px * $times;
    border: 2px * $times rgba(255, 255, 255, 0.6) solid;
  }
  .mx-covers-ul li a span {
    padding: 11px * $times 8px * $times 8px * $times 18px * $times;
  }
  .mx-covers-ul li a span strong {
    font-size: 15px * $times;
    line-height: 20px * $times;
    height: 40px * $times;
  }

  .mx-covers-ul li a span em {
    font-size: 12px * $times;
    line-height: 20px * $times;
  }
  .mx-covers-ul li a span .mx-covers-day {
    font-size: 24px * $times !important;
  }
}
</style>