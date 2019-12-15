<template>
  <div class="community-page">
    <div class="community-page_header">
      <p>广场</p>
    </div>
    <Carousel v-model="value2" loop dots="outside">
      <CarouselItem v-for="(item,idx) in petInfo" :key = "idx">
        <div class="demo-carousel" @click="toDetail(idx)">
          <img class="img-box" v-if="item.himg!=0" :src="item.himg" />
          <div class="info-box">
            <div class="info">
              <span class="label">丢失地点：{{item.area}}</span>
            </div>
            <div class="info">
              <span class="label">品种：{{item.breed}}</span>
            </div>
            <div class="info">
              <span class="label">特征：{{item.characters}}</span>
            </div>
          </div>
        </div>
      </CarouselItem>

    </Carousel>
    <div class="trend-box">
      <div class="trend" v-for="item in reversedata">
        <div class="apart-box"></div>
        <div class="trend-header">
          <img class="header-img" :src="item.himg" />
          <div class="name_time">
            <h3>{{item.nickname}}</h3>
            <p>{{item.time}}</p>
          </div>
        </div>
        <div class="trend-body">
          <p class="trend-body_content">
           {{item.content}}
          </p>
          <div class="trend-body_img-box">
            <img class="trend-body_img" v-if = "item.pic != 0 " :src="item.pic" />

          </div>
        </div>
        <div class="trend-footer">
          <div class="button-box">
            <span class="share-logo logo-box"></span>
            <span>分享</span>
          </div>
          <div class="button-box">
            <span class="comment-logo logo-box"></span>
            <span>{{item.num_comment}}</span>
          </div>
          <div class="button-box">
            <span class="collect-logo logo-box"></span>
          </div>
          <div class="button-box" id="thumb">
            <span class="thumb-logo logo-box"></span>
            <span>{{item.num_approve}}</span>
          </div>
        </div>
      </div>

    </div>
    <div class="addButton-box">
      <Poptip placement="right" >
        <div class="addButton"></div>
        <div  slot="content">
          <router-link to="/publishTrend"><a>发布动态</a></router-link>
          <router-link to="/publishLostPet"><a>发布寻宠启示</a></router-link>
        </div>
      </Poptip>
    </div>
    <!-- <div class="community-page_footer">©️宠爱有家</div> -->  
	 <tabbar />
  </div>
</template>
<script>
import tabbar from '@/components/tabbar'
export default {
	components: {
	  tabbar
	},
  data() {
    return {
      value2: 0,
      data:[],
      petInfo:[]
	};
  },
  computed:{
	  reversedata(){
		  return this.data.reverse()
	  }
  },
  mounted(){
    var that = this;
    $(document).ready(function() {
        $.ajax({
          type: "get",
          url: "https://www.achaonihao.com/pethome/community/communityDisplay.php",
          dataType: "json",
          success: function(data) {

            that.data = data["data"]

            console.log(that.data[1].pic)
          },
          error: function(jqXHR) {
            alert("发生错误:" + jqXHR.statusText);
          }
        })
      })

    $(document).ready(function() {
        $.ajax({
          type: "get",
          url: "https://www.achaonihao.com/pethome/community/lostPetDisplay.php",
          dataType: "json",
          success: function(data) {
              that.petInfo = data["data"]
              console.log(data)
          },
          error: function(jqXHR) {
            alert("发生错误:" + jqXHR.statusText);
          }
        })
      })

  },
  methods:{
    toDetail(idx){
      console.log(idx)
      let d = JSON.stringify(this.petInfo[idx])
      console.log(d)
      this.$router.push({
        path:'findPet',
        query:{
          data:d
        }
      })
    }
  }
};
</script>
<style scoped>
.community-page_header {
  padding: 25px 10px 0 10px;
  background-color: #25b6ed;
}
.community-page_header p {
  font-size: 25px;
  color: #fff;
}
.img-box {
  width: 35%;
  height:35%;
  margin-right: 10px;
}

.demo-carousel {
  display: flex;
  padding-top: 7px;
  justify-content: flex-start;
  padding: 7px 11px;
}
.info {
  text-align: left;
  padding: 4px;
  font-size: 15px;
  width: 100%;
}
span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
.label {
  width: 80%;
}

/*动态*/
.apart-box {
  background-color: #f1f3f4;
  height: 10px;
  padding: 0 -150px;
}
.trend-body {
  padding: 0 11px;
}
.trend-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 11px;
}
.header-img {
  width: 11%;
  height: 11%;
  border-radius: 100%;
}
.info-box{
  width: 60%;
}
.name_time {
  margin-left: 5px;
  text-align: left;
}
.trend-body_content {
  text-align: left;
  font-size: 18px;
}
.trend-body_img-box {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.trend-body_img {
  width: 60%;
  height: 60%;
  margin-left: 0.33%;
  margin-bottom: 1px;
}
.trend-footer {
  display: flex;
  justify-content: flex-start;
  padding: 20px 11px 8px 11px;
  margin-left: -10px;
  align-items: center;
}
.logo-box {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
  margin-right: 4px;
}

.button-box {
  margin-left: 10px;
}
.share-logo {
  background-image: url(../assets/share-logo.png);
}
.comment-logo {
  background-image: url(../assets/comment-logo.png);
}
.thumb-logo {
  background-image: url(../assets/thumb-logo.png);
}
.collect-logo {
  background-image: url(../assets/collect-logo.png);
}
#thumb {
  padding-right: 12px;
  flex: 1;
  text-align: right;
}
.community-page_footer {
  border-top: 1px solid #d8d8d8;
  padding: 8px 0 3px 0;
}
.addButton-box{
    position: fixed;
    bottom: 60px;
    right: 20px;
}
.addButton{
    background-image:url("../assets/add-btn.png");
    background-size: cover;
    height: 40px;
    width: 40px;
    background-color:#23a8f2;
    border-radius:100%;
}
.addButton-box a{
    display: inline-block;
    margin-right: 5px;
}
</style>
