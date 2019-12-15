<template>
  <div id="detailer" class="cdetailer">
    <Header title="宠物百科">
      <img src="../../../pic/animalpic/back1.png" @click="handleRouterbackforget" class="change-back">
    </Header>
    <div class="container">
      <form action="" class="parent">
        <input type="text" class="search" placeholder="搜索">
        <input type="button" name="" id="" class="btn">
      </form>
    </div>
    <div id="detailcontent">
        <div class="tpic_show" v-for="(item,i) in data">
          <router-link :to="{path:'/baike/tdetail',query:{full_name:item.full_name,category:category}}"><img :src="item.img"></router-link>
          <p>{{item.full_name}}</p>
        </div>

    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: 'detail',
    data(){
      return{
        data:"",
        category:this.$route.query.category
      }
    },
    components: {
      Header
    },
    methods: {
      handleRouterbackforget() {
        this.$router.push('/baike')

      }
    },
    mounted() {
      var data = {
        "category": this.$route.query.category,
      }
      var that = this;
      console.log(that.data)
      data = JSON.stringify(data);
      $(document).ready(function() {
        $.ajax({
          type: "POST",
          url: "http://47.95.255.31:8000/qryCategory",
          dataType: "json",
          data: data,
          contentType: "application/json",
          success: function(data) {
            console.log(data)
            that.data = data["data"]
          },
          error: function(jqXHR) {
            alert("发生错误:" + jqXHR.statusText);
          }
        })
      })
    }
  }
</script>

<style scoped>
  .cdetailer .change-back {
    position: absolute;
    left: 20px;
    top: 12px;
    width: 31px;
    height: 31px;
    background-color: rgba(16, 16, 16, 1);
  }

  #detailer {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    min-height: 100%;
    background: #FFFFFF;
  }

  * {
    margin: 0;
    adding: 0;
  }

  .container {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main {
    background: #ffffff;
  }

  .search {
    width: 300px;
    height: 30px;
    border-radius: 18px;
    outline: none;
    border: 1px solid #ccc;
    padding-left: 20px;
  }

  .btn {
    height: 35px;
    width: 35px;
    position: absolute;
    background: url("../../../pic/wenhao4.jpg") no-repeat -2px -99px;
    top: 5px;
    left: 285px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .cdetailer .tmokuai {
    display: flex;
    flex-wrap: wrap;
  }

  .cdetailer .tpic_show {
    width: 120px;
    height: 120px;
    margin-left: 45px;
    margin-top: 30px;
  }

  .cdetailer .tpic_show img {
    width: 80%;
    height: 80%;
    background-size: cover ;
    border-radius:5px ;

  }

  #detailcontent {
    display: flex;
    flex-wrap: wrap;
  }
  .cdetailer .tpic_show p {
    font-size: 13px;
    text-align: center;
    color: rgba(37, 182, 237, 1);
    line-height: 22px;
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .cdetailer .contentinfo_list {
    display: flex;
    margin-left: 90px
  }
</style>
