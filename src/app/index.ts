import { createApp } from 'vue'

import App from './App.vue'

import { router } from './router/router'

import './styles/index.css'

export const app = createApp(App).use(router)
