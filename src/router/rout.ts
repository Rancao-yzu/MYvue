import yuce from '../components/yuce.vue'
import zhanshi from '../components/zhanshi.vue'

export const constantRoute =[
    {
        path: '/home',
        name: 'home',
        component: () => import('@/main/home.vue')

    },
    {
        path: '/',
        name: 'h',
        component: () => import('@/main/home.vue'),
        meta: {
            title: '登录',//菜单标题
            hidden: true,//代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
            icon: "Promotion",//菜单文字左侧的图标,支持element-plus全部图标
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/main/about.vue'),
        children:[
            {
                path: '/about/yuce',
                name: 'yuce',
                component: yuce
            },
            {
                path: '/about/zhanshi',
                name: 'zhanshi',
                component: zhanshi
            }

        ]
    },
]

export const anyRoute = [{
    //任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/',
    name: 'Any',
    meta: {
        title: '任意路由',
        hidden: true,
        icon: 'DataLine'
    }
}]
