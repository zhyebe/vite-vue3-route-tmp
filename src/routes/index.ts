/*
 * @Author: danielZhang
 * @Date: 2024-04-08 16:27:49
 * @Description: Description
 * @FilePath: /vite-vue3/src/routes/index.ts
 */
import { PageMate } from '@/common/pageMate';
import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw
} from 'vue-router';

// 递归生成子路由函数
function generateRoutes(pages: Record<string, any>, views: Record<string, any>, basePath = ''): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  const routesMap: Record<string, RouteRecordRaw> = {};

  for (const path in pages) {
    if (Object.prototype.hasOwnProperty.call(pages, path)) {
      const meta: PageMate = pages[path] as PageMate;
      const pageJsPath = path;
      const comPath = pageJsPath.replace('page.ts', 'index.vue');
      const routePath = basePath + path.replace('../views', '').replace(/\/page.ts$/, '').replace(/\/index.vue$/, '') || '/';
      const name = routePath.split('/').filter(Boolean).join('-') || 'index';

      const route: RouteRecordRaw = {
        name,
        path: routePath,
        component: views[comPath],
        meta: meta
      };

      routesMap[routePath] = route;
    }
  }

  for (const path in routesMap) {
    const parentPath = path.substring(0, path.lastIndexOf('/'));
    if (parentPath !== '') {
      const parentRoute = routesMap[parentPath];
      if (parentRoute) {
        if (!parentRoute.children) {
          parentRoute.children = [];
        }
        parentRoute.children.push(routesMap[path]);
      }
    } else {
      routes.push(routesMap[path]);
    }
  }

  // 递归设置重定向
  function setRedirects(route: RouteRecordRaw) {
    if (route.children) {
      route.children.sort((a, b) => ((<PageMate>a.meta).menuSort || 0) - ((<PageMate>b.meta).menuSort || 0));
      route.redirect = route.children[0].path;
      route.children.forEach(childRoute => {
        setRedirects(childRoute);
      });
    }
  }

  routes.forEach(route => {
    setRedirects(route);
  });

  return routes;
}

const pages = import.meta.glob('../views/**/page.ts', {
  import: 'default',
  eager: true
});

const views = import.meta.glob('../views/**/index.vue');

const routes: RouteRecordRaw[] = generateRoutes(pages, views);

// 添加 404 路由
routes.push({
  name: '404',
  path: '/:pathMatch(.*)*',
  component: () => import('@views/404.vue'),
  meta: {
    title: '404'
  }
});
console.log(routes);
// 创建路由实例
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
});

// 设置全局导航守卫更新文档标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
});

export default router;
