import { createRouter, createWebHistory } from "vue-router";
import TodoListView from "../views/Home/Index.vue";
import LoginView from "../views/Login/Index.vue";
import ErrorView from "../views/Error/Index.vue";
import RegisterView from "../views/Register/Index.vue";
import store from "../store"; // Import the Vuex store

const routes = [
  // {
  //   path: '*',
  //   name: 'erorr',
  //   secure: false,
  //   component: error404,
  // },
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
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
    path: "/:pathMatch(.*)*",  // This will catch all routes not previously defined
    name: "error",
    component: ErrorView,
  }
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
    return userLoggedIn.isAuthenticated
  }
  return false;
};

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && isUserLoggedIn()) {
    next("/home")
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isUserLoggedIn()) {
      next();
    } else {
      next("/"); // Redirect to the login page if not authenticated
    }
  } else {
    next();
  }
});

export default router;
