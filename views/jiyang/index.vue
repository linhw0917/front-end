<template>
<div id="container" >
<header id="header" class="headerrr">
        <h1>宠物寄养</h1>
        <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </header>
  <div class="form">
    <div class="diqu">
    <form name="diqu" >
    <select>
      <option value="闽侯">闽侯</option>
      <option value="仓山" selected="selected">仓山</option>
      <option value="马尾">马尾</option>
      <option value="晋安">晋安</option>
    </select>
    </form>
    </div>
     <form name="pinzhong" >
    <select>
      <option value="猫">猫</option>
      <option value="狗" selected="selected">狗</option>
      <option value="鸟">鸟</option>
      <option value="鱼">鱼</option>
    </select>
    </form>
      <div class="nianling">
        <form name="nianling" >
    <select>
      <option value="0——6个月">0——6个月</option>
      <option value="6——12个月" selected="selected">6——12个月</option>
      <option value="1——3岁">1——3岁</option>
      <option value="3——5岁">3——5岁</option>
      <option value="5岁以上">5岁以上</option>
    </select>
    </form>
      </div>
    </div>
    <hr/>

<div class="box1">
  <div class="picture1">
    <img src="./a.jpg" title="比熊" height=150px width=150px>
  </div>
  <div class="wenzi1">
    <div><p><span>品种：</span>比熊</p></div>
    <div><p><span>昵称：</span>大可爱</p></div>
    <div><p><span>联系方式：</span>15866886688</p></div>
  </div>
</div>
  <hr/>

<div class="box2">
    <div class="picture2">
    <img src="./b.jpg" title="垂耳兔" height=150px width=150px>
    </div>
    <div class="wenzi2">
    <div><p><span>品种：</span>暹罗猫</p></div>
    <div><p><span>昵称：</span>小可爱</p></div>
    <div><p><span>联系方式：</span>15866886688</p></div>
    </div>
</div>
    <hr/>

<div class="box3">
  <div class="picture3">
    <img src="./c.jpg" title="仓鼠" height=150px width=150px>
  </div>
  <div class="wenzi3">
    <div><p><span>品种：</span>橘猫</p></div>
    <div><p><span>昵称：</span>小小可爱</p></div>
    <div><p><span>联系方式：</span>15866886688</p></div>
  </div>
</div>
    <hr/>

<div class="box4">
  <div class="picture4">
    <img src="./d.jpg" title="哈士奇" height=150px width=150px>
  </div>
  <div class="wenzi4">
    <div><p><span>品种：</span>暹罗猫</p></div>
    <div><p><span>昵称：</span>巨大可爱</p></div>
    <div><p><span>联系方式：</span>15866886688</p></div>
  </div>
</div>
    <hr/>
     <router-link to="/fabujiyang">
     <input type="submit" value="发布寄养"  name="submit" style="width:100px;height:40px;background:#87CEFA;" />
      </router-link>
  </div>

</template>

<script>
export default {
methods: {
    handleRouterbackforget () {
      this.$router.push('/zhuye')
    }
  }
}
</script>

<style scoped>
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
    .wenzi1{
      position: absolute;
      top:100px;
      left:200px;
    }
      .wenzi2{
      position: absolute;
      top:260px;
      left:200px;
    }
      .wenzi3{
      position: absolute;
      top:420px;
      left:200px;
    }
      .wenzi4{
      position: absolute;
      top:580px;
      left:200px;
    }
    .wenzi1 p{
      line-height: 30px;
      text-align: left;
    }
        .wenzi2 p{
      line-height: 30px;
      text-align: left;
    }
        .wenzi3 p{
      line-height: 30px;
      text-align: left;
    }
        .wenzi4 p{
      line-height: 30px;
      text-align: left;
    }
    .picture1{
      margin-left:20px;
    }
      .picture2{
      margin-left:20px;
    }
      .picture3{
      margin-left:20px;
    }
      .picture4{
      margin-left:20px;
    }
    .diqu{
      margin-left:20px;
    }
     .nianling{
      margin-right:20px;
    }
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
  .headerrr{width:100%; height:50px; color: #fff; background: rgba(37, 182, 237, 1); border-bottom: 1px solid rgba(37, 182, 237, 1); position: relative;}
  .headerrr h1{ font-size: 24px; text-align: center; line-height: 50px; font-weight: normal; }

      div{text-align:center;}
</style>
