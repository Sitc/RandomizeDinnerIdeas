import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/views/homePage.vue";
import detailsPage from "@/views/detailsPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/details/:id",
    name: "details",
    component: () => detailsPage,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
