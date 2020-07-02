<template>
  <div>
    <!-- 最新新闻共用组件-->
    <div class="mx-listing-wrapper">
      <div class="mx-listing mx-m">
        <!-- title区域开始 -->
        <div class="mx-item-title">
          <strong>最新发布 Latest</strong>
          <span class="mx-item-more">
            <a href>
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
            <a href>
              <img :src="item.imageUrl?ipAddress+item.imageUrl:''" alt />
            </a>
          </dt>
          <!-- 右边新闻区域内容 -->
          <dd>
            <!-- 测试接口 -->
            <!-- <router-link v-for="item in mlist" :key="item.id" :to="`/detail/${item.id}`"></router-link> -->
            <a href>
              <strong>{{item.title}}</strong>
            </a>
            <span class="mx-listing-sum">{{item.description}}</span>
            <span>
              <a href>北臧热点</a>
							<em> | </em>
							<em>{{item.categoryId}}</em>
							<!-- <em>{{headMenu}}</em> -->
              
              <!-- <a href="">阅读1</a> -->
              <!-- <em> | </em> -->
              <em class="user-time"></em>
              <em class="user-time time-phone">2020-06-10 07:24:57</em>
            </span>
          </dd>
        </dl>
        <!-- 一个dl表示一项 -->
        <!-- <dl>
					
					<dt>
						<a href="">
							<img src="../../assets/img/new-l-1.jpg" alt="">
						</a>
					</dt>
					
					<dd>
						<a href="">
							<strong>北臧村镇党委书记尚建刚带队到礼贤镇观摩学习美丽乡村建设工作</strong>
						</a>
						<span class="mx-listing-sum">
							6月9日，北臧村镇党委书记尚建刚带领镇领导班子成员到礼贤镇观摩学习美丽乡村建设和产业民宿发展。
						</span>
						<span>
							<a href="">北臧热点</a>
							<em> | </em>
							<a href="">阅读1</a>
							<em> | </em>
							<em class="user-time">User9</em> <em class="user-time time-phone">2020-06-10 07:24:57</em>
						</span>
					</dd>
        </dl>-->
        <!-- 一个dl表示一项 -->
        <!-- <dl>
				
					<dt>
						<a href="">
							<img src="../../assets/img/new-l-1.jpg" alt="">
						</a>
					</dt>
				
					<dd>
						<a href="">
							<strong>北臧村镇党委书记尚建刚带队到礼贤镇观摩学习美丽乡村建设工作</strong>
						</a>
						<span class="mx-listing-sum">
							6月9日，北臧村镇党委书记尚建刚带领镇领导班子成员到礼贤镇观摩学习美丽乡村建设和产业民宿发展。
						</span>
						<span>
							<a href="">北臧热点</a>
							<em> | </em>
							<a href="">阅读1</a>
							<em> | </em>
							<em class="user-time">User9</em> <em class="user-time time-phone">2020-06-10 07:24:57</em>
						</span>
					</dd>
        </dl>-->
        <!-- 定义列表结束 -->
        <!-- 加载更多按钮start-->
        <div class="mx-more-link mt">
          <a href>
            查看更多
            <i class="iconfont icon-jiantouyou"></i>
          </a>
        </div>
        <!-- 加载更多按钮end-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lastestList: {
      type: Array
    },
    ipAddress: {
      type: String
		},
		headMenu:{
			type: Array
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
