import { createRouter, createWebHistory } from 'vue-router';



const routes = [
  {
      path: "/TabletopClub/",
      name: "home",
      component: () => import('../views/Home.vue'),
  },
  {
    path: "/TabletopClub/contribute",
    name: "contribute",
    component: () => import('../views/Contribute.vue'),
  },
  {
    path: "/TabletopClub/download",
    name: "download",
    component: () => import('../views/Download.vue'),
  },
  {
    path: "/TabletopClub/about",
    name: "about",
    component: () => import('../views/About.vue'),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router