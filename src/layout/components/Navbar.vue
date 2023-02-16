<script setup lang="ts" name="Navbar">
import Hamburger from '@/components/Hamburger/index.vue'

</script>

<template>
    <div class="navbar">
        <Hamburger :is-active="true" class="hamburger-container" />
        <div class="app-breadcrumb">
            xxxxxxxx科技股份有限公司
            <span class="breadBtn">体验版</span>
        </div>

        <div class="right-menu">
            
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
                    // top: 25px;
                    top: 20px;
                    font-size: 12px;
                    color: #fff;
                }
            }
        }
    }
}
</style>
