<template>
  <div id="tshezhi" class="ctshezhi">
    <Header title="帖子管理">
      <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </Header>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default{
  name: 'shezhi',
  components: {
    Header
  },
  methods: {
    handleRouterbackforget () {
      this.$router.push('/mine')
    }
  }
}
</script>

<style>
.ctshezhi .change-back{
  position:absolute;
  left: 20px;
  top: 12px;
  width: 31px;
  height: 31px;
  background-color: rgba(16, 16, 16, 1);
}
</style>
