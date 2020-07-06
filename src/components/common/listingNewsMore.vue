
<template>
  <div>
    <!-- <Header :activeMenu="activeMenuId"></Header> -->
    <div id>
      <!-- 这里是新闻列表盒子 -->
      <div class="mx-listing-wrapper">
        <div class="mx-listing mx-m">
          <!-- title区域 -->
          <div class="mx-item-title">
            <!-- 这个地方 需要根据传值 来显示h1  首页没有，其他的显示当前菜单的页面菜单名 关键字会显示当前关键字信息 -->
            <!-- title 有的时候显示 没有的时候就隐藏 -->

            <template v-if="activeMenuId==0">
              <!-- 首页来的 不显示 -->
            </template>
            <template v-if="activeMenuId">
              <!-- 这里要根据activeMenuId 去获取当前页面的菜单名 -->
              <h1>{{getCategoryName(activeMenuId,categoryDataList)}}</h1>
            </template>
          </div>
          <!-- 新闻列表数据 -->
          <!-- 一个dl表示一项 start -->
          <dl v-for="item in (totalList || '')" :key="item.id">
            <!-- 左边图片区域 -->
            <dt>
              <!-- 专题页跳转到详情页处理 -->
              <template v-if="isTopic">
                <router-link :to="{path:'/topic',query:{
                topicsId:item.id
              }}">
                <img :src="item.path?ipAddress+item.path:''" alt />
                </router-link>
              </template>
              <template v-else>
                <a href="javascript:;" @click="goDetails(item)">
                  
                  <img :src="item.imageUrl?ipAddress+item.imageUrl:ipAddress+item.path" alt />
                </a>
              </template>
            </dt>
            <!-- 右边新闻区域内容 -->
            <dd>
              <!-- 专题页跳转到详情页处理 -->
              <template v-if="isTopic">
                <router-link :to="{path:'/topic',query:{
                topicsId:item.id
              }}">
                <strong>{{item.name}}</strong>
                </router-link>
              </template>
              <template v-else>
                <a href="javascript:;" @click="goDetails(item)">
                  <strong>{{item.title?item.title:item.name}}</strong>
                </a>
              </template>

              <span class="mx-listing-sum">{{item.description}}</span>
              <span>
                <!-- <router-link :to="{path: `/category/${category_id}`}">{{categoryName}}</router-link>
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
          <!-- 底部墙-->
          <!-- <div class="listingblock mt">
          
          </div>-->
          <!-- 一个dl表示一项 end -->
        </div>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
  <!-- 这里用来显示文章详情页 -->
</template>

<script>
//导入Header头文件
import Header from "@/components/common/Header.vue";
//导入Footer组件
import Footer from "@/components/common/Footer.vue";
export default {
  props: {
    totalList: {},
    activeMenuId: {},
    isTopic:{

    }
  },
  data() {
    return {
      ipAddress: "",
      totalData: [],
      categoryDataList: []
    };
  },
  components: {
    Header,
    Footer
  },
  created() {
    // console.log(this.$route.query);
    this.ipAddress = this.$store.state.ipAddress;
    // 共用菜单数据赋值
    this.categoryDataList = this.$store.state.commonData.headMenu;
    // this.totalData = JSON.parse(this.$route.query.totalData);
    // this.totalData=JSON.parse(this.$route.query);
    // console.log(this.totalData);
    // console.log(this.activeMenuId)
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
    }
  }
};
</script>

<style scoped="scoped">
@media only screen and (max-width: 959px) {
  .mx-listing-wrapper {
    width: 100vw;
  }
}
</style>
