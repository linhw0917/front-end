<template>
<div id="container" >

<div id="header" style="background-color:#25B6ED;">
<h1 style="text-align:center">寻宠启示</h1></div>

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

}
</script>

<style>
div{text-align:center;}
  span{
    color:#25B6ED;
  }
</style>
