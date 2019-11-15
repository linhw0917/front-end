<template>
  <footer id="footer">
      <div class="qzujian">
        <div class="zujian">
          <router-link to="/message">
            <img src="../../../pic/message2.png">

          </router-link>
          <p>消息</p>
         </div>
        <div class="zujian">
      <router-link to="/baike">
        <img src="../../../pic/baike2.png">

      </router-link>
      <p>宠物百科</p>
      </div>
      <div class="zujian">
      <router-link to="/center">
        <img src="../../../pic/store2.png">

      </router-link>
      <p>爱宠中心</p>
      </div>
      <div class="zujian">
        <router-link to="/shequ">
          <img src="../../../pic/shequ.png">

        </router-link>
        <p>社区</p>
      </div>
      <div class="zujian">
        <router-link to="/mine">
          <img src="../../../pic/mine.png">

        </router-link>
        <p>个人</p>
      </div>
      </div>
  </footer>
</template>

<script>
export default{
  name: 'tabbar'
}
</script>

<style scoped>
  #footer{ width:100%; height:50px; background: #F9F8F8; border-top:1px #ebe8e3 solid; position: fixed; margin-left: 0; bottom:0;}
  .qzujian {display: flex; height:80px;margin-left: 0px;text-align: center;}
  .qzujian .zujian .active{ color: #f03d37;}
  .qzujian .zujian .router-link-active{ color: #f03d37;}
  .qzujian .zujian{width:75px; height:80px;text-align: center;}
  .qzujian .zujian img{width:26px; height:26px ;text-align: center;}
  .qzujian .zujian p{ font-size: 12px; line-height: 0px;color: #8a8a8a;}
</style>
