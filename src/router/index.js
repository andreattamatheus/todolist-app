import { createRouter, createWebHistory } from 'vue-router'
import TodoListView from '../views/TodoListView';
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodoListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
