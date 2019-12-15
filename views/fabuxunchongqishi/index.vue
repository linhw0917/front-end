<template>
<div id="container" >
<header id="header" class="head2">
        <h1>发布启示</h1>
        <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </header>

<img src="./1.jpg" title="xunchongqishi" height="30%" width="30%">
<div>
  <form>
  <span>种类：</span>
  <select>
      <option value="猫">猫</option>
      <option value="鸟">鸟</option>
      <option value="鱼">鱼</option>
      <option value="狗" selected="selected">狗</option>
  </select>
  <br/>
  <span>品种：</span>
  <input type="text" name="pinzhong">
  <br/>
  <span>昵称：</span>
  <input type="text" name="nicheng">
  <br/>
  <span>丢失地点：</span>
  <input type="text" name="diushididian">
  <br/>
  <span>关键特征：</span>
  <input type="text" name="guanjiantezheng">
  <br/>
  <span>详情信息：</span>
  <br/>
  <textarea cols="40" rows="10">在这里输入内容...</textarea>
  <br/>
  <input type="submit" value="确认发布"  name="submit" />
</form>
</div>


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

<style  scoped>
div{text-align:center;}
  span{
    color:#25B6ED;
  }
  .change-back{
    position:absolute;
    left: 20px;
    top: 12px;
    width: 31px;
    height: 31px;
    background-color: rgba(16, 16, 16, 1);
  }
  .head2{width:100%; height:50px; color: #fff; background: rgba(37, 182, 237, 1); border-bottom: 1px solid rgba(37, 182, 237, 1); position: relative;}
  .head2 h1{ font-size: 24px; text-align: center; line-height: 50px; font-weight: normal; }
</style>
