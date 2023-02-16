import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import { createWebHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                meta: { title: '首页', icon: 'dashboard' }
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(), // history模式
    // history: createWebHashHistory(), // hash模式
    routes,
})

export default router
