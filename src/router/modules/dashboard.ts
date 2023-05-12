const dashboard: Router.RouterCustomRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: 'basic',
  redirect: '/dashboard/workbench',
  meta: {
    title: 'DashBoard',
  },
  children: [
    {
      path: 'workbench',
      name: 'workbench',
      component: 'self',
      meta: {
        title: 'workbench',
        icon: 'mdi-view-dashboard-outline',
      },
    },
  ],
}
export default dashboard
