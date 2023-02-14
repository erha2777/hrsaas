<script setup lang="ts" name="Sidebar">
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import variables from '@/styles/variables.module.scss'
console.log(variables)

const isCollapse = ref(false)

</script>

<template>
    <div>
        
        <el-menu
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :active-text-color="variables.menuActiveText"
            default-active="2"
            :unique-opened="false"
            :collapse-transition="false"
            :collapse="isCollapse"
        >
            <el-menu-item index="1">
                <el-icon><icon-menu /></el-icon>
                <template #title>Navigator One</template>
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/sidebar.scss';

</style>
