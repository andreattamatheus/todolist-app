import { createRouter, createWebHistory } from "vue-router";
import TodoListView from "../views/Home/Index.vue";
import LoginView from "../views/Login/Index.vue";
import ErrorView from "../views/Error/Index.vue";
import RegisterView from "../views/Register/Index.vue";
import UserView from "../views/User/Index.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/home",
    name: "home",
    component: TodoListView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user/view",
    name: "user-view",
    component: UserView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isUserLoggedIn = () => {
  let storedData = window.localStorage.getItem("logged-user");
  // const parsedData = JSON.parse(storedData)
  if (storedData !== null) {
    const userLoggedIn = JSON.parse(storedData).user;
    return userLoggedIn.isAuthenticated;
  }
  return false;
};

router.beforeEach((to, from, next) => {
  if (isUserLoggedIn()) {
    if (to.path === "/" || to.path === "/register") {
      next("/home");
    } else {
      next();
    }
  } else {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      next("/");
    } else {
      next();
    }
  }
});

export default router;
