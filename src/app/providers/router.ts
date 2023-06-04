import { createRouter, createWebHistory } from 'vue-router'

import { HomePage } from '@/pages/HomePage'
import { ProfilePage } from '@/pages/ProfilePage'

const routes = [
  { name: 'HomePage', path: '/', component: HomePage },
  { name: 'ProfilePage', path: '/profile', component: ProfilePage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
