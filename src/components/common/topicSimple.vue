<!--
 * @Author: your name
 * @Date: 2020-06-28 07:58:08
 * @LastEditTime: 2020-07-04 05:14:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dangjian\src\components\common\topicSimple.vue
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
              <a href>
                查看更多
                <i class="iconfont icon-jiantouyou"></i>
              </a>
            </span>
          </div>
        </div>
        <!-- 标题可隐藏 v-for="" end-->
        <!-- 新闻列表ul start -->
        <ul>
            <li v-for="item in recommendList" :key="item.id">
                <router-link to='/' class="clearfix">
                
                    <img :src="ipAddress+item.imageUrl?ipAddress+item.imageUrl:''" alt="">
                    <span>
                        <strong>{{item.title}}</strong>
                    </span>
                </router-link>
            </li>
            <!-- <li>
                <a href="" target="_blank" class="clearfix">
                    <img src="../../assets/img/topicSimple1.jpg" alt="">
                    <span>
                        <strong>坚持以人民为中心的理论自觉</strong>
                    </span>
                </a>
            </li> -->
        </ul>
        <!-- 新闻列表 ul  end-->
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  props:{
    recommendList:{
      type: Array
    }
  },
  data(){
    return {
       ipAddress:''
    }
  },
  created(){
    console.log(this)
    // this.ipAddress=this.$store.state.ipAddress;
    // console.log(this.ipAddress)
  },
  mounted(){
    this.ipAddress=this.$store.state.ipAddress;
  }
};
</script>
<style scoped="scoped" lang="scss">
	@media only screen and (max-width:959px){
		$times:2;
		.mx-topic-wrapper{
			width: 100vw;
        }
    }
</style>