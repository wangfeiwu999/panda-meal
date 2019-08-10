import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage'

Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
// const goods = { template: '<div>商品组件</div>' }
// const ratings = { template: '<div>评论组件</div>' }
// const seller = { template: '<div>商家组件</div>' }

// 2. 定义路由
const routes = [
  { path: '*', redirect: '/homePage' },
  { path: '/homePage', component: HomePage },
  // { path: '/ratings', component: ratings },
  // { path: '/seller', component: seller }
]

// 3. 创建 router 实例
const router = new VueRouter({
  routes,
  //model:"history"
})
export default router;