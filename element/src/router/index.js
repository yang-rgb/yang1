import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home.vue')
const News = () => import('@/views/news/news.vue')
const Introduce = () => import('@/views/introduce/introduce.vue')
const bug = () => import('@/components/bug404.vue')
const company = () => import('@/views/company/company.vue')
const jili = () => import('@/components/jili.vue')

const routes = [
	{
	  path: '/',
		redirect:'/home'
	},
  {
    path: '/home',
    component: Home
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Introduce',
    name: 'Introduce',
    component: Introduce
  },
  {
    path: '/bug',
    name: 'bug',
    component: bug
  },
  {
    path: '/company',
    name: 'company',
    component: company
  },
  {
    path: '/jili',
    name: 'jili',
    component: jili
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
