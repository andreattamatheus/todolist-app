import { createRouter, createWebHistory } from "vue-router";
import TodoListView from "../views/Home/Index.vue";
import LoginView from "../views/Auth/Index.vue";
import RegisterView from "../views/Register/Index.vue";
import Vue from 'vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isUserLoggedIn = () => {
  const token = '';
  if (token) return true;
  return false;
}

router.beforeEach((to, from, next) => {
  console.log('vai cair no middleware')
  console.log(isUserLoggedIn());
  if (to.meta.requiresAuth) {
    if (isUserLoggedIn()) {
      next();
    } else {
      next('/');
    }
  } else {
    if (from.path === '/' && isUserLoggedIn()) {
      next('/home');
    }
    next(); 
  }
});

export default router;
