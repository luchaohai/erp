import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/', // 添加路径属性
    name: 'home',   // 添加名称属性
    component: () => import('@/views/test.vue') // 添加组件属性
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router