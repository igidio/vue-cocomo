import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { AxiosService, DatabaseService, indexedDBInstance } from '@/data/classes'
import { createI18n } from 'vue-i18n'
import { translations } from '@/data/locales.ts'

const fetch_from_server = import.meta.env.VITE_FETCH_FROM_SERVER
const init = (fetch_from_server == 'true') ? new AxiosService(import.meta.env.VITE_SERVER_URL) : await indexedDBInstance
const database = new DatabaseService(init)


const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: translations,
  globalInjection: true
});

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.provide('database', database)
app.mount('#app')
