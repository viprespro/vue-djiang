export default {
  //生产环境后台地址
  prodProxyUrl: "http://47.107.150.65:3100/api",
  downLoadUrl: "http://47.107.150.65:3100/",
  //开发环境下二级域名
  devProxyUrl: "/api",
  //默认布局
  defaultLayout: 948,
  //是否折叠
  collopse:false,
  //精简布局
  streamLayout: [948, 500],
  //迷你布局
  miniLayout: 500,
  //是否使用伪多页应用
  singlePage: false,
  //当前的主题
  currTheme: "Dawn",
  //国际化
  language: [
    {
      title: "中文",
      code: "zh"
    },
    {
      title: "English",
      code: "en"
    }
  ],
  pageLoading:'',
  //默认语言
  currLanguage: "zh",
  //是否为调试模式
  isDebug: true,
  //是否启用前端日志
  frontLogEnable: true,
  //交互式添加路由的前缀
  interRoutePrefix: "/dyn",
  //element ui组件的默认大小
  uiSize: "small",
  //浏览器支持列表
  browserMixVerList: {
    ie: 8,
    edge: 0,
    firefox: 0,
    chrome: 0,
    safari: 0,
    opera: 0
  },
  //是否显示页脚
  footerOption: {
    show: false
  },
  httpConst: {
    HTTP_NOT_AUTH:[1001,3000],
    // 务器已成功响应
    HTTP_OK: 200,
    // 求处理成功
    HTTP_SUCCESS: 1000,
    // 务器异常
    HTTP_LOADING: 500,
  }
};
