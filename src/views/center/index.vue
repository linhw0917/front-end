<template>
  <div class="mmain">
    <Header title="个人主页"></Header>
    <div id="content">
      <div class="first">
        <div class="pic_show">
          <img src="../../assets/picture/animalpicture/0ca2086ccd82fa6e60184f31d6cbd1d2.jpg">
          <div class="guanzhu"><p>关注：</p><p>45</p><p>粉丝：</p><p>66</p></div>
        </div>
        <div class="word">
          <div class="word_show">
            <p>昵称:</p>{{name}}</p>
          </div>
          <div class="word_show">
            <p>性别:</p><p>{{sex}}</p>
          </div>
          <div class="word_show">
            <p>年龄:</p><p>{{yearsold}}</p>
          </div>
          <div class="word_show">
            <p>地区:</p><p>{{position}}</p>
          </div>
        </div>
      </div>
      <hr align=center width=300 color=#8a8a8a SIZE=1/>
      <div class="twice">
          <div class="tubiao">
            <p>宠物管理</p>
          </div>
          <div class="tubiao">
            <p>帖子管理</p>
          </div>
          <div class="tubiao">
            <p>设置</p>
          </div>
      </div>
    </div>
    <div class="third">
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import axios from 'axios';
export default{
  name: 'mine',
  data(){
	  return{
		name:'',
		sex:'',
		yearsold:'',
		position:''
	  }
  },
  components: {
    Header
  },
  mounted() {
	  this.axios.post('',{
		  
	  }).then((res)=>{
		  this.name=res.data.nickname;
		  this.sex=res.data.sex;
		  this.yearsold=res.data.age;
		  this.position=res.data.area;
	}
}
</script>

<style>
.mmain{background: #f3f3f3;}
.mmain .pic_show{width:120px; height:120px;margin-left:60px;margin-top:25px;}
.mmain .pic_show img{left: 49px;
top: 140px;
width: 93px;
height: 98px;
border-radius: 15px;}
.mmain .guanzhu{display: flex;line-height: 0px;color: #8a8a8a;height: 18px;font-size: 8px;}
.mmain .guanzhu p{margin-left:1px;}
.mmain .word{margin-top:20px;color: #8a8a8a;}
.mmain .word_show{display: flex;font-size: 16px;line-height: 30px;}
.mmain .first{display: flex;background: #FFFFFF;}
.mmain hr{margin-top:20px;}
.mmain .tubiao{display: flex;margin-left:20px;height: 45px;}
.mmain .tubiao img{width: 30px;height: 30px;text-align: center;margin-top: 7px ;}
.mmain .tubiao p{font-size: 16px;margin-top: 10px ;margin-left: 10px;text-decoration: none;}
.mmain .twice{margin-top: 20px;background: #FFFFFF;}
.mmain .third{height:350px;background: #f3f3f3;}
</style>
