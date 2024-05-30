import { createApp } from 'vue'
import './styles/index.css'
import App from '../App.vue'
import router from '~/app/providers';

const app = createApp(App);
app.use(router);
app.mount('#app')
