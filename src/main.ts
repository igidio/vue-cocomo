import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { AxiosService, DatabaseService, indexedDBInstance } from '@/data/classes'


const fetch_from_server = import.meta.env.VITE_FETCH_FROM_SERVER
const init = (fetch_from_server == 'true') ? new AxiosService(import.meta.env.VITE_SERVER_URL) : await indexedDBInstance
const database = new DatabaseService(init)

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.provide('database', database)
app.mount('#app')
