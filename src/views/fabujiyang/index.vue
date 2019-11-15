<template>
<div id="container" >

<div id="header" style="background-color:#25B6ED;">
<h1 style="text-align:center">宠物寄养</h1></div>

<img src="./1.jpg" title="宠物转让" height="30%" width="30%">
<div>
  <form>
  <span>品种：</span>
  <input type="text" name="品种">
  <br/>
  <span>昵称：</span>
  <input type="text" name="昵称">
  <br/>
  <span>年龄：</span>
  <input type="password" name="年龄">
  <br/>
  <span>性别：</span>
  <select>
      <option value="母">母</option>
      <option value="公" selected="selected">公</option>
  </select>
  <br/>
  <span>联系方式：</span>
  <input type="password" name="联系方式">
  <br/>
  <span>详情：</span>
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
