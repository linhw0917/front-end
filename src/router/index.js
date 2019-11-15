import Router from 'vue-router'
import Vue from 'vue'
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

Vue.use(Router)

export default new Router({
  mode : 'history',
  base: process.env.BASE_URL,
  routes:[
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
    fensiliebiaoRouter


  ]

})
