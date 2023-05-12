const user: Router.RouterCustomRaw = {
  path: '/user',
  name: 'user',
  component: 'basic',
  redirect: '/user/userinfo',
  meta: {
    title: 'User',
  },
  children: [
    {
      path: 'userinfo',
      name: 'userInfo',
      component: 'self',
      meta: {
        title: 'userinfo',
        icon: 'mdi-account',
      },
    },
  ],
}
export default user
