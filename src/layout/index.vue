<script setup lang="ts" name="Layout">
import sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue';
</script>

<template>
    <div>
        <sidebar class="sidebar-container" />
        <div >
            <div>
                <!-- <navbar /> -->
                <!-- 放置tabsview -->
                <!-- <tags-view /> -->
                123
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
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }

</style>
