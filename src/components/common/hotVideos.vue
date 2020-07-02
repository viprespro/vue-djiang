<template>
  <div>
    <!-- 这里是缩略图新闻组件 -->
    <div class="mx-thumbnails-wrapper">
      
          <!-- col4表示4列 -->
          <div class="mx-thumbnails thumbnails-col4">
            <div class="mx-item-title mx-item-long-title mx-m">
              <strong>热点</strong>
              <span class="mx-item-more">
                <a href>
                  查看更多
                  <i class="iconfont icon-jiantouyou"></i>
                </a>
              </span>
            </div>
            <!-- 图文上下混排区域 -->
            <ul class="clearfix">
              <!-- 一个listart -->
              <li>
                <div class="mx-thumbnails-box">
                  <a href target="_blank">
                    <img src="../../assets/img/hot-video1.jpg" alt />
                    <span>
                      <i class="iconfont icon-caret-right"></i>
                      国家主席习近平发表了二〇二〇年新年贺词
                    </span>
                  </a>
                </div>
              </li>
              <!-- 一个liend -->
              <!-- 一个listart -->
              <li>
                <div class="mx-thumbnails-box">
                  <a href target="_blank">
                    <img src="../../assets/img/hot-video1.jpg" alt />
                    <span>
                      <i class="iconfont icon-caret-right"></i>
                      国家主席习近平发表了二〇二〇年新年贺词
                    </span>
                  </a>
                </div>
              </li>
              <!-- 一个liend -->
              <!-- 一个listart -->
              <li>
                <div class="mx-thumbnails-box">
                  <a href target="_blank">
                    <img src="../../assets/img/hot-video1.jpg" alt />
                    <span>
                      <i class="iconfont icon-caret-right"></i>
                      国家主席习近平发表了二〇二〇年新年贺词
                    </span>
                  </a>
                </div>
              </li>
              <!-- 一个liend -->
              <!-- 一个listart -->
              <li>
                <div class="mx-thumbnails-box">
                  <a href target="_blank">
                    <img src="../../assets/img/hot-video1.jpg" alt />
                    <span>
                      <i class="iconfont icon-caret-right"></i>
                      国家主席习近平发表了二〇二〇年新年贺词
                    </span>
                  </a>
                </div>
              </li>
              <!-- 一个liend -->
              <!-- 一个listart -->
              <li>
                <div class="mx-thumbnails-box">
                  <a href target="_blank">
                    <img src="../../assets/img/hot-video1.jpg" alt />
                    <span>
                      <i class="iconfont icon-caret-right"></i>
                      国家主席习近平发表了二〇二〇年新年贺词
                    </span>
                  </a>
                </div>
              </li>
              <!-- 一个liend -->
              <!-- 一个listart -->
              <li>
                <div class="mx-thumbnails-box">
                  <a href target="_blank">
                    <img src="../../assets/img/hot-video1.jpg" alt />
                    <span>
                      <i class="iconfont icon-caret-right"></i>
                      国家主席习近平发表了二〇二〇年新年贺词
                    </span>
                  </a>
                </div>
              </li>
              <!-- 一个liend -->
              <!-- 一个listart -->
              <li>
                <div class="mx-thumbnails-box">
                  <a href target="_blank">
                    <img src="../../assets/img/hot-video1.jpg" alt />
                    <span>
                      <i class="iconfont icon-caret-right"></i>
                      国家主席习近平发表了二〇二〇年新年贺词
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <!-- 一个liend -->
        
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
/*移动端 低于960 111*/
@media only screen and (max-width: 959px) {
  $times: 2;
  .mx-thumbnails-wrapper {
    /*移动端默认100宽度*/
    width: 100vw;
  }
  /*2 倍距离*/
  .mx-thumbnails ul {
    margin: 0;
  }
  .mx-thumbnails ul li {
    width: 50%;
    margin-top: 0;
    padding: 15px * $times 15px * $times 5px * $times;
    background-color: #fff;
  }
  .mx-thumbnails ul span {
    display: block;
    line-height: 22px * $times;
    height: 54px * $times;
    font-size: 12px * $times;
    overflow: hidden;
    padding: 10px * $times 0 0;
    border-bottom-width: 10px * $times;
  }
  .mx-thumbnails-cos2 ul li {
    width: 50%;
  }

  .mx-thumbnails-cos2 ul span {
    font-size: 12px * $times;
    line-height: 18px * $times;
  }
  .mx-thumbnails-box {
    display: block;
    background-color: #fff;
    padding: 56% 0 4px * $times;
    /* 给图片做定位点 */
    position: relative;
  }

  /* 字体图标边框设置 ，用于音频 视频按钮 */
  .mx-thumbnails-box i {
    position: absolute;
    left: 10px * $times;
    top: -38px * $times;
    width: 32px * $times;
    height: 32px * $times;
    line-height: 28px * $times;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: 2px rgba(255, 255, 255, 0.8) solid;
    text-align: center;
    font-size: 18px * $times;
    margin-top: 56%;
  }

  .mx-thumbnails-sum {
    margin: 5px * $times 0 0;
    padding: 0;
    line-height: 20px * $times;
    height: 40px * $times;
    font-size: 12px * $times;
    color: #aaa;
    overflow: hidden;

    background-color: #fff;
  }

  .mx-thumbnails-info {
    margin-top: 5px * $times;
    padding: 0;
    line-height: 20px * $times;
    height: 20px * $times;
    font-size: 12px * $times;

    color: #aaa;
    overflow: hidden;
  }
  .mx-thumbnails-info a {
    font-size: 12px * $times;
  }
  .mx-thumbnails-info em {
    font-size: 12px * $times;
  }
}
</style>
