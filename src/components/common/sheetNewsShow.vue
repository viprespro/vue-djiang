<template>
  <div>
    <!-- 这里是sheet新闻区域-->
    <div class="mx-sheet-wrapper">
      <!-- hasBackgroundImg判断是否有背景图 -->
      <div :class="['mx-sheet', 'mx-sheet-side', 'mx-m',hasBackgroundImg?'':'mx-sheet-noImg']">
        <ul class="clearfix">
          <!-- 第一个li 不显示日期 -->
          <li class="mx-sheet-first" v-for="item in (lastestList || '').slice(0,1)" :key="item.id">
            <a href="javascript:;" @click="goDetails(item)">{{item.title}}</a>
            <!-- topic专题页特有的span -->
            <template v-if="isTopicPage">
              <span>{{item.description}}</span>
            </template>
            <em>{{item.createTime | timeCut}}</em>
          </li>
          <!-- 第二个 -->
          <template v-if="isTopicPage==true">
            <!-- 显示6条 -->
            <li v-for="item in (lastestList || '').slice(1,6)" :key="item.id">
              <a href="javascript:;" @click="goDetails(item)">{{item.title}}</a>
              <!-- <router-link :to="'/details-news/a-'+item.id" target="_blank">{{item.title}}</router-link> -->
              <em>{{item.createTime | timeCut }}</em>
            </li>
          </template>
          <template v-else-if="isTopicPage==false">
            <li v-for="item in (lastestList || '').slice(1,8)" :key="item.id">
              <a href="javascript:;" @click="goDetails(item)">{{item.title}}</a>
              <!-- <router-link :to="'/details-news/a-'+item.id" target="_blank">{{item.title}}</router-link> -->
              <em>{{item.createTime | timeCut }}</em>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 导入vuex
// import {mapState} from 'vuex'
// import {timecut} from '../../lib/timecut'
export default {
  props: {
    // 新闻数据
    lastestList: {
      type: Array
    },
    // 配置是否有背景图 ,默认没有
    hasBackgroundImg: {
      type: Boolean,
      default: false
    },
    isTopicPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {
    //console.log(this.$store.state.Authorization)
  },
  computed: {
    // ...mapState([''])
  },
  methods: {
    //跳到具体详情页之前 先把参数保存到localStore中去
    saveDetailParams() {
      // this.$router.beforeEach(to,from,next=>{
      //   console.log(to.path);
      //   console.log(from.path);
      //   console.log(next);
      // })
    },
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
.mx-sheet {
  background-image: url(../../assets/img/column-title-bg.png);
  background-repeat: no-repeat;
  background-position: right top;
}
.mx-sheet-noImg {
  background: #fff;
}

@media only screen and (max-width: 959px) {
  $times: 2;
  .mx-sheet-wrapper {
    width: 100vw;
  }
  /* 2倍 start  */
  .mx-sheet ul {
    display: block;
    padding: 20px * $times;
    /* // background-color: red; */
  }

  .mx-sheet ul li {
    float: left;
    width: 100%;
    padding: 6px * $times 0;
    position: relative;
    /* //相对定位 给em提供定位点 */
    font-size: 16px * $times;
  }

  .mx-sheet ul li a {
    float: left;
    width: calc(100% - (130px));
    width: -moz-calc(100% - 130px);
    width: -webkit-calc(100% - (130px));
    height: 22px * $times;
    line-height: 22px * $times;
    font-size: 14px * $times;
    /* //省略号 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mx-sheet ul li em {
    float: right;
    display: inline-block;
    width: 60px * $times;
    text-align: right;
    font-size: 12px * $times;
    color: #aaa;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -8px * $times;
  }

  .mx-sheet ul li a img {
    display: none;
  }
  .mx-sheet-first {
    padding: 5px * $times 0 10px * $times !important;
    font-weight: bold;
  }
  .mx-sheet .mx-sheet-first a {
    width: 100% !important;
    font-size: 18px * $times;
  }
  .mx-sheet-first span {
    height: 58px * $times;
    line-height: 22px * $times;
    padding: 10px * $times 0 0;
    margin-bottom: -7px * $times;
    font-size: 12px * $times;
  }
  .mx-sheet-first em {
    display: none !important;
  }

  /* 2倍 end */
}
/* 960 -1240尺寸 */
@media only screen and (min-width: 960px) and (max-width: 1239px) {
  .mx-sheet ul {
    padding: 20px;
  }
  .mx-sheet ul li {
    padding: 2px 0;
  }
  .mx-sheet .mx-sheet-first{
    padding: 5px 0 10px!important;
  }
  .mx-sheet .mx-sheet-first a{
    font-size:18px;
  }
  .mx-sheet .mx-sheet-first span{
    height: 58px;
    padding: 10px 0 0;
    margin-bottom: -7px;
    font-size: 12px;
  }
}
</style>
