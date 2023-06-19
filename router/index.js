import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MyHotels from "../views/MyHotels.vue";
const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/myhotels", component: MyHotels, name: "MyHotels" },
];

const router = createRouter({
  base: "/reservation/",
  history: createWebHistory(),
  routes,
});

export default router;
