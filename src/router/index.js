import Vue from 'vue'
import VueRouter from 'vue-router'
//导入Index
// import Index from '../views/Index/Index.vue'
// import Memorabilia from '../views/Memorabilia/Memorabilia.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: () =>
            import ( /* webpackChunkName: "Index" */ '../views/Index.vue'),
        meta: {
            // title: "首页"
        }
    },
    {
        path: '/category/1',
        name: 'News',
        component: () =>
            import ( /* webpackChunkName: "News" */ '../views/News.vue'),
        meta: {
            title: "时政要闻"
        }
    },
    {
        path: '/category/2',
        name: 'Red',
        component: () =>
            import ( /* webpackChunkName: "Red" */ '../views/Red.vue'),
        meta: {
            title: "红色中国"
        }
    },
    {
        path: '/category/3',
        name: 'Learn',
        component: () =>
            import ( /* webpackChunkName: "Learn" */ '../views/Learn.vue'),
        meta: {
            title: "学习党章"
        }
    },
    {
        path: '/category/4',
        name: 'Review',
        component: () =>
            import ( /* webpackChunkName: "Review" */ '../views/Review.vue'),
        meta: {
            title: "回顾党史"
        }
    },
    {
        path: '/category/5',
        name: 'Courses',
        component: () =>
            import ( /* webpackChunkName: "Courses" */ '../views/Courses.vue'),
        meta: {
            title: "党建课堂"
        },
        props: true
    },
    {
        path: '/category/6',
        name: 'Library',
        component: () =>
            import ( /* webpackChunkName: "Library" */ '../views/Library.vue'),
        meta: {
            title: "党建文库"
        }
    },
    {
        path: '/category/7',
        name: 'SmartCountry',
        component: () =>
            import ( /* webpackChunkName: "SmartyCountry" */ '../views/SmartCountry.vue'),
        meta: {
            title: "智慧新乡村"
        }
    },
    {
        path: '/category/8',
        name: 'PartyLecture',
        component: () =>
            import ( /* webpackChunkName: "PartyLecture" */ '../views/PartyLecture.vue'),
        meta: {
            title: "书记讲党课"
        }
    },
    {
        path: '/Search',
        name: 'Search',
        component: () =>
            import ( /* webpackChunkName: "Search" */ '../views/Search/Search.vue'),
        meta: {
            title: "搜索页"
        },
        // 子路由
        children: [{
            path: '/searchList',
            name: 'searchList',
            component: () =>
                import ( /* webpackChunkName: "searchList" */ '../components/common/searchList.vue'),
            meta: {
                title: "搜索页"
            },
        }]
    },
    {
        path: '/details-essay',
        name: 'details-essay',
        component: () =>
            import ( /* webpackChunkName: "details-essay" */ '../components/common/details-essay.vue'),
        props: false

    },
    {

        path: '/details-news',
        name: 'details-news',
        component: () =>
            import ( /* webpackChunkName: "details-news" */ '../components/common/details-news.vue')


    },
    {
        path: '/details-video',
        name: 'details-video',
        component: () =>
            import ( /* webpackChunkName: "details-video" */ '../components/common/details-video.vue')


    },
    {
        path: '/details-radio',
        name: 'details-radio',
        component: () =>
            import ( /* webpackChunkName: "details-radio" */ '../components/common/details-radio.vue')


    },
    {
        path: '/moreContent',
        name: 'moreContent',
        component: () =>
            import ( /* webpackChunkName: "moreContent" */ '../components/common/moreContent.vue'),
        meta: {
            // title: "查看更多"
        }
    },
    {
        path: '/Footer',
        name: 'Footer',
        component: () =>
            import ( /* webpackChunkName: "Footer" */ '../components/common/Footer.vue')
    },
    {
        path: '/Header',
        name: 'Header',
        component: () =>
            import ( /* webpackChunkName: "Header" */ '../components/common/Header.vue')
    }
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router