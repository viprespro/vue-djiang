import Vue from 'vue'
import VueRouter from 'vue-router'
//导入Index
// import Index from '../views/Index/Index.vue'
// import Memorabilia from '../views/Memorabilia/Memorabilia.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Index',
		component: ()=>import( /* webpackChunkName: "about" */ '../views/Index/Index.vue')
	},
	
	{
		path: '/Memorabilia',
		name: 'Memorabilia',
		component: ()=>import( /* webpackChunkName: "about" */ '../views/Memorabilia/Memorabilia.vue')
	},
	{
		path: '/Courses',
		name: 'Courses',
		component: () => import( /* webpackChunkName: "about" */ '../views/Courses/Courses.vue')
	},
	{
		path: '/PartyLecture',
		name: 'PartyLecture',
		component: () => import( /* webpackChunkName: "about" */ '../views/PartyLecture/PartyLecture.vue')
	},
	{
		path: '/Search',
		name: 'Search',
		component: () => import( /* webpackChunkName: "about" */ '../views/Search/Search.vue')
	},
	{
		path: '/Footer',
		name: 'Footer',
		component: () => import( /* webpackChunkName: "about" */ '../components/common/Footer.vue')
	},
	{
		path: '/Header',
		name: 'Header',
		component: () => import( /* webpackChunkName: "about" */ '../components/common/Header.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
