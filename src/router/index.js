import VueRouter from 'vue-router'

// 1. 定义 (路由) 组件。
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例
const router = new VueRouter({
  routes
})
export default router;