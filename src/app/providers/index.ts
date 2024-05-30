import { createWebHistory, createRouter } from 'vue-router'
import { routes } from "~/app/providers/routes";
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
