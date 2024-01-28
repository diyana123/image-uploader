import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import ImageUploader from './components/ImageUploader.vue'

const app = createApp(App)

app.use(ImageUploader)

app.mount('#app')
