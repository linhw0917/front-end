<template>
  <div id="main">
    <Header title="消息"></Header>
    <tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import tabbar from '@/components/tabbar'

export default{
  name: 'message',
  components: {
    Header,
    tabbar
  }
}
</script>

<style>
</style>
