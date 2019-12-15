<template>
  <div class="main">
    <Header />
    <div id="content">
      <div class="mokuai">
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'猫'}}"><img src="../../../pic/animalpic/cat.png"></router-link>
        </div>
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'狗'}}"><img src="../../../pic/animalpic/dog.png"></router-link>
        </div>
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'水族'}}"><img src="../../../pic/animalpic/fish.png"></router-link>
        </div>
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'宠物鸟'}}"><img src="../../../pic/animalpic/niao.png"></router-link>
        </div>
      </div>
      <div class="zimokuai">
        <div class="info_list">
            <p>猫</p>
        </div>
        <div class="info_list">
            <p>狗</p>
        </div>
        <div class="info_list">
            <p>鱼</p>
        </div>
        <div class="info_list">
            <p>鸟</p>
        </div>
      </div>
    </div>

    <div id="content">
      <div class="mokuai">
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'兔子'}}"><img src="../../../pic/animalpic/rabbit.png"></router-link>
        </div>
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'虫宠'}}"><img src="../../../pic/animalpic/maomaoc.png"></router-link>
        </div>
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'宠物鼠'}}"><img src="../../../pic/animalpic/canhshu.png"></router-link>
        </div>
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'两栖爬行'}}"><img src="../../../pic/animalpic/gui.png"></router-link>
        </div>
      </div>
      <div class="zimokuai">
        <div class="info_list">
            <p>兔</p>
        </div>
        <div class="info_list">
            <p>虫子</p>
        </div>
        <div class="info_list">
            <p>仓鼠</p>
        </div>
        <div class="info_list">
            <p>龟龟</p>
        </div>
      </div>
    </div>

    <div id="content">
      <div class="mokuai">
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'两栖爬行'}}"><img src="../../../pic/animalpic/snake.png"></router-link>
        </div>
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'宠物貂'}}"><img src="../../../pic/diao.png"></router-link>
        </div>
        <div class="pic_show">
          <router-link :to="{path:'/baike/detail',query:{category:'其他'}}"><img src="../../../pic/animalpic/ciwei.png"></router-link>
        </div>
      </div>
      <div class="zimokuai">
        <div class="info_list">
            <p>蛇</p>
        </div>
        <div class="info_list">
            <p>貂</p>
        </div>
        <div class="info_list">
            <p>其它</p>
        </div>
      </div>
    </div>
    <tabbar />
    <router-view name="detail" />
    <router-view name="tdetail" />
    <router-view name="wsjq" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import tabbar from '@/components/tabbar'

export default{
  name: 'baike',
  components: {
    Header,
    tabbar
  }
}
</script>

<style scoped>
#content .main{
  overflow:auto;
  width: 100%;
  height: 93%;
  position: absolute;
  top:0;}
.main .mokuai{ display:flex; }
.main .pic_show{ width:90px; height:90px;margin-left: 6px;margin-top:12px;}
.main .pic_show img{ width:100%;border-radius:25px;}
.main .zimokuai{ display:flex;}
.main .info_list p{ font-size: 13px; color:rgba(37, 182, 237, 1);text-align: center; line-height: 22px; width:90px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
</style>
