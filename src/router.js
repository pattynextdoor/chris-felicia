import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '👫 C+F',
        metaTags: [
          {
            name: 'description',
            content: 'Christian and Felicia are getting married!'
          },
          {
            name: 'og:description',
            content: 'Christian and Felicia are getting married!'
          }
        ]
      }
    }
  ]
})
