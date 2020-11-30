import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/index.vue'),
    children: [
      {
        path: '/market/activity',
        name: 'MarketActivity',
        component: () => import(/* webpackChunkName: "market-activity" */'@/views/market-activity/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
