/*
 * @Author: danielZhang
 * @Date: 2024-04-08 16:11:36
 * @Description: Description
 * @FilePath: /vite-vue3/src/main.ts
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './routes'
createApp(App).use(router).use(store).mount('#app')
