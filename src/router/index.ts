import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const Layout = () => import('@/views/Layout/index.vue');

// 静态路由
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home/index.vue'),
        name: 'Home',
        meta: { title: 'home', icon: 'home-page', affix: true }
      },
      {
        path: 'about',
        component: () => import('@/views/About/index'),
        name: 'About',
        meta: { title: 'about', icon: 'about-page', affix: true }
      },
      {
        path: 'article',
        component: () => import('@/views/Article/index'),
        name: 'About',
        meta: { title: 'article', icon: 'article-page', affix: true }
      }
    ]
  }
];

// 创建路由
const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ y: 0 }),
});

const router = createRouter()

// 重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router;