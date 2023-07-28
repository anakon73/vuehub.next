import { createRouter, createWebHistory } from 'vue-router'

import { HomePage } from '@/pages/HomePage'
import { ProfilePage } from '@/pages/ProfilePage'
import { RepositoryPage } from '@/pages/RepositoryPage'
import { RegisterPage } from '@/pages/RegisterPage'
import { SearchPage } from '@/pages/SearchPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

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
  {
    name: 'NotFoundPage',
    path: '/:catchAll(.*)',
    component: NotFoundPage,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
