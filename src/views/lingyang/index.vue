<template>
<div id="container" >

<div id="header" style="background-color:#25B6ED;">
<h1 style="text-align:center">宠物领养</h1></div>
  <div class="form">
    <form name="地区" >
    <select>
      <option value="闽侯">闽侯</option>
      <option value="仓山" selected="selected">仓山</option>
      <option value="马尾">马尾</option>
      <option value="晋安">晋安</option>
    </select>
    </form>
     <form name="品种" >
    <select>
      <option value="猫">猫</option>
      <option value="狗" selected="selected">狗</option>
      <option value="鸟">鸟</option>
      <option value="鱼">鱼</option>
    </select>
    </form>
        <form name="年龄" >
    <select>
      <option value="0——6个月">0——6个月</option>
      <option value="6——12个月" selected="selected">6——12个月</option>
      <option value="1——3岁">1——3岁</option>
      <option value="3——5岁">3——5岁</option>
      <option value="5岁以上">5岁以上</option>
    </select>
    </form>
    </div>
    <hr/>

<div class="box1">
  <div class="picture1">
    <img src="./a.jpg" title="比熊" height="100%" width="70%">
  </div>
  <div class="wenzi1">
    <div><span>品种：</span>比熊</div>
    <div><span>昵称：</span>大可爱</div>
    <div><span>联系方式：</span>15866886688</div>
  </div>
</div>
  <hr/>

<div class="box2">
    <div class="picture2">
    <img src="./b.jpg" title="垂耳兔" height="100%" width="70%">
    </div>
    <div class="wenzi2">
    <div><span>品种：</span>垂耳兔</div>
    <div><span>昵称：</span>小可爱</div>
    <div><span>联系方式：</span>15866886688</div>
    </div>
</div>
    <hr/>

<div class="box3">
  <div class="picture3">
    <img src="./c.jpg" title="仓鼠" height="100%" width="70%">
  </div>
  <div class="wenzi3">
    <div><span>品种：</span>仓鼠</div>
    <div><span>昵称：</span>小小可爱</div>
    <div><span>联系方式：</span>15866886688</div>
  </div>
</div>
    <hr/>

<div class="box4">
  <div class="picture4">
    <img src="./d.jpg" title="哈士奇" height="100%" width="70%">
  </div>
  <div class="wenzi4">
    <div><span>品种：</span>哈士奇</div>
    <div><span>昵称：</span>巨大可爱</div>
    <div><span>联系方式：</span>15866886688</div>
  </div>
</div>
    <hr/>
     <a href="http://localhost:8080/fabulingyang">
        <button>发布领养</button>
       </a>
  </div>

</template>

<script>
export default {

}
</script>

<style>
.form{
    width: 100%;
    display:flex;
    justify-content: space-between;
  }
  .box1{
    width: 100%;
    display:flex;
    justify-content: space-between;
  }
   .box2{
    width: 100%;
    display:flex;
    justify-content: space-between;
  }
    .box3{
    width: 100%;
    display:flex;
    justify-content: space-between;
  }
     .box4{
    width: 100%;
    display:flex;
    justify-content: space-between;
  }
  span{
    color:#25B6ED;
  }
      div{text-align:center;}
</style>
