<template>
  <div>
    <!-- 浮动菜单demo start -->
    <div class="float-menu-wrapper">
      <div class="float-menu">
        <ul class="float-menu-box">
          <li>
            <a href="javascript:;" class="mx-top" @click="goTop()">
              <i class="iconfont icon-yooxi"></i>
              <div>TOP</div>
            </a>
          </li>
          <!-- 中间隐藏的菜单子项 -->
          <template v-if="flag">
            <li>
              <a href="javascript:;" @click="goHome()">
                <i class="iconfont icon-home"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;" @click="goBack()">
                <i class="iconfont icon-fanhui"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;" @click=" reflash()">
                <i class="iconfont icon-shuaxin"></i>
              </a>
            </li>
          </template>
          <li class="mx-crumbs">
            <a href="javascript:;" @click="flag=!flag">
              <i :class="['iconfont', flag?'icon-guanbi':'icon-icon_public_crumbs']"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 浮动菜单demo end -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    //返回top
    goTop() {
      console.log(1);

      window.scrollTo(0, 0);
      //   节流写法
      //   var timer=null;
      //   timer = setInterval(function() {
      //     var backtop = document.body.scrollTop || document.documentElement.scrollTop;
      //     var speed = backtop / 5;
      //     document.body.scrollTop = backtop - speed;
      //     if (backtop == 0) {
      //       clearInterval(timer);
      //     }
      //   }, 60);
    },
    //返回首页
    goHome() {
      this.$router.push("/");
    },
    //后退一步
    goBack() {
      this.$router.back();
    },
    //刷新当前页面
    reflash() {
      this.$router.go(0);
    }
  }
};
</script>
<style lang="scss" scoped="scoped">
.float-menu {
  position: fixed;
  right: 20px;
  bottom: 70px;
  z-index: 500;
}
.float-menu-box {
  width: 40px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}
.float-menu-box li {
  position: relative;
  text-align: center;
}
.float-menu-box li a {
  display: block;
  padding: 6px 4px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  background: hsla(0, 0%, 100%, 0.85);
}
.float-menu-box li a i {
  font-size: 22px !important;
}
.float-menu-box li a:hover {
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
}
.float-menu-box li .mx-top {
  height: 50px;
  /* line-height: 50px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.float-menu-box li .mx-top div {
  font-size: 12px;
}
.float-menu-box li.mx-crumbs a {
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
}
.float-menu-box li.mx-crumbs a i {
  font-size: 22px !important;
}
@media only screen and (max-width: 959px) {
  $times: 2;
  .float-menu {
    position: fixed;
    right: 20px *$times;
    bottom: 70px*$times;
    z-index: 500;
  }
  .float-menu-box {
    width: 40px*$times;
    border-radius: 6px*$times;
    overflow: hidden;
    box-shadow: 0 0 8px*$times rgba(0, 0, 0, 0.15);
  }
  .float-menu-box li {
    position: relative;
    text-align: center;
  }
  .float-menu-box li a {
    display: block;
    padding: 6px*$times 4px*$times;
    width: 100%;
    height: 100%;
    font-size: 16px*$times;
    background: hsla(0, 0%, 100%, 0.85);
  }
  .float-menu-box li a i {
    font-size: 22px*$times !important;
  }
  .float-menu-box li a:hover {
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
  }
  .float-menu-box li .mx-top {
    height: 50px*$times;
    /* line-height: 50px; */
    border-bottom: 1px*$times solid rgba(0, 0, 0, 0.15);
  }
  .float-menu-box li .mx-top div {
    font-size: 12px*$times;
  }
  .float-menu-box li.mx-crumbs a {
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
  }
  .float-menu-box li.mx-crumbs a i {
    font-size: 22px*$times !important;
  }
}
</style>