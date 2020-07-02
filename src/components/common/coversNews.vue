<!--
 * @Author: your name
 * @Date: 2020-06-27 11:06:16
 * @LastEditTime: 2020-06-27 12:37:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dangjianxiangmupcyidongduan\src\components\common\coversNews.vue
--> 
<template>
  <div id>
    <div class="mx-covers-wrapper">
      <div class="mx-covers mx-m clearfix">
        <!-- 一列一个ul -->
        <ul class="mx-covers-ul">
          <!-- 一个li -->
          <li>
            <a href target="_blank">
              <!-- <em v-if="type===0"></em>
              <em v-if="type===1">
                <i class="iconfont icon-yinpin"></i>
              </em>
              <em v-if="type===2">
                <i class="iconfont icon-caret-right"></i>
              </em>-->

              <img src="../../assets/img/ab1.jpg" alt />
              <span>
                <strong>习近平在庆祝中华人民共和国成立70周年 大会上的讲话</strong>
                <em>二月</em>
                <em class="mx-covers-day">28</em>
                <em>2020年</em>
              </span>
            </a>
          </li>
          <!-- 一个li -->
          <li>
            <a href target="_blank">
              <i class="iconfont icon-caret-right"></i>
              <img src="../../assets/img/ab1.jpg" alt />
              <span>
                <strong>习近平在庆祝中华人民共和国成立70周年 大会上的讲话</strong>
                <em>二月</em>
                <em class="mx-covers-day">28</em>
                <em>2020年</em>
              </span>
            </a>
          </li>
          <!-- 一个li -->
          <li>
            <a href target="_blank">
              <i class="iconfont icon-caret-right"></i>
              <img src="../../assets/img/ab1.jpg" alt />
              <span>
                <strong>习近平在庆祝中华人民共和国成立70周年 大会上的讲话</strong>
                <em>二月</em>
                <em class="mx-covers-day">28</em>
                <em>2020年</em>
              </span>
            </a>
          </li>
          <!-- 一个li -->
          <li>
            <a href target="_blank">
              <i class="iconfont icon-caret-right"></i>
              <img src="../../assets/img/ab1.jpg" alt />
              <span>
                <strong>习近平在庆祝中华人民共和国成立70周年 大会上的讲话</strong>
                <em>二月</em>
                <em class="mx-covers-day">28</em>
                <em>2020年</em>
              </span>
            </a>
          </li>
        </ul>
        <!-- 一列一个ul -->
        <ul class="mx-covers-ul">
          <!-- 一个li -->
          <li>
            <a href target="_blank">
              <i class="iconfont icon-caret-right"></i>
              <img src="../../assets/img/ab1.jpg" alt />
              <span>
                <strong>习近平在庆祝中华人民共和国成立70周年 大会上的讲话</strong>
                <em>二月</em>
                <em class="mx-covers-day">28</em>
                <em>2020年</em>
              </span>
            </a>
          </li>
          <!-- 一个li -->
          <li>
            <a href target="_blank">
              <i class="iconfont icon-caret-right"></i>
              <img src="../../assets/img/ab1.jpg" alt />
              <span>
                <strong>习近平在庆祝中华人民共和国成立70周年 大会上的讲话</strong>
                <em>二月</em>
                <em class="mx-covers-day">28</em>
                <em>2020年</em>
              </span>
            </a>
          </li>
          <!-- 一个li -->
          <li>
            <a href target="_blank">
              <i class="iconfont icon-caret-right"></i>
              <img src="../../assets/img/ab1.jpg" alt />
              <span>
                <strong>习近平在庆祝中华人民共和国成立70周年 大会上的讲话</strong>
                <em>二月</em>
                <em class="mx-covers-day">28</em>
                <em>2020年</em>
              </span>
            </a>
          </li>
          <!-- 一个li -->
          <li>
            <a href target="_blank">
              <i class="iconfont icon-caret-right"></i>
              <img src="../../assets/img/ab1.jpg" alt />
              <span>
                <strong>习近平在庆祝中华人民共和国成立70周年 大会上的讲话</strong>
                <em>二月</em>
                <em class="mx-covers-day">28</em>
                <em>2020年</em>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 0 1 2
      type: 2
    };
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
  .mx-covers-ul::before,  .mx-covers-ul li::before{
    height: 12px * $times;
    border-top: 1px * $times solid #fff5c9;
    border-bottom: 1px * $times solid #e7c9a2;
  }
  .mx-covers-ul li {
    width: 50%;
    padding: 20px * $times 0 15px* $times 0;
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