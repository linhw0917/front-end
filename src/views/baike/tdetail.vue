<template>
  <div id="tdetailer" class="ctdetailer">
    <Header title="百科">
      <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </Header>
    <h1>{{data.full_name}}</h1>
    <div class="tpic_show1"><img src="../../../pic/QQ图片20191023231711.jpg"></div>
    <div class="state">
      <div class="state1">
        <p>体型：</p><p>{{data.shape}}</p>
      </div>
      <div class="state1">
        <p>体重：</p><p>{{data.weight}}</p>
      </div>
      <div class="state1">
        <p>全名：</p><p>{{data.full_name}}</p>
      </div>
      <div class="state1">
        <p>别名：</p><p>{{data.alias}}</p>
      </div>
      <div class="state1">
        <p>原产地：</p><p>{{data.ori_country}}</p>
      </div>
      <div class="state1">
        <p>寿命：</p><p>{{data.life}}</p>
      </div>
    </div>
    <div class="jianjie">
      <h3>简介</h3>
      <p>{{data.base_info}}</p>
    </div>
    <div class="jiqiao">
      <div class="tpic_show">
        <router-link :to="{path:'/baike/wsjq',query:{data:data.select_skill,name:'挑选技巧'}}"><p>挑选技巧</p></router-link>
      </div>
      <div class="tpic_show">
        <router-link :to="{path:'/baike/wsjq',query:{data:data.feed_ways,name:'喂食方式'}}"><p>喂食方式</p></router-link>
      </div>
    </div>
    <div class="changshi">
      <div class="tpic_show">
        <router-link :to="{path:'/baike/wsjq',query:{data:data.feature,name:'宠物特点'}}"><p>宠物特点</p></router-link>
      </div>
      <div class="tpic_show">
        <router-link :to="{path:'/baike/wsjq',query:{data:data.life_habit,name:'生活习性'}}"><p>生活习性</p></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default{
  name: 'tdetail',
  data () {
    return {
      data: ''
    }
  },
  components: {
    Header
  },
  methods: {
    handleRouterbackforget () {
      this.$router.push('/baike/detail?category=猫')
    }
  },
  mounted () {
    var data = {
      'full_name': this.$route.query.full_name
    }
    var that = this
    console.log(that.data)
    data = JSON.stringify(data)
    $(document).ready(function () {
      $.ajax({
        type: 'POST',
        url: 'http://47.95.255.31:8000/qryWiki',
        dataType: 'json',
        data: data,
        contentType: 'application/json',
        success: function (data) {
          that.data = data['data']
        },
        error: function (jqXHR) {
          alert('发生错误:' + jqXHR.statusText)
        }
      })
    })
  }
}
</script>

<style scoped>
#tdetailer{position:absolute;left: 0;top: 0;z-index: 100;width: 100%;min-height: 100%;background: white;}
.ctdetailer .change-back{
  position:absolute;
  left: 20px;
  top: 12px;
  width: 31px;
  height: 31px;
  background-color: rgba(16, 16, 16, 1);
}
.ctdetailer h1{color:rgba(37, 182, 237, 1);text-align:center;}
.ctdetailer .tpic_show1{ width:100%; height:100%;text-align:center}
.ctdetailer .tpic_show1 img{ width:120px;height:120px;border-radius:25px;text-align:center;}
.ctdetailer .state{margin-top: 20px;}
.ctdetailer .state1{ display:flex; text-align:center;width:100%;margin-left: 90px;}
.ctdetailer .state1 p{ font-size: 15px; color:#000000;text-align:center; line-height: 15px;width:100px;}
.ctdetailer .jianjie {margin-left: 40px;}
.ctdetailer .jianjie p{background: #F3F3F3;text-align: center;width: 90%;}
.ctdetailer .jiqiao{ display:flex; margin-left: 60px;height: 40px;}
.ctdetailer .changshi{ display:flex; margin-left: 60px; margin-top:20px;}
.ctdetailer .tpic_show{ width:90px; height:90px;margin-left: 20px;margin-top:20px;}
.ctdetailer .tpic_show img{ width:100%;border-radius:10px;}
.ctdetailer .tpic_show p{margin:0 auto;
  width: 100px;height: 40px;
  border-radius: 10px;
  background-color: rgba(37, 182, 237, 1);
  text-align: center;
  color: white;
  font-size: 3.25vh;
  line-height:6.25vh;}
</style>
