# 项目备注

## 安装依赖
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 此项目为vue-cli 4.3.0构建

### 注意把安装lib/flexible.js中的540改成750 ，字体才能显示正常。



### 6.11                                                                                                                                                                 

- 首页剩余部分完成
- 修正 移动端字体大小，字体间距问题
- 党建课堂页面完成
  - pc端
  - 移动端
- 书记讲党课完成
  - pc端
  - 移动端

## 待调整的内容(0612)

	- 首页第二部分 category 公共样式提取
	- 首页第三部分 3-3-3 样式提取 公共样式提取
	- header 组件重构 添加导航路由
	- footer 组件重构 
	- js 菜单栏 重构
	- 公共组件复用 - 注意组件内嵌的媒体查询的作用域问题
	-  导航关联 的实现
- 移动端页面字体，字间距修正
- 页面title准确设置，修复
- 移动端页面导航 scroll-view功能的实现
- 还有一个浮动菜单未完成  暂时没有浮动菜单用的半透明svg图标

### 0612

- 字体图标寻找
  - 音频图标 iconyinpin      ok
  - 视频播放图标 iconbofang   ok
  - 眼睛图标 (观看人数) iconyanjing ok 
  - 分享图标 iconfenxiang  ok
  - 安卓图标  iconandroid  ok
  - iconfont iconicon_arrow_bottom  ok
  - iconfont iconjiantoushang ok

- 静态页面
  - 大事记  ok   /Memorabilia
  - 党建课堂  ok   /Courses
  - 书记讲党课    ok     /PartyLecture
- 媒体查询公共样式提取
  - index.css 还未调整  
  - memorabilia.css(大事记页面) 提取完毕
  - courses.css(党建课堂页面) 提取完毕

## 备注

- 党建课堂  新担当  新作为  三个页面结构一致
- 时政要闻   大事记 主体页面结构一致 除了导航一栏
- 导航标题区域 -需要根据导航来改变 iconfont. 需要注意一下。
- 音频页面 有收起 ，加载更多的js效果
- 全部评论  登录   注册  发表评论不要。专题不要

#### 二级页面

- 查看更多  https://bzcz.zhizhongdj.com/listing?column_id=55&content_type=video,audio&recommend_level=1&status=released&level=greater_equal&order=is_top-desc,release_time-desc&pagesize=20
-  音频页面  https://bzcz.zhizhongdj.com/stories/v-5e5887febb3eb453871848
- 视频详情页 https://bzcz.zhizhongdj.com/stories/v-5e7093464bd64788747505
-  新闻详情页  https://bzcz.zhizhongdj.com/stories/a-5ee01a49dd315607481263
- 

### 111