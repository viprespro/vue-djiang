<!--
 * @Date         : 2020-06-23 14:31:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-01 18:43:15
 * @FilePath     : \dangjianxiangmupcyidongduan\src\components\common\topicTitleInfo.vue
 * @Description  : 
--> 
<template>
  <div>
    <!-- 这里是专题模块 带title -->
    <div class="mx-topic-wrapper">
      <div class="mx-topic mx-m">
        <!--item-title start-->
        <div class="mx-item-title">
          <strong>专题 Topics</strong>
          <span class="mx-item-more">
            <a href>
              查看更多
              <i class="iconfont icon-jiantouyou"></i>
            </a>
          </span>
        </div>
        <!--item-title end-->
        <ul>
          <!-- 一个li start -->
          <li v-for="item in (topicList || '').slice(0,2)" :key="item.id">
            <a href target="_blank" class="clearfix">
              <img :src="item.path?ipAddress+item.path:''" alt />
              <span>
                <strong>{{item.name}}</strong>
                <em>{{item.description}}</em>
              </span>
            </a>
          </li>
          <!-- 一个li end -->
          <!-- 一个li start -->
          <!-- <li>
						<a href="" target="_blank" class="clearfix">
							<img src="../../assets/img/topic-img1.jpg" alt="">
							<span>
								<strong>"双百人物"</strong>
								<em>100位为新中国成立作出突出贡献的英雄模范人物和100位新中国成立以来感动中国人物</em>
							</span>
						</a>
          </li>-->
          <!-- 一个li end -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: {
    topicList: {
      type: Array
    },
   
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
  }
};
</script>

<style scoped="scoped" lang="scss">
// 设置间距倍数
$times: 2;
@media only screen and (max-width: 959px) {
  .mx-topic-wrapper {
    /* 移动端默认百分百宽 */
    width: 100vw;
  }
  .mx-topic ul li {
    padding: 0;
  }
  .mx-topic ul li a {
    padding: 15px * $times !important;
  }
  .mx-topic ul li img {
    width: 70px * $times;
  }
  .mx-topic ul li span {
    margin-left: 80px * $times;
  }
  .mx-topic ul li span strong {
    font-size: 16px * $times;
    line-height: 28px * $times;
    height: 28px * $times;
  }
  .mx-topic ul li span em {
    font-size: 12px * $times;
    line-height: 20px * $times !important;
    height: 40px * $times;
  }
}
</style>

