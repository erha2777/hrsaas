<script setup lang="ts" name="Sidebar">
import { computed, ref } from 'vue'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.module.scss'
import store from '@/store'
import { useRouter } from 'vue-router'
const router = useRouter()
const route = computed(() => router.currentRoute.value)
const { routes } = store.getters

const activeMenu = computed(() => {
    const { meta, path } = route.value
    if (meta.activeMenu) {
        return meta.activeMenu
    }
    return path
})

const showLogo = computed(() => store.state.settings.sidebarLogo)

const isCollapse = computed(()=>{
    return !store.getters.sidebar.opened
})
</script>

<template>
    <div :class="{'has-logo':showLogo}">
        <logo :collapse="isCollapse" />
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :active-text-color="variables.menuActiveText"
                :unique-opened="false"
                :collapse-transition="false"
                :collapse="isCollapse"
                :router="true"
            >
                <SidebarItem v-for="(item, index) in routes" :item="item"></SidebarItem>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<style lang="scss" scoped>

</style>
