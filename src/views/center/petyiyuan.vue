<template>
  <div id="petyiyuan" class="cpetyiyuan">
    <Header title="宠物医院">
      <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </Header>
    <tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import tabbar from '@/components/tabbar'

export default{
  name: 'petyiyuan',
  components: {
    Header,
    tabbar
  },
  methods: {
    handleRouterbackforget () {
      this.$router.push('/center')
    }
  }
}
</script>

<style>
.cpetyiyuan .change-back{
  position:absolute;
  left: 21px;
  top: 12px;
  width: 31px;
  height: 31px;
  background-color: rgba(16, 16, 16, 1);
}
</style>
