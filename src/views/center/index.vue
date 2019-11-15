<template>
  <div id="maincenter" class="cmaincenter">
    <Header title="爱宠中心"></Header>
    <div class="picshow">
      <img src="../../../pic/cwyy.jpg">
    </div>
    <div class="anniu">
      <router-link to="/center/petyiyuan"><p>宠物医院</p></router-link>
    </div>
    <div style="background: white;width: 300px;height: 10px;text-align: center;"></div>
    <div style="background: #bbbbbb;width: 300px;height: 1px;margin: auto;"></div>
    <div class="picshow">
      <img src="../../../pic/cwd.png">
    </div>
    <div class="anniu">
      <router-link to="/center/petdian"><p>宠物店</p></router-link>
     </div>
    <tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import tabbar from '@/components/tabbar'
export default{
  name: 'center',
  components: {
    Header,
    tabbar
  }
}
</script>

<style>
.cmaincenter .picshow{height:200px; width:100%;text-align: center;}
.cmaincenter .picshow img{height:200px; width:200px;}
.cmaincenter .anniu {text-align:center;color:rgba(37, 182, 237, 1);}
.cmaincenter .anniu {text-decoration: none;
  margin:20px auto;
  width: 35%;
  border-radius: 10px;
  background-color: rgba(37, 182, 237, 1);
  text-align: center;
  color: white;
  font-size: 3.25vh;
  line-height:6.25vh;}
</style>
