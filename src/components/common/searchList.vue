
<template>
  <div>
    <ul class="mx-search-list bg">
      <!-- 一个li -->
      <li>
        <strong>
          <a href target="_blank">【文明创城】垃圾分类按下“加速键” 绘就美丽乡村新画卷</a>
        </strong>
        <span>
          <a href>
            <img src="../../assets/img/search1.jpg" alt />
          </a>
          <p>
            为改善镇域人居环境
            加快美丽乡村建设
            助力创建全国文明城区
            <!-- 北为关键字 -->
            <font color="#f00">北</font>
            臧村镇多方着手扎实推进垃圾分类工作
          </p>
        </span>
        <em>新闻 2020年05月23日 08:53</em>
      </li>
      <!-- 一个li -->
      <li>
        <strong>
          <a href target="_blank">【文明创城】垃圾分类按下“加速键” 绘就美丽乡村新画卷</a>
        </strong>
        <span>
          <a href>
            <img src="../../assets/img/search1.jpg" alt />
          </a>
          <p>
            为改善镇域人居环境
            加快美丽乡村建设
            助力创建全国文明城区
            <!-- 北为关键字 -->
            <font color="#f00">北</font>
            臧村镇多方着手扎实推进垃圾分类工作
          </p>
        </span>
        <em>新闻 2020年05月23日 08:53</em>
      </li>
      <!-- 一个li -->
      <li>
        <strong>
          <a href target="_blank">【文明创城】垃圾分类按下“加速键” 绘就美丽乡村新画卷</a>
        </strong>
        <span>
          <a href>
            <img src="../../assets/img/search1.jpg" alt />
          </a>
          <p>
            为改善镇域人居环境
            加快美丽乡村建设
            助力创建全国文明城区
            <!-- 北为关键字 -->
            <font color="#f00">北</font>
            臧村镇多方着手扎实推进垃圾分类工作
          </p>
        </span>
        <em>新闻 2020年05月23日 08:53</em>
      </li>
    </ul>
    <!-- 分页按钮组区域 start  -->
    <div class="page-btns bg">
      <!-- elementui 分页 -->
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
    <!-- 分页按钮区域 end -->
    <!-- 暂无数据区域start -->
    <div class="no-res bg">
      <div class="mx-no-list text-weaken">
        <i class="iconfont icon-zanwushuju"></i>
        暂无数据
      </div>
    </div>

    <!-- 暂无数据区域end -->
  </div>
</template>
<script>
export default {
  methods: {
    //监听pagesize改变的事件
    handleSizeChange(newSize) {
      console.log(newSize);
      // this.queryInfo.pagesize=newSize;
      // this.getData();
    },
    //监听页码值 改变的事件
    handleCurrentChange(newPage) {
      console.log(newPage);
      // this.queryInfo.newPage=newPage;
      // this.getData();
    },

    created() {
      console.log(this.$route.query);
    },

    mounted(ops) {
      console.log(ops);
      
    },

  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
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