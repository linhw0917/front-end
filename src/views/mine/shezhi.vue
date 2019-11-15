<template>
  <div id="shezhi" class="cshezhi">
    <Header title="设置">
      <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </Header>
    <div class="firshezhi">
      <div style="background: #bbbbbb;width: 90%;height: 1px;margin: auto;"></div>
      <router-link to="/mine">
        <div class="tubiao">
          <p>修改密码</p>
        </div>
      </router-link>
      <div style="background: #bbbbbb;width: 90%;height: 1px;margin: auto;"></div>
      <router-link to="/mine">
        <div class="tubiao">
          <p>清楚缓存</p>
        </div>
      </router-link>
      <div style="background: #bbbbbb;width: 90%;height: 1px;margin: auto;"></div>
        <div class="tubiao">
          <p>允许接收通知</p>
        </div>
      <div style="background: #bbbbbb;width: 90%;height: 1px;margin: auto;"></div>
    </div>
    <div class="secshezhi">
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default{
  name: 'shezhi',
  components: {
    Header
  },
  methods: {
    handleRouterbackforget () {
      this.$router.push('/mine')
    }
  }
}
</script>

<style>
.cshezhi{background: #f3f3f3;}
.cshezhi .secshezhi{height: 450px;background: #f3f3f3;}
.cshezhi .change-back{
  position:absolute;
  left: 20px;
  top: 12px;
  width: 31px;
  height: 31px;
  background-color: rgba(16, 16, 16, 1);
}
.cshezhi .firshezhi{margin-top: 20px;background: #FFFFFF;margin-top: 30px ;}
.cshezhi .firshezhi p{font-size: 16px;margin-top: 10px ;margin-left: 30px;text-decoration: none;}
</style>
