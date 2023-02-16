// 在基础路由里面增加自定义属性。
import { _RouteRecordBase } from 'vue-router';

declare module 'vue-router'{
    interface _RouteRecordBase{
        hidden?: boolean | string | number
    }
}