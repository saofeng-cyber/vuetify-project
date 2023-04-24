// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import routeList from "@/router/modules";
import { generateRoute } from "@/utils/convertRoute";
const routes: RouteRecordRaw[] = [...generateRoute(routeList)];
console.log(routes);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
