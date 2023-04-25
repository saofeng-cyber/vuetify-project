// Composables
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import routeList from "@/router/modules";
import { generateRoute } from "@/utils/convertRoute";
import { baseRoute } from "./base";
const routes: RouteRecordRaw[] = [...baseRoute, ...generateRoute(routeList)];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
console.log(routes);
export default router;
