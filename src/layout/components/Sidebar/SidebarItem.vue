<script setup lang="ts">
// import Item from './Item.vue'

defineProps({
    item: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <el-menu-item v-if="!item.hidden" :index="item.path">
        <el-icon><component :is="item.children[0].meta.elIcon" ></component></el-icon>
        <!-- <component :is="item.children[0].meta.elIcon" class="svg-icon"></component> -->
        <template #title>{{item.children[0].meta.title}}
        </template>
    </el-menu-item>
</template>

<style lang="scss" scoped>
.el-menu-item{
    // width: 100%;
    padding-left: 16px !important;
    &>div{
        padding: 16px !important;
    }
}

 .el-menu--vertical .el-menu-item:hover{
    color: #43a7fe;
}
.svg-icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-right: 8px;
}

</style>
