<template>
  <div id="petyiyuan" class="cpetyiyuan">
    <Header title="宠物医院">
      <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </Header>

  <div class="biaoti">
    <div>附近医院</div>
  </div>
  <hr/>

    <div class="box1">
     <div class="picture1">
    <img src="./1.jpg" title="宠物配对" height="100px" width="100px" >
     </div>
  <div class="wenzi1">
    <div class="wenzi11">格蕾宠物医院</div>
  </div>
  </div>
   <hr/>

   <div class="box2">
     <div class="picture2">
    <img src="./2.jpg" title="宠物配对" height="100px" width="100px" >
     </div>
  <div class="wenzi2">
    <div class="wenzi11">佳烁宠物诊所</div>
  </div>
  </div>
   <hr/>

  <div class="box3">
     <div class="picture3">
    <img src="./3.jpg" title="宠物配对" height="100px" width="100px" >
     </div>
  <div class="wenzi3">
    <div class="wenzi11">汪汪队宠物医院</div>
  </div>
  </div>
     <hr/>


  <div class="box4">
     <div class="picture4">
    <img src="./4.jpg" title="宠物配对" height="100px" width="100px" >
     </div>
  <div class="wenzi4">
    <div class="wenzi11">唯诺动物医院</div>
  </div>
  </div>





  <br>

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

<style  scoped>
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
  .biaoti{
    font-size:50px;
    color:#25B6ED;
  }
  .wenzi1{
      position: absolute;
      top:150px;
      left:140px;
      font-size: 30px;
    }
  .wenzi11{
    color: black;
	font-size:25px;
  }
      .wenzi2{
      position: absolute;
      top:260px;
      left:140px;
      font-size: 30px;
    }
          .wenzi3{
      position: absolute;
      top:370px;
      left:140px;
      font-size: 30px;
    }
              .wenzi4{
      position: absolute;
      top:480px;
      left:140px;
      font-size: 30px;
    }
.cpetyiyuan .change-back{
  position:absolute;
  left: 21px;
  top: 12px;
  width: 31px;
  height: 31px;
  background-color: rgba(16, 16, 16, 1);
}
</style>
