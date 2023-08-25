import { createRouter, createWebHistory } from 'vue-router'
import TodoListView from '../views/TodoListView';
import LoginView from '../views/LoginView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
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
