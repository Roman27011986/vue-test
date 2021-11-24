import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import LoginPage from "./pages/Login.vue";
import RegistrationPage from "./pages/RegistrationPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import MyOrdersPage from "./pages/MyOrdersPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartments/:id",
    component: ApartmentPage,
    name: "apartment",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration-page",
  },
  {
    path: "/my-orders",
    component: MyOrdersPage,
    name: "my-orders",
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    name: "erroe-page",
  },
];

// const router = new VueRouter({
//   mode: "history",
//   routes,
// });

const router = createRouter({
  mode: "history",
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});
export default router;
