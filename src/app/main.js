import { createApp } from 'vue'
import './styles/index.scss'
import App from '../App.vue'
import router from '~/app/providers';
import store from '~/entities/store'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
