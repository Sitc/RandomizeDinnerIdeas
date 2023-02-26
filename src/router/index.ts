import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import MealDetails from "@/views/mealDetails.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id/details",
    name: "details",
    component: () => MealDetails,
    // component: () => import("@/views/mealDetails.vue"), // lazy-load
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
