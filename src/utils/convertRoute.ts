import DefaultVue from "@/layouts/default/Default.vue";
import { RouterPage } from "@/config/routerPage";
import { RouteRecordRaw } from "vue-router";

const transformRouteKeyToPage = (key: RouterKey.RouterName) => {
  return RouterPage[key];
};

function hasComponent(item: Router.RouterCustomRaw) {
  return Boolean(item.component);
}

function hasChildren(item: Router.RouterCustomRaw) {
  return Boolean(item.children && item.children.length);
}

export const generateRoute = (modules: Router.RouterCustomRaw[]) => {
  return modules.map((item) => transformRouteRaw(item)).flat(1);
};
export const transformRouteRaw = (item: Router.RouterCustomRaw) => {
  const routeList: Array<RouteRecordRaw> = [];
  const itemRoute = { ...item } as RouteRecordRaw;
  if (hasComponent(item)) {
    const actions: Router.Actions = {
      basic: () => (itemRoute.component = DefaultVue),
      self: () =>
        (itemRoute.component = transformRouteKeyToPage(item.name as RouterKey.RouterName)),
    };
    actions[item.component as Router.RouteComponentType]();
  }
  if (hasChildren(item)) {
    const children = item.children!.map(item => transformRouteRaw(item))
    itemRoute.children = children.flat(1)
  }
  routeList.push(itemRoute);
  return routeList;
};