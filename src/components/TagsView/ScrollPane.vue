<script setup lang="ts" name="ScrollPane">
import { computed, ref } from 'vue';
const tagAndTagSpacing = 4 // tagAndTagSpacing

// const left = ref(0)
// const scrollContainer = ref('')
// const scrollWrapper =computed(()=> scrollContainer.$refs.wrap)
</script>

<template>
  <!-- <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
    <slot />
  </el-scrollbar> -->
</template>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  &>>> {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 49px;
    }
  }
}
</style>
