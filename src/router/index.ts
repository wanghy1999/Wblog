import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import articleView from '../views/articleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'article',
      component: articleView
    }
  ]
})

export default router
