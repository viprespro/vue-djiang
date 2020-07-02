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

	- 首页第二部分 category 公共样式提取  ok
	- 首页第三部分 3-3-3 样式提取 公共样式提取 ok
	- header 组件重构 添加导航路由 ok
	- footer 组件重构  ok
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
  - index.css 还未调整   ok
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

### 搜索页  0615
- 每页有20个结果集
- 带分页按钮
- 要区分 有结果集 无结果集的情况
- 同时结果集有分类 ，可以使用tab选项卡切换
- 搜索结果页面 tab选项卡注意一下 
- 分页最大页数 显示为7 
- 跳至 某一页  那个 input 是使用 失去焦点事件 ，才触发 跳页的功能
- 搜索页样式基本完毕 移动端字体正常 0616 ok  js效果暂无完成。

### 音频详情页面 
- 有切换书本 类似于手风琴效果
- 除了音频界面 ，下方还有图文介绍
- 右侧是统一的推荐栏目 
- 音频界面 不是唯一的id的yingpin
- 音频界面 需要无刷新请求，点击每一个li 需要请求该数据，并拉取这个数据的前后的数据，说明点击一次需要拉取三个数据。
- 就是说这个ul 需要实时展示三个数据
### 新闻详情页面
- [](https://bzcz.zhizhongdj.com/stories/a-t202006155672510)
- 图文混排  
- 右侧推荐栏 不一致 但是大致相同(可用组件封装)
- pc端已经完成0616
###  党建文库文章页面 
- 与普通的页面有区别  有专门的样式。
- [](https://bzcz.zhizhongdj.com/book/t20200228_5447599)
-  移动端页面中间的标题 不是logo 而是当前文章的标题 注意一下 尚未调整
### 视频详情页
- [](https://bzcz.zhizhongdj.com/stories/v-5e58b942539b2575606597)
- 使用dPlayer 插件
- 参考文档  [](https://github.com/MoePlayer/vue-dplayer)
- 移动端页面中间的标题 不是logo 而是当前文章的标题 注意一下 尚未调整
- 主体已完成 6.18  
- 旁边的是组件  要复用。
### 分享页面  (去掉)
- [](https://bzcz.zhizhongdj.com/share/a-5ee16c7f2e6c7215782997)

### 查看更多
- [](https://bzcz.zhizhongdj.com/listing?column_id=53&status=released&recommend_level=1&level=greater_equal&order=is_top-DESC,release_time-DESC&pagesize=20)
- 
### 前端路由随机字符串
- vue路由加密转码   参考 
- 文章id  a-   拼接一个随机字符串
	-  文章 book/  党建课堂下的全是 book/ 
	-  文章  stories/ 
- 视频 音频id  v-  拼接一个随机字符串

### 路由改造   0619

- a标签  改造  router-link   
- 前端路由随机加密  
- 三级路由改活  接收具体 id  类似于 
	-  t20200228_5447599   党建文库文章路由
	-  a-5eeac41a3f9ab973235624  新闻文章路由
	-  v-5e58b60165a01349871175   视频音频文章路由
- 7个标题一级路由
	-  /  首页(北臧党建之声)路由
	-  /category/53  大事记
	-  /category/54   时政要闻
	-   /category/55   党建课堂
	-   /category/56   党建文库
	-   /category/57   智慧新乡村
	-   /category/58   书记讲党课
	-   /category/59   新担当
	-    /category/60  新作为  
###  vue 分页插件
	- 搜索页有分页效果
### 音频详情页面 
- 有切换书本 类似于手风琴效果
- 除了音频界面 ，下方还有图文介绍
- 右侧是统一的推荐栏目 
- 音频界面 不是唯一的id的yingpin
- 音频界面 需要无刷新请求，点击每一个li 需要请求该数据，并拉取这个数据的前后的数据，说明点击一次需要拉取三个数据。
- 就是说这个ul 需要实时展示三个数据
- 请求接口 就是要拿到 3条数据
  - 临界条件 ，
	- 就是点击如果是第一条数据，则第一条数据 居中 ，左边留空 ，但是li存在 ，包裹着一个空 的span
	- 如果点击最后一条数据，则右边留空 ，但是li存在 ，包裹着一个空的span
-  说明 这个li是动态创建的。 
-  js操作	
-  图标收集  暂停 播放  上一个  下一个   四个按钮
-  进度条 loading  起初浅的loading, 加载后变粗了 实际的粗线 是根据网络情况加载的mp3的进度条的情况。
 -  新闻图片使用  fancybox插件
 -  
 ### 前端要判断 token 移动端。 报错要弹框提示错误