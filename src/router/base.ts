import type { RouteRecordRaw } from 'vue-router'

export const baseRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard/workbench',
  },
]
