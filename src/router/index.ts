import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../view/project.vue"),
    },
  ],
});

export default router;
