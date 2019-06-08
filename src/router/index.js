import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// 1. 定义 (路由) 组件。
const goods = { template: '<div>商品组件</div>' }
const ratings = { template: '<div>评论组件</div>' }
const seller = { template: '<div>商家组件</div>' }

// 2. 定义路由
const routes = [
  { path: '*', redirect: '/goods' },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]

// 3. 创建 router 实例
const router = new VueRouter({
  routes
})
export default router;