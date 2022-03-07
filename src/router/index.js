import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CountryDetails from "../views/CountryDetails";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:details/:id",
    name: "CountryDetails",
    component: CountryDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
