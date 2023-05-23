import { createApp } from 'vue'

import { applyProviders } from './providers'
import App from './App.vue'

import './styles/index.css'

export const app = createApp(App)

applyProviders(app)
