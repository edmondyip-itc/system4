import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:appId/:name',
      name: 'app',
      component: () => import('../views/Apps.vue'),
      props: (route) => ({
        appId: route.params.appId.replace(/[-]/g, ""),
        name: route.params.name
      })
    }
  ]
})

export default router
