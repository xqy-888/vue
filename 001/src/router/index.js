import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/Main.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/home/index.vue'),
        },
        {
          path: '/monitor',
          name: 'monitor',
          component: () => import('../views/monitor/index.vue'),
        },
        {
          path: '/info',
          name: 'info',
          component: () => import('../views/info/index.vue'),
        },
      ],
    },
  ]
  
})