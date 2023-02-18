<script setup lang="ts" name="Navbar">
import Hamburger from '@/components/Hamburger/index.vue'
import router from '@/router'
import store from '@/store'
import { computed } from 'vue'

const toggleSideBar = () => {
    store.dispatch('app/toggleSideBar')
}
const sidebar = computed(() => store.getters.sidebar)
const name = computed(() => store.getters.name)
const staffPhoto = computed(() => store.getters.staffPhoto)
console.log(staffPhoto)

const logout = async () => {
    await store.dispatch('user/logout') // 这里无论写不写 await 登出方法都是同步的
    router.push('/login') // 跳到登录
}
const defaultImg = new URL('@/assets/common/head.jpg', import.meta.url).href

</script>

<template>
    <div class="navbar">
        <Hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
        <div class="app-breadcrumb">
            xxxxxxxx科技股份有限公司
            <span class="breadBtn">体验版</span>
        </div>

        <div class="right-menu">

            <el-dropdown class="avatar-container" trigger="click">
              
                <div class="avatar-wrapper">
                    <img v-imagerror="defaultImg" :src="staffPhoto" class="user-avatar" />
                    <span class="name">{{ name }}</span>
                    <el-icon class="el-icon-caret-bottom"><CaretBottom /></el-icon>
                </div>
                <template #dropdown class="user-dropdown">
                    <el-dropdown-menu>
                        <router-link to="/">
                            <el-dropdown-item> 首页 </el-dropdown-item>
                        </router-link>
                        <a target="_blank" href="https://gitee.com/wangjiawei2777/hrsaas">
                            <el-dropdown-item>项目地址</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided @click="logout">
                            <span style="display: block;">退出登录</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    // background: #fff;
    background-image: -webkit-linear-gradient(left, #3d6df8, #5b8cff);
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }
    .app-breadcrumb {
        display: inline-block;
        font-size: 18px;
        line-height: 50px;
        margin-left: 10px;
        color: #ffffff;
        cursor: text;
        .breadBtn {
            background: #84a9fe;
            font-size: 14px;
            padding: 0 10px;
            display: inline-block;
            height: 30px;
            line-height: 30px;
            border-radius: 10px;
            margin-left: 15px;
        }
    }
    .breadcrumb-container {
        float: left;
    }

    .right-menu {
        float: right;
        height: 100%;
        line-height: 50px;
        display: flex;
        align-items: center;

        .name {
            color: #fff;
            vertical-align: middle;
            margin-left: 5px;
        }

        &:focus {
            outline: none;
        }

        .right-menu-item {
            display: inline-block;
            padding: 0 8px;
            height: 100%;
            font-size: 18px;
            color: #5a5e66;
            vertical-align: middle;

            &.hover-effect {
                cursor: pointer;
                transition: background 0.3s;

                &:hover {
                    background: rgba(0, 0, 0, 0.025);
                }
            }
        }

        .avatar-container {
            margin-right: 30px;

            .avatar-wrapper {
                // margin-top: 5px;
                position: relative;

                .user-avatar {
                    cursor: pointer;
                    width: 30px;
                    height: 30px;
                    border-radius: 15px;
                    vertical-align: middle;
                }

                .el-icon-caret-bottom {
                    cursor: pointer;
                    position: absolute;
                    right: -20px;
                    top: 10px;
                    font-size: 12px;
                    color: #fff;
                }
            }
        }
    }
}
</style>
