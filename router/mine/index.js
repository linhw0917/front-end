export default {
  path: '/mine',
  component: () => import('@/views/mine')
  
  path: 'shezhi',
  components: {
    shezhi: () => import('@/views/mine/shezhi')
  },
  path: 'petguanli',
  components: {
    shezhi: () => import('@/views/mine/petguanli')
  },
  path: 'tshezhi',
  components: {
    shezhi: () => import('@/views/mine/tshezhi')
  },
}
