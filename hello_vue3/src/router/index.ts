import { createRouter, createWebHistory } from 'vue-router'
import Father from '@/views/communication/04_v-model/Father.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/model',
      name: 'model',
      component: Father
    }
  ]
})

export default router
