<template>
  <div>
    <!-- 这里是缩略图新闻组件 -->
    <div class="mx-thumbnails-wrapper">
      <div class="mx-thumbnails">
        <ul class="clearfix">
          <!-- 一个li start -->
          <li>
            <div class="mx-thumbnails-box">
              <a href target="_blank">
                <img src="../../assets/img/thumb-img2.jpg" alt />
                <span>北臧村镇党委书记尚建刚带队慰问下沉干部</span>
              </a>
              <!-- 新闻简介-->
              <div
                class="mx-thumbnails-sum"
              >6月23日，北臧村镇党委书记尚建刚，党委副书记、镇长靳璐，党委副书记孙辉到新立村、马村慰问市委农工委、市农业农村局及区水务局下派到基层协助开展防疫工作的驻村干部。</div>
              <!--  -->
              <div class="mx-thumbnails-info">
                <a href>阅读2</a>
                <em class="divider">|</em>
                06-24
              </div>
            </div>
          </li>
          <!-- 一个li end -->
          <!-- 一个li start -->
          <li>
            <div class="mx-thumbnails-box">
              <a href target="_blank">
                <img src="../../assets/img/thumb-img2.jpg" alt />
                <span>北臧村镇党委书记尚建刚带队慰问下沉干部</span>
              </a>
              <!-- 新闻简介-->
              <div
                class="mx-thumbnails-sum"
              >6月23日，北臧村镇党委书记尚建刚，党委副书记、镇长靳璐，党委副书记孙辉到新立村、马村慰问市委农工委、市农业农村局及区水务局下派到基层协助开展防疫工作的驻村干部。</div>
              <!--  -->
              <div class="mx-thumbnails-info">
                <a href>阅读2</a>
                <em class="divider">|</em>
                06-24
              </div>
            </div>
          </li>
          <!-- 一个li end -->
          <!-- 一个li start -->
          <li>
            <div class="mx-thumbnails-box">
              <a href target="_blank">
                <img src="../../assets/img/thumb-img2.jpg" alt />
                <span>北臧村镇党委书记尚建刚带队慰问下沉干部</span>
              </a>
              <!-- 新闻简介-->
              <div
                class="mx-thumbnails-sum"
              >6月23日，北臧村镇党委书记尚建刚，党委副书记、镇长靳璐，党委副书记孙辉到新立村、马村慰问市委农工委、市农业农村局及区水务局下派到基层协助开展防疫工作的驻村干部。</div>
              <!--  -->
              <div class="mx-thumbnails-info">
                <a href>阅读2</a>
                <em class="divider">|</em>
                06-24
              </div>
            </div>
          </li>
          <!-- 一个li end -->
          <!-- 一个li start -->
          <li>
            <div class="mx-thumbnails-box">
              <a href target="_blank">
                <img src="../../assets/img/thumb-img2.jpg" alt />
                <span>北臧村镇党委书记尚建刚带队慰问下沉干部</span>
              </a>
              <!-- 新闻简介-->
              <div
                class="mx-thumbnails-sum"
              >6月23日，北臧村镇党委书记尚建刚，党委副书记、镇长靳璐，党委副书记孙辉到新立村、马村慰问市委农工委、市农业农村局及区水务局下派到基层协助开展防疫工作的驻村干部。</div>
              <!--  -->
              <div class="mx-thumbnails-info">
                <a href>阅读2</a>
                <em class="divider">|</em>
                06-24
              </div>
            </div>
          </li>
          <!-- 一个li end -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
/*移动端 低于960*/
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
  .mx-thumbnails-box {
    display: block;
    background-color: #fff;
    padding: 56% 0 15px * $times;
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
