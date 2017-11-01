import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/games/home'
import Maingame from '@/games/maingame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      component: Home,
      children: [{
        path: 'game',
        component: Maingame
      }]
    }
  ]
})
