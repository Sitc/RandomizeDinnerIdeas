import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/views/homePage.vue";
import MealDetails from "@/views/mealDetails.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/:id/details",
    name: "details",
    component: () => MealDetails,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
