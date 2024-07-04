import {createRouter,createWebHistory} from 'vue-router'
import yuce from '../components/yuce.vue'
import zhanshi from '../components/zhanshi.vue'


const router = createRouter({
    history:createWebHistory(),
    routes: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/home.vue')
      },
      {
          path: '/',
          name: 'h',
          component: () => import('@/home.vue')
      },
      {
          path: '/about',
          name: 'about',
          component: () => import('@/about.vue'),
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
})

export default router
