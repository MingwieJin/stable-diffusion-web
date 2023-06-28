import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'IndexPage',
    meta: {
      title: 'Index',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/optimizeImg',
    name: 'optimizeImg',
    meta: {
      title: 'optimizeImg',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/optimizeImg.vue')
  },
  {
      path: '/:pathMatch(.*)',
      redirect: '/noRight'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;