<script setup lang="ts" name="AppMain">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const Component = computed(() => router.currentRoute.value.path)
</script>

<template>
    <section class="app-main">
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <!-- <keep-alive :include="isCached"> -->
                <component :is="Component" />
                <!-- </keep-alive> -->
            </transition>
        </router-view>
    </section>
</template>

<style lang="scss" scoped>
.app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
}
.fixed-header + .app-main {
    padding-top: 50px;
}
</style>
