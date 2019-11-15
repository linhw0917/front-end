<template>
  <div id="pet" class="cpet">
    <Header title="宠物管理">
      <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </Header>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default{
    name: 'petguanli',
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
.cpet .change-back{
  position:absolute;
  left: 20px;
  top: 12px;
  width: 31px;
  height: 31px;
  background-color: rgba(16, 16, 16, 1);
}
</style>
