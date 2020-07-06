<template>
  <div>
    <!-- 最新新闻共用组件-->
    <div class="mx-listing-wrapper">
      <div class="mx-listing mx-m">
        <!-- title区域开始 -->
        <div class="mx-item-title">
          <strong>最新发布 Latest</strong>
          <span class="mx-item-more">
            <!-- @click=goMore() 要的是 lastestList -->
            <a href="javascript:;" @click="goArticleList(lastestList,activeMenuId)">
              查看更多
              <i class="iconfont icon-jiantouyou"></i>
            </a>
          </span>
        </div>
        <!-- title区域结束 -->
        <!-- 定义列表开始 图文混排 -->
        <!-- 一个dl表示一项 -->
        <dl v-for="item in (lastestList || '').slice(0,10)" :key="item.id">
          <!-- 左边图片区域 -->
          <dt>
            <a href="javascript:;" @click="goDetails(item)">
              <img :src="ipAddress+item.imageUrl?ipAddress+item.imageUrl:''" alt />
            </a>
          </dt>
          <!-- 右边新闻区域内容 -->
          <dd>
            <!-- 测试接口 -->
            <!-- <router-link v-for="item in mlist" :key="item.id" :to="`/detail/${item.id}`"></router-link> -->
            <a href="javascript:;" @click="goDetails(item)">
              <strong>{{item.title}}</strong>
            </a>
            <span class="mx-listing-sum">{{item.description}}</span>
            <span>
              <!-- <router-link :to="{path: `/category/${categoryId}`}">{{categoryName}}</router-link>
              <em>|</em>
              <em>{{item.categoryId}}</em>-->
              <!-- <em>{{headMenu}}</em> -->

              <!-- <a href="">阅读1</a> -->
              <!-- <em> | </em> -->
              <em class="user-time"></em>
              <em class="user-time time-phone">{{item.createTime}}</em>
            </span>
          </dd>
        </dl>

        <!-- 定义列表结束 -->
        <!-- 加载更多按钮start-->
        <div class="mx-more-link mt">
          <a href="javascript:;" @click="goMore(lastestList)">
            查看更多
            <i class="iconfont icon-jiantouyou"></i>
          </a>
        </div>
        <!-- 底部墙-->
        <!-- <div class="listingblock mt">
          
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //标识变量,判断当前这个组件来自哪个页面
    activeMenuId:{

    },
    lastestList: {
      type: Array
    },

    headMenu: {
      type: Array
    },
    categoryList: {
      // type: Object
    }
  },
  data() {
    return {
      ipAddress: "",
      categoryName: ""
    };
  },
  created() {
    this.ipAddress = this.$store.state.ipAddress;
    // console.log(this.lastestList)
    // let cid = this.category_id;
    // let clist = this.categoryList;
    // this.categoryName = this.getCategoryName(cid, clist);
  },
  methods: {
    //遍历获取当前category 的名称
    getCategoryName(cid, clist) {
      //console.log(clist);
      for (let i in clist) {
        if (clist[i].id == cid) {
          return clist[i].name;
        }
      }
    },
    //跳到具体详情页面
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
    },
    //跳到文章列表展示页 isMore 默认是查看更多跳转过去的
    goArticleList(totalData,activeMenuId,isMore = true) {
      //拿到当前模块下的所有数据
      console.log(totalData);
      totalData = JSON.stringify(totalData);
      //跳转到对应的文章详情主页  组件为listingNewsMore.attr-value
      this.$router.push({
        path: "/articleList",
        query: { totalData: totalData,activeMenuId:activeMenuId,isMore: isMore }
      });
    }
  }
};
</script>

<style scoped="scoped">
@media only screen and (max-width: 959px) {
  .mx-listing-wrapper {
    /* 移动端默认百分百宽 */
    width: 100vw;
  }
  /* 2倍 start */

  /* 2倍  end */
}
</style>
