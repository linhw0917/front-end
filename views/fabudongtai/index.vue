<template>
  <div id="container" >
<header id="header" class="head3">
        <h1>发布动态</h1>
        <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </header>
<form>
   <textarea cols="40" rows="10">说点什么...</textarea>
</form>
<input type="submit" value="确认发布"  name="submit" />
  </div>
</template>

<script>
export default {
methods: {
    handleRouterbackforget () {
      this.$router.push('/shequ')
    }
  }
}
</script>

<style scoped>
  .change-back{
    position:absolute;
    left: 20px;
    top: 12px;
    width: 31px;
    height: 31px;
    background-color: rgba(16, 16, 16, 1);
  }
      div{text-align:center;}
      .head3{width:100%; height:50px; color: #fff; background: rgba(37, 182, 237, 1); border-bottom: 1px solid rgba(37, 182, 237, 1); position: relative;}
      .head3 h1{ font-size: 24px; text-align: center; line-height: 50px; font-weight: normal; }
</style>
