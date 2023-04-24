const dashboard: Router.RouterCustomRaw = {
  path: "/",
  name: "home",
  component: "basic",
  redirect: "/dashboard",
  meta: {
    title: "DashBoard"
  },
  children: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: "self",
      meta: {
        title: "dashboard",
        icon: "mdi-view-dashboard-outline",
      },
    },
  ],
};
export default dashboard;
