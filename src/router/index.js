import Vue from 'vue'
import Router from 'vue-router'
// import iView from 'iview'

// import HelloWorld from '@/components/HelloWorld'
import longyongyi from '../components/home/longyongyi'
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
      redirect: '/home',
      component: longyongyi,
      children: [{
        path: 'home',
        icon: 'ios-home',
        name: 'home',
        title: '龙蛹蚁',
        component: resolve => {
          require(['../components/home/longyongyi.vue'], resolve)
        }
      }]
    },
    {
      path: '/jinyong',
      name: 'jinyong',
      title: '金蛹',
      component: jinyong
      // children: [{
      //   path: 'app-report',
      //   icon: 'md-folder',
      //   name: 'app-report',
      //   title: '耗时报表',
      //   component: resolve => {
      //     require(['../components/report/report.vue'], resolve)
      //   }
      // }]
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
