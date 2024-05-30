import { createApp } from 'vue'
import './styles/index.css'
import App from '../App.vue'
import router from '~/app/providers';

// App
const app = createApp(App);

// Plugins
app.use(router);

// Mounting
app.mount('#app')
