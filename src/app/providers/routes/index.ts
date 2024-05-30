import { Routes } from "~/app/providers/routes/routes.enum.ts";

export const routes = [
  {
    name: Routes.HOME,
    path: '/',
    component: () => import('~/pages/cards/index.vue'),
    meta: { title: 'Home' }
  },
  {
    name: Routes.ARTICLE,
    path: '/card/:articleId',
    component: () => import('~/pages/card/index.vue'),
    meta: { title: 'Article' }
  },
]
