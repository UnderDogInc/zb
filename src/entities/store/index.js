import { createStore } from 'vuex'
import users from './modules/users.js'
import alert from "./modules/alert.js";

export default createStore({
  modules: {
    users,
    alert
  }
})
