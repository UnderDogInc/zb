import { createWebHistory, createRouter } from 'vue-router'

// Types
import { routes } from "~/app/providers/routes";

// Router initialization
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
