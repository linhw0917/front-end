import Vue from 'vue'
import Router from 'vue-router'
import animalchooseRouter from './loginning/animalchoose'
import changeRouter from './loginning/change'
import forgetRouter from './loginning/forget'
import loginRouter from './loginning/login'
import registerRouter from './loginning/register'
import usermassageRouter from './loginning/usermassage'

import Detail from '@/views/baike/detail.vue'
import Tdetail from '@/views/baike/tdetail.vue'
import Index from '@/views/baike/index.vue'
import Wsjq from '@/views/baike/wsjq.vue'

import Message from '@/views/message/index.vue'
import Chat from '@/views/message/chat.vue'

import Shequ from '@/views/shequ/index.vue'

import Mine from '@/views/mine/index.vue'
import Shezhi from '@/views/mine/shezhi.vue'
import Petguanli from '@/views/mine/petguanli.vue'
import Tshezhi from '@/views/mine/tshezhi.vue'

import Center from '@/views/center/index.vue'
import Petdian from '@/views/center/petdian.vue'
import Petyiyuan from '@/views/center/petyiyuan.vue'

import fabudongtaiRouter from './fabudongtai'
import fabujiyangRouter from './fabujiyang'
import fabulingyangRouter from './fabulingyang'
import fabupeiduiRouter  from './fabupeidui'
import fabuxunchongqishiRouter from './fabuxunchongqishi'
import fabuzhuanrangRouter from './fabuzhuanrang'
import fensiliebiaoRouter from './fensiliebiao'
import jiyangRouter from './jiyang'
import lingyangRouter from './lingyang'
import peiduiRouter from './peidui'
import shequRouter from './shequ'
import tieziguanliRouter from './tieziguanli'
import xunchongqishiRouter from './xunchongqishi'
import zhuanrangRouter from './zhuanrang'
import zhuyeRouter from './zhuye'


import Community from '@/page/community'
import FindPet from '@/page/findPet'
import LostPet from '@/page/publishLostPet'
import PublishTrend from '@/page/publishTrend'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
	//base:process.env.BASE_URL,
    routes: [
		animalchooseRouter,
		changeRouter,
		forgetRouter,
		loginRouter,
		registerRouter,
		usermassageRouter,
    fabudongtaiRouter,
    jiyangRouter,
    lingyangRouter,
    peiduiRouter,
    zhuanrangRouter,
    zhuyeRouter,
    fabujiyangRouter,
    fabulingyangRouter,
    fabupeiduiRouter,
    fabuzhuanrangRouter,
    fabuxunchongqishiRouter,
    shequRouter,
    xunchongqishiRouter,
    tieziguanliRouter,
    fensiliebiaoRouter,
    {
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
        path: '/message/chat',
        component: Chat
      },
      {
        path: '/shequ',
        component: Shequ
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
      },
      {
        path:'/community',
        name:Community,
        component:Community
      },
      {
        path:'/findPet',
        name:FindPet,
        component:FindPet
      },
      {
        path:'/publishTrend',
        name:PublishTrend,
        component:PublishTrend
      },
      {
        path:'/publishLostPet',
        name:LostPet,
        component:LostPet
      },
		{
			path:'*',
			redirect:'/loginning/login'
		}
	],
})
