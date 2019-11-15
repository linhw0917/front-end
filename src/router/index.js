import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/views/baike/detail.vue'
import Tdetail from '@/views/baike/tdetail.vue'
import Index from '@/views/baike/index.vue'
import Wsjq from '@/views/baike/wsjq.vue'

import Message from '@/views/message/index.vue'

import Mine from '@/views/mine/index.vue'
import Shezhi from '@/views/mine/shezhi.vue'
import Petguanli from '@/views/mine/petguanli.vue'
import Tshezhi from '@/views/mine/tshezhi.vue'

import Center from '@/views/center/index.vue'
import Petdian from '@/views/center/petdian.vue'
import Petyiyuan from '@/views/center/petyiyuan.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/baike',
      component: Index
    },
    {
      path: '/baike/detail',
      component: Detail
    },
    {
      path: '/baike/tdetail',
      component: Tdetail
    },
    {
      path: '/baike/wsjq',
      component: Wsjq
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/mine/shezhi',
      component: Shezhi
    },
    {
      path: '/mine/petguanli',
      component: Petguanli
    },
    {
      path: '/mine/tshezhi',
      component: Tshezhi
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/center/petdian',
      component: Petdian
    },
    {
      path: '/center/petyiyuan',
      component: Petyiyuan
    }
  ]
})
