const routeList: Router.RouterCustomRaw[] = [];
// glob匹配所以路由模块
const modules = import.meta.glob("./*.ts", { import: "default", eager: true });

Object.values(modules).map((item) => {
  console.log(item);
  routeList.push(item as Router.RouterCustomRaw);
});

export default routeList;
