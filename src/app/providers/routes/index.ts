import { Routes } from "~/app/providers/routes/routes.enum.ts";

export const routes = [
  {
    name: Routes.HOME,
    path: '/',
    // @ts-ignore
    component: () => import('~/pages/table/index.vue'),
    meta: { title: 'Home' }
  },
]
