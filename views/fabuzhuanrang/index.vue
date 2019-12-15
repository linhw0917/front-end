<template>
<div id="container" >
<header id="header" class="headzhuanrang">
        <h1>发布转让</h1>
        <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </header>

<img src="./1.jpg" title="宠物转让" height="30%" width="30%">
<div class="kuang">
  <form>
  <p><span>品种：</span>
  <input type="text" name="品种"></p>
  <br/>
  <p><span>昵称：</span>
  <input type="text" name="昵称"></p>
  <br/>
  <p><span>年龄：</span>
  <input type="text" name="年龄"></p>
  <br/>
  <p><span>性别：</span>
  <select>
      <option value="母">母</option>
      <option value="公" selected="selected">公</option>
  </select></p>
  <br/>
  <p><span>联系方式：</span>
  <input type="text" name="联系方式"></p>
  <br/>
  <span>详情：</span>
  <br/>
  <textarea cols="40" rows="10">在这里输入内容...</textarea>
  <br/>
  <input type="submit" value="确认发布"  name="submit" style="width:100px;height:40px;background:#87CEFA;" />
</form>
</div>


  </div>
</template>
<script>
export default {
methods: {
    handleRouterbackforget () {
      this.$router.push('/zhuanrang')
    }
  }
}
</script>

<style scoped>
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
  .headzhuanrang{width:100%; height:50px; color: #fff; background: rgba(37, 182, 237, 1); border-bottom: 1px solid rgba(37, 182, 237, 1); position: relative;}
  .headzhuanrang h1{ font-size: 24px; text-align: center; line-height: 50px; font-weight: normal; }
</style>
