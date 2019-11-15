<template>
  <div class="mmain">
    <Header title="个人主页"></Header>
    <div id="content">
      <div class="first">
        <div class="pic_show">
          <img src="../../../pic/11.jpg">
          <div class="guanzhu"><p>关注：</p><p>45</p><p>粉丝：</p><p>66</p></div>
        </div>
        <div class="word">
          <div class="word_show">
            <p>昵称:</p><p>哇哈哈</p>
          </div>
          <div class="word_show">
            <p>性别:</p><p>男</p>
          </div>
          <div class="word_show">
            <p>年龄:</p><p>19岁</p>
          </div>
          <div class="word_show">
            <p>地区:</p><p>福建,福州</p>
          </div>
        </div>
      </div>
      <hr align=center width=300 color=#8a8a8a SIZE=1/>
      <div class="twice">
        <router-link to="/mine/petguanli">
          <div class="tubiao">
            <img src="../../../pic/11.jpg">
            <p>宠物管理</p>
          </div>
        </router-link>
        <router-link to="/mine/tshezhi">
          <div class="tubiao">
            <img src="../../../pic/11.jpg">
            <p>帖子管理</p>
          </div>
        </router-link>
        <router-link to="/mine/shezhi">
          <div class="tubiao">
            <img src="../../../pic/11.jpg">
            <p>设置</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="third">
    </div>
    <tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import tabbar from '@/components/tabbar'

export default{
  name: 'mine',
  components: {
    Header,
    tabbar
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
.mmain .word_show{display: flex;font-size: 16px;line-height: 0px;}
.mmain .first{display: flex;background: #FFFFFF;}
.mmain hr{margin-top:20px;}
.mmain .tubiao{display: flex;margin-left:20px;height: 45px;}
.mmain .tubiao img{width: 30px;height: 30px;text-align: center;margin-top: 7px ;}
.mmain .tubiao p{font-size: 16px;margin-top: 10px ;margin-left: 10px;text-decoration: none;}
.mmain .twice{margin-top: 20px;background: #FFFFFF;}
.mmain .third{height:350px;background: #f3f3f3;}
</style>
