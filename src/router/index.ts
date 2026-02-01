import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import CreateView from '@/views/CreateView.vue'
import EditView from '@/views/EditView.vue'
import ReadView from '@/views/ReadView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
    {
      path: '/:id',
      name: 'read',
      component: ReadView,
    },
    {
      path: '/:id/edit/',
      name: 'edit',
      component: EditView,
    },
  ],
})

export default router
