import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import MagazinePage from "../views/MagazinePage.vue";
import AuthorsPage from "../views/AuthorsPage.vue";
import PodcastPage from "../views/PodcastPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/magazine",
    name: "magazine",
    component: MagazinePage,
  },
  {
    path: "/authors",
    name: "authors",
    component: AuthorsPage,
  },
  {
    path: "/podcast",
    name: "podcast",
    component: PodcastPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
