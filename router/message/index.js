export default {
  path: '/message',
  component: () => import('@/views/message')

  path: 'chat',
  components:
    chat: () => import('@/views/message/chat')
  }
}
