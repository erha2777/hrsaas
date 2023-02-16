import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VueSetupExtend(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        // 配置路径别名
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                /**如果引入多个文件，可以使用
                 * '@import "@/assets/scss/globalVariable1.scss";
                 * @import"@/assets/scss/globalVariable2.scss";'
                 **/
                // additionalData: '@import "@/styles/globalVar.scss";',
                additionalData: '@import "@/styles/variables.scss";',
            },
        },
    },
})
