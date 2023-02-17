import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import { createWebHistory } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

// 引入多个模块的规则
import permissionRouter from './modules/permission.js'

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        hidden: true,
    },

    {
        path: '/404',
        component: () => import('@/views/404.vue'),
        hidden: true,
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                meta: { title: '首页', icon: 'dashboard' },
            },
        ],
    },
]

// 定义一个动态路由变量
// 这里导出这个变量 后面做权限的时候会用到
export const asyncRoutes: Array<RouteRecordRaw> = [permissionRouter]

const createRouterFn = () =>
    createRouter({
        history: createWebHistory('hr/'), // history模式
        // history: createWebHashHistory(), // hash模式
        scrollBehavior: () => ({ top: 0 }), // 管理滚动行为 如果出现滚动 切换就让 让页面回到顶部
        routes: [...constantRoutes],
    })

const router = createRouterFn() // 实例化一个路由

// 重置路由
export function resetRouter() {
    const newRouter = createRouterFn()
    router.resolve = newRouter.resolve // reset router
}

export default router
