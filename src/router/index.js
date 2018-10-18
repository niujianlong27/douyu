import Vue from 'vue'
import Router from 'vue-router'

import HomePage from  '../pages/HomePage'
import  MorePage from '../pages/MorePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/morepage/:type',
      component: MorePage
    },

  ]
})
