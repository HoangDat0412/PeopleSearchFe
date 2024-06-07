import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify



import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

const app = createApp(App)



app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
