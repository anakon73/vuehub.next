import { createRouter, createWebHistory } from 'vue-router'

import { HomePage } from '@/pages/HomePage'
import { ProfilePage } from '@/pages/ProfilePage'
import { RepositoryPage } from '@/pages/RepositoryPage'

const routes = [
  { name: 'HomePage', path: '/', component: HomePage },
  { name: 'ProfilePage', path: '/profile', component: ProfilePage },
  {
    name: 'RepositoryPage',
    path: '/:user/:repo',
    component: RepositoryPage,
    props: true,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
