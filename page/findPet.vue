<template>
<div class="findPet-page">
    <div class="findPet-page_header">
        <span class="back-logo" @click="backTocommounty"></span>
        <p>寻宠启示</p>
    </div>
    <div class="container">
        <img class="header-img" :src="himg" />
        <div class="info-box">
            <div class="info"><span class="label">种类：</span>{{kind}}</div>
            <div class="info"><span class="label">品种：</span>{{breed}}</div>
            <div class="info"><span class="label">昵称：</span>{{nickname}}</div>
            <div class="info"><span class="label">联系方式：</span>{{mobile}}</div>
            
        </div>
    </div>
    <div class="rest-info">
        <div class="info"><span class="label">关键特征：</span>{{characters}}</div>
        <div class="info"><span class="label">丢失地点：</span>{{area}}</div>
    </div>
    <div class="detail">
        <span class="label">详情：</span>
        {{infos}}
    </div>
    <Button class="contact-btn">联系失主</Button>
    
</div>    
</template>
<script>
export default {
    data(){
        return{
            himg:'',
            kind:'',
            breed:'',
            nickname:'',
            mobile:'',
            characters:'',
            area:'',
            infos:''
        }
    },
    
    methods:{
        backTocommounty(){
            this.$router.push({
                path:'community'
            })
        }
    },
    created(){
        let data = this.$route.query.data
        data = JSON.parse(data)
        console.log(data)
        this.himg = data["himg"]
        this.kind = data["class"]
        this.breed = data["breed"]
        this.nickname = data["nickname"]
        this.mobile = data["mobile"]
        this.characters = data["characters"]
        this.area = data["area"]
        this.infos = data["infos"]
        
    }
}
</script>
<style scoped>
.findPet-page{
    margin-bottom: 80px; 
}
.findPet-page_header{
    padding: 25px 10px 0 10px;
    background-color:#25b6ed;
}
.findPet-page_header p{
    font-size: 25px;
    margin-right:30px;
    color: #fff; 
}
.back-logo{
    display: inline-block;
    background-image: url("../assets/back-logo.png");
    background-size:cover;
    width: 30px; 
    height: 30px;
    float: left;
}
.container{
    display: flex;
    padding: 20px 15px;
}
.header-img{
    width: 40%;
	height:40%;
}
.info-box{
    margin-left: 15px; 
    width: 60%;
}
.info{
    font-size:16px; 
    padding: 4px 0;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    
}
.rest-info{
    padding: 0 15px;
}
.label{
    color: #25b6ed;
}
.detail{
    font-size: 16px;
    margin: 30px 15px;
    padding: 11px 0;
    border-top: 1px solid #d8d8d8; 
    border-bottom: 1px solid #d8d8d8; 
}
.contact-btn{
    width: 120px;
    height: 30px;
    border-radius: 15px; 
}

</style>
