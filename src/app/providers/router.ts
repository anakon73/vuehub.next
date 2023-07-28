import { createRouter, createWebHistory } from 'vue-router'

import { HomePage } from '@/pages/HomePage'
import { ProfilePage } from '@/pages/ProfilePage'
import { RepositoryPage } from '@/pages/RepositoryPage'
import { RegisterPage } from '@/pages/RegisterPage'
import { SearchPage } from '@/pages/SearchPage'

const routes = [
  {
    name: 'HomePage',
    path: '/',
    component: HomePage,
  },
  {
    name: 'ProfilePage',
    path: '/:user',
    component: ProfilePage,
    props: true,
  },
  {
    name: 'RepositoryPage',
    path: '/:user/:repo',
    component: RepositoryPage,
    props: true,
  },
  {
    name: 'RegisterPage',
    path: '/login',
    component: RegisterPage,
  },
  {
    name: 'SearchPage',
    path: '/search',
    component: SearchPage,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
