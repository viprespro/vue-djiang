<template>
  <div>
    <!-- 这里是专题模块 不带item-title -->
    <div class="mx-topic-wrapper">
      <div class="mx-topic mx-m">
        <ul>
          <!-- 一个li start -->

          <li v-for="item in topicList.slice(0,4)" :key="item.id">
            <router-link
              :to="{path:'/topic',query:{
                topicsId:item.id
              }}"
              class="clearfix"
            >
              <img :src="item.path?ipAddress+item.path:''" alt />
              <span>
                <strong>{{item.name}}</strong>
                <em>{{item.description}}</em>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topicList: {
      type: Array
    },
    ipAddress: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped="scoped" lang="scss">
.mx-topic ul {
  padding: 12px 0 12px;
  background-color: #fff;
}
.mx-topic ul li a {
  padding: 6px 0;
}
@media only screen and (max-width: 959px) {
  $times: 2;
  .mx-topic-wrapper {
    /* 移动端默认百分百宽 */
    width: 100vw;
  }
  /* 2倍 start */
  /* 首页topic 专题基础样式 start*/
  .mx-topic ul {
    display: block;
  }
  .mx-topic ul li {
    display: block;
    padding: 0 20px * $times;
    background: #fff;
  }
  .mx-topic ul li a {
    display: block;
    padding: 15px * $times 0;
    border-bottom: 1px * $times solid #eee;
  }
  .mx-topic ul li:last-child a {
    border: none;
  }
  .mx-topic ul li a img {
    float: left;
    display: block;
    width: 60px * $times;
  }
  .mx-topic ul li a span {
    display: block;
    margin-left: 70px * $times;
  }
  .mx-topic ul li a span strong {
    display: block;
    height: 27px * $times;
    line-height: 27px * $times;
    font-size: 16px * $times;
    font-weight: bold;
    overflow: hidden;
    text-overflow: hidden;
    white-space: nowrap;
  }
  .mx-topic ul li a span em {
    display: block;
    font-size: 12px * $times;
    color: #aaa;
    line-height: 24px * $times !important;
    height: 24px * $times;
    overflow: hidden;
  }
  /* 首页topic 专题基础样式 end*/
  /* 2倍  end */
}
/* 960 -1240尺寸 */
@media only screen and (min-width: 960px) and (max-width: 1239px) {
  .mx-topic ul {
    padding: 4px 0;
  }
  .mx-topic ul li {
    padding: 0 10px;
  }
  .mx-topic ul li a {
    padding: 6px 0;
  }
  .mx-topic img {
    width: 50px;
  }
  .mx-topic ul li span {
    margin-left: 60px;
  }
  .mx-topic ul li a span em {
    height: 18px;
  }
}
/*1240尺寸以上*/
@media only screen and (min-width: 1240px) {
  .mx-topic ul li a img {
    width: 60px;
    height: 60px;
  }
}
</style>
