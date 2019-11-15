<template>
  <div id="wdetailer" class="cwdetailer">
    <div class="note" ></div>
    <Header title="百科">
      <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </Header>
    <div class="btitle">{{title}}</div>
    <div class="neirong">{{data}}</div>

  </div>
</template>

<script>
import Header from '@/components/Header'
export default{
  name: 'wsjq',
  data () {
    return {
        title:"",
        data:""
    }
  },
  components: {
    Header
  },
  methods: {
    handleRouterbackforget () {
      this.$router.push('/baike/tdetail')
    }
  },
  created(){
    this.data = this.$route.query.data
    this.title = this.$route.query.name
    console.log(this.title)
    console.log(this.$route.query)
  }
}
</script>

<style>
#wdetailer{position:absolute;left: 0;top: 0;z-index: 100;width: 100%;min-height: 100%;}
#wdetailer{background: url("../../../pic/backgr.jpeg");}
.cwdetailer .change-back{
  position:absolute;
  left: 20px;
  top: 12px;
  width: 31px;
  height: 31px;
  background-color: rgba(16, 16, 16, 1);
}
.cwdetailer .btitle{
  text-decoration: none;
  margin:20px auto;
  width: 50%;
  border-radius: 10px;
  background-color: rgba(37, 182, 237, 1);
  text-align: center;
  color: white;
  font-size: 3.25vh;
  line-height:6.25vh;
}
.cwdetailer .neirong {width:80%; text-align:center;margin-left: 6vh;}
</style>
