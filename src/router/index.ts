// Composables
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { baseRoute } from './base'
import routeList from '@/router/modules'
import { generateRoute } from '@/utils/convertRoute'

const routes: RouteRecordRaw[] = [...baseRoute, ...generateRoute(routeList)]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
console.log(routes)
export default router
