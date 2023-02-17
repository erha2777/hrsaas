<script setup lang="ts" name="Sidebar">
import { ref } from 'vue'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.module.scss'
import { constantRoutes as routes } from '@/router'
console.log(variables)
console.log(routes)

const isCollapse = ref(false)
</script>

<template>
    <div>
        <logo />
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :active-text-color="variables.menuActiveText"
                default-active="2"
                :unique-opened="false"
                :collapse-transition="false"
                :collapse="isCollapse"
            >
                <SidebarItem v-for="(item, index) in routes" :item="item"></SidebarItem>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/sidebar.scss';
</style>
