import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ProfilePage from "../components/ProfilePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
