
<template>
  <div>
    <ul class="mx-search-list bg" v-loading="loading" style="min-height: 160px">

      <div v-if="list.length">
        <li class="li" v-for="item in list" :key="item.id">
          <strong>
            <a href target="_blank">{{ item.title }}</a>
          </strong>
          <span>
            <a href>
              <img :src="ipAddress + item.imageUrl" alt />
            </a>
            <p>
              {{ item.description }}
              <font color="#f00">{{ item.keyword }}</font>
            </p>
          </span>
          <em>{{ item.createTime }}</em>
        </li>
      </div>

      <div class="no-res bg" v-if="showDefault">
        <div class="mx-no-list text-weaken">
          <i class="iconfont icon-zanwushuju"></i>
          暂无数据
        </div>
      </div>
    </ul>
    <!-- 分页按钮组区域 start  -->

    <div class="page-btns bg">
      <div class="block pageStyle" style="text-align: right; padding:10px 0px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="2"
          :page-size="10"
          layout="prev, pager, next"
          :total="77"
        ></el-pagination>
        <!-- current-page  当前的页数 -->
        <!-- page-size  当前没有显示多少条数据 -->
        <!-- total 总条数 -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      loading: true,
      curId: 1,
      page: 1,
      limit: 10,
      list: [],
      showDefault: true // 是否展示缺省数据
    };
  },

  computed: {
    ...mapState(['ipAddress'])
  },

  mounted: function() {
    const id = this.$route.query.id;
    // console.log(id);
    if (id) {
      this.curId = id;
      this.inputVal = this.$route.query.inputVal;
      this.doSearch();
    }
  },

  watch: {
    $route: function() {
      // 得到参数id值
      console.log(this.$route.query);
      this.curId = this.$route.query.id;
      this.inputVal = this.$route.query.inputVal;
      this.list = []
      this.doSearch();
    }
  },

  methods: {
    handleSizeChange() {
      return;
    },
    handleCurrentChange(_current) {
      this.page = _current
      this.list = []
      this.doSearch()
    },
    async doSearch() {
      this.loading = true;
      let res = await this.$http.get("/api/search", {
        params: {
          access_token: localStorage.getItem("Authorization"),
          keyword: this.inputVal || "",
          type: this.curId, // 全部 1  文章 2  音频 3  视频 4
          page: this.page,
          limit: this.limit
        }
      });
      setTimeout(() => {
        this.loading = false;
      }, 500);
      res = res.data.data;
      if(res.list.length === 0) {
        this.showDefault = true
      }else {
        this.showDefault = false
      }
      this.list = res.list;
      console.log(this.list);
    }
  }
};
</script>
<style lang="scss" scoped="scoped">
/* tab内容区域 */
.mx-search-list {
  display: block;
  background: #fff;
  box-shadow: 0 2px 6px rgba(76, 86, 114, 0.12);
}

.mx-search-list li {
  display: block;
  padding: 30px;
  border-bottom: 1px solid #eee;
  /* 最小宽度 */
  min-height: 158px;
}

.mx-search-list li strong {
  display: block;
  font-size: 18px;
  line-height: 1.5;
  padding: 0 0 15px;
  font-weight: bold;
}

.mx-search-list li strong a {
  font-size: 18px !important;
}

.mx-search-list li span {
  display: block;
  font-size: 14px !important;
}

.mx-search-list li img {
  float: left;
  width: 140px;
  margin-right: 20px;
}

.mx-search-list li p {
  max-height: 60px;
  overflow: hidden;
}

.mx-search-list li em {
  display: block;
  margin-top: 10px;
  color: #aaa;
  font-size: 14px !important;
}

/* 分页样式 */
/* 暂无数据 */
.no-res {
  padding: 20px 0px;
}

.mx-no-list {
  padding: 30px 0;
  display: block;
  font-size: 20px;
  text-align: center;
  background-color: #fff;
}

.mx-no-list i {
  position: relative;
  bottom: -3px;
  font-size: 30px !important;
}

.text-weaken {
  color: #999;
}
/* 第一档  移动端  大小翻倍*/
@media only screen and (max-width: 959px) {
  /* tab内容区域 */
  .mx-search-list {
    display: block;
    background: #fff;
    box-shadow: 0 4px 12px rgba(76, 86, 114, 0.12);
  }

  .mx-search-list li {
    display: block;
    padding: 60px;
    border-bottom: 2px solid #eee;
    /* 最小宽度 */
    min-height: 316px;
  }

  .mx-search-list li strong {
    display: block;
    font-size: 36px;
    line-height: 1.5;
    padding: 0 0 30px;
    font-weight: bold;
  }

  .mx-search-list li strong a {
    font-size: 36px !important;
  }

  .mx-search-list li span {
    display: block;
    font-size: 28px !important;
  }

  .mx-search-list li img {
    float: left;
    width: 280px;
    margin-right: 40px;
  }

  .mx-search-list li p {
    max-height: 120px;
    overflow: hidden;
  }

  .mx-search-list li em {
    display: block;
    margin-top: 20px;
    color: #aaa;
    font-size: 28px !important;
  }

  /* 暂无数据 */
  .no-res {
    padding: 40px 0px;
  }

  .mx-no-list {
    padding: 60px 0;
    display: block;
    font-size: 40px;
    text-align: center;

    background-color: #fff;
  }

  .mx-no-list i {
    position: relative;
    bottom: -6px;
    font-size: 60px !important;
  }

  .text-weaken {
    color: #999;
  }
}
</style>