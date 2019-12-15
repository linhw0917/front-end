export default {
  path: '/center',
  component: () => import('@/views/center')
  
  path: 'petdian',
  components:
    petdian: () => import('@/views/center/petdian')
  },
  path: 'petyiyuan',
  components:
    petyiyuan: () => import('@/views/center/petyiyuan')
  }
}