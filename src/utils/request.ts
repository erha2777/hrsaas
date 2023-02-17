import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import router from '@/router'
import { getTimeStamp } from '@/utils/auth'
const TimeOut = 3600 // 定义超时时间


const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // npm run dev api /prod-api
    baseURL: import.meta.env.VITE_APP_BASE_API, // npm run dev api /prod-api
    timeout: 10000, // 设置超时时间
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // config 是请求的配置信息
        // 注入token
        if (store.getters.token) {
            // 只有在有token的情况下 才有必要去检查时间戳是否超时
            if (IsCheckTimeOut()) {
                // 如果它为true表示过期了
                // token没用了 因为超时了
                store.dispatch('user/logout') // 登出操作
                // 跳转到登录页
                router.push('/login')
                return Promise.reject(new Error('token超时了'))
            }
            if (!config?.headers) {
                throw new Error(`Expected 'config' and 'config.headers' not to be undefined`)
            }
            config.headers['Authorization'] = `Bearer ${store.getters.token}`
        }
        return config // 必须要返回的
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        // axios 默认加了一层data
        const { success, message, data } = response.data
        // 要根据 success 的成功与否决定下面的操作
        if (success) {
            return data
        } else {
            // 业务已经错误了 不能进 then
            ElMessage.error(message) // 提示错误消息
            return Promise.reject(new Error(message))
        }
    },
    (error) => {
        // error信息 里面 response 的对象
        if (error.response && error.response.data && error.response.data.code === 10002) {
            // 当等于10002的时候 表示 后端告诉我token超时了
            store.dispatch('user/logout') // 登出action
            router.push('/login')
        } else {
            ElMessage.error(error.message) // 提示错误信息
        }
        return Promise.reject(error) // 返回执行错误，让当前的执行链跳出成功 直接进入catch
    }
)
// 是否超时
// 超时逻辑 (当前时间 - 缓存中的时间) 是否大于 时间差
function IsCheckTimeOut() {
    let currentTIme = Date.now() // 当前时间戳
    let timeStamp: any = getTimeStamp() // 缓存时间戳
    return (currentTIme - timeStamp) / 1000 > TimeOut
}
export default service
