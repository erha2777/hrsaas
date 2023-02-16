<script setup lang="ts">
import Item from './Item.vue'
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'
defineProps({
    item: {
        type: Object,
        required: true,
    },
    index: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <!-- <div>
        <template>
            <el-menu-item :index="index">
                <item :icon="" :title="" />
            </el-menu-item>
        </template>
    </div> -->
    <el-menu-item :index="index">
        <el-icon><IconMenu /></el-icon>
        <template #title>{{item.children[0].meta.title}}
        </template>
    </el-menu-item>
</template>

<style lang="scss" scoped></style>
