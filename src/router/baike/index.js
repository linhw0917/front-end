export default {
  path: '/baike',
  component: () => import('@/views/baike'),

  path: 'detail',
  components: 
    detail: () => import('@/views/baike/detail')
  },

  path: 'tdetail',
  components: {
    tdetail: () => import('@/views/baike/tdetail')

  },
  path: 'wsjq',
  components: {
    wsjq: () => import('@/views/baike/wsjq')
  }
}
