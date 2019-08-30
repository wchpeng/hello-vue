import Vue from 'vue'
import Router from 'vue-router'
// import iView from 'iview'

import HelloWorld from '@/components/HelloWorld'
import jinyong from '../components/jinyong'
import gulong from '../components/gulong'
import huangyi from '../components/huangyi'

Vue.use(Router)

var router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/jinyong',
      name: 'jinyong',
      title: '金蛹',
      component: jinyong,
      children: [

      ]
    },
    {
      path: '/gulong',
      name: 'gulong',
      title: '骨龙',
      component: gulong,
      children: [

      ]
    },
    {
      path: '/huangyi',
      name: 'huangyi',
      title: '黄蚁',
      component: huangyi,
      children: [

      ]
    }
  ]
})

// router.beforeEach(function () {
//   iView.LoadingBar.start()
// })

// router.afterEach(function () {
//   iView.LoadingBar.finished()
// })

export default router
