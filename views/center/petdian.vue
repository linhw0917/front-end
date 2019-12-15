<template>
  <div id="petdian" class="cpetdian">
    <Header title="宠物店">
      <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </Header>
    <tabbar />
  <div class="biaoti">
    <div>附近宠物店</div>
  </div>
  <hr/>

    <div class="box1">
     <div class="picture5">
    <img src="./5.jpg" title="宠物配对" height="100px" width="100px" >
     </div>
  <div class="wenzi1">
    <router-link to="/center/petdian">
    <div class="wenzi11">贝贝宠物生活馆</div>
    </router-link>
  </div>
  </div>
   <hr/>

   <div class="box2">
     <div class="picture6">
    <img src="./6.jpg" title="宠物配对" height="100px" width="100px" >
     </div>
  <div class="wenzi2">
    <div class="wenzi11">宠宠欲动</div>
  </div>
  </div>
   <hr/>

  <div class="box3">
     <div class="picture7">
    <img src="./7.jpg" title="宠物配对" height="100px" width="100px" >
     </div>
  <div class="wenzi3">
    <div class="wenzi11">HIDOG</div>
  </div>
  </div>
     <hr/>


  <div class="box4">
     <div class="picture8">
    <img src="./8.jpg" title="宠物配对" height="100px" width="100px" >
     </div>
  <div class="wenzi4">
    <div class="wenzi11">小宠小爱</div>
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
.cpetdian .change-back{
  position:absolute;
  left: 20px;
  top: 12px;
  width: 31px;
  height: 31px;
  background-color: rgba(16, 16, 16, 1);
}
div{text-align:center;}
  span{
    color:#25B6ED;
  }
  p{
    font-size:20px;
    text-align:left;
    margin-left:70px;
    width:70%;
  }
</style>
