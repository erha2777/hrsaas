<script setup lang="ts" name="Layout">
import { computed } from 'vue';
import sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import store from '@/store'

const fixedHeader = computed(()=>store.state.settings.fixedHeader)

</script>

<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <div >
                <navbar />
                <!-- 放置tabsview -->
                <tags-view />
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
</style>
