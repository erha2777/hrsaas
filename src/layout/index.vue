<script setup lang="ts" name="Layout">
import { computed } from 'vue'
import sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import store from '@/store'

const sidebarV = computed(() => store.state.app.sidebar)
const device = computed(() => store.state.app.device)
const fixedHeader = computed(() => store.state.settings.fixedHeader)
const classObj = computed(() => ({
    hideSidebar: !sidebarV.value.opened,
    openSidebar: sidebarV.value.opened,
    withoutAnimation: sidebarV.value.withoutAnimation,
    mobile: device.value === 'mobile',
}))

const handleClickOutside = () => {
    store.dispatch('app/closeSideBar', { withoutAnimation: false })
}
</script>

<template>
    <div :class="classObj" class="app-wrapper">
        <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <div>
                <navbar />
                <!-- 放置tabsview -->
                <!-- <tags-view /> -->
            </div>
            <app-main />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar {
        position: fixed;
        top: 0;
    }
}
.main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: $sideBarWidth;
    position: relative;
}
.hideSidebar{
    ::v-deep .el-menu-item{
        // padding: 0 !important;
        &>div{
            padding: 16px !important;
        }
        
    }
}

</style>
