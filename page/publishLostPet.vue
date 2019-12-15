<template>

<div class="lostPet-page">
    <div class="lostPet-page_header">
        <span class="back-logo" @click="backTocommounty"></span>
        <p>寻宠启示</p>
    </div>
    <div class="info-box">
        <div class="info"><span class="text">种类：</span>
            <Select v-model="kind" style="width:200px">
                <Option v-for="item in data" :value="item" :key="item">{{ item }}</Option>
            </Select>
        </div>
        <div class="info"><span class="text">品种：</span>
            <Input v-model="breed" placeholder="请输入品种..." clearable style="width: 200px" />
        </div>
        <div class="info"><span class="text">昵称：</span>
            <Input v-model="nickname" placeholder="请输入昵称..." clearable style="width: 200px" />
        </div>
        <div class="info"><span class="text">联系方式：</span>
            <Input v-model="tel" placeholder="请输入联系方式..." clearable style="width: 200px" />
        </div>
        <div class="info"><span class="text">丢失地点：</span>
            <Input v-model="area" placeholder="请输入丢失地点..." clearable style="width: 200px" />
        </div>
        <div class="info"><span class="text">关键特征：</span>
            <Input v-model="feature" placeholder="请输入关键特征..." clearable style="width: 200px" />
        </div>
        
        <Upload
     
      ref="upload"
      :format="['jpg','jpeg','gif','png']"
      :max-size="5000"
      :before-upload="handleUpload"
      action="/"
    >
      <Button icon="ios-cloud-upload-outline" >上传图像</Button>
    </Upload>
    <div style="font-size:15px;">{{ file.name }}</div>
    </div>
    <div class="rest-info">
       <div class="rest-text">
           详细信息：
       </div>
        <div class="info">
        <Input
        v-model="detail"
        type="textarea"
        :autosize="{minRows: 5,maxRows: 10}"
        placeholder="请输入详情..."
      />
        </div>
    </div>
    <Button class="publish-btn" @click="handlePublish">发布</Button>
</div>

</template>
<script>
export default {
    data(){
        return{
            data:["狗","猫","兔子","两栖爬行","鱼","水族","宠物鸟","虫宠","宠物鼠","宠物貂","其他"],
            kind:'',
            breed:'',
            nickname:'',
            tel:'',
            area:'',
            feature:'',
            detail:'',
            file:'',
        }
    },
    methods:{
        backTocommounty(){
            this.$router.push({
                path:'community'
            })
        },
        handleUpload(file){
            if(file.type == "image/jpeg" || file.type == "image/jpg" || file.type == "image/png" || file.type == "image/gif"){
                this.file = file;
                
            }
            else{
                console.log(1)
                this.$Message.info("文件格式错误!")
            }
            return false;
        },
        handlePublish(){
            var data = new FormData()

            if(this.kind == ""){
                this.$Message.info("请选择种类!")
                return;
            }
            if(this.breed == ""){
                this.$Message.info("请填写种类！")
                return;
            }
            if(this.tel == ""){
                this.$Message.info("请填写联系方式！");
                return;
            }
            if(this.file == ""){
                this.$Message.info("请上传图片！");
                return;
            }
            let u_id = window.localStorage.getItem("u_id")
           

            data.append("u_id",u_id)
            data.append("class",this.kind)
            data.append("breed",this.breed)
            data.append("nickname",this.nickname)
            data.append("mobile",this.tel)
            data.append("area",this.area)
            data.append("characters",this.feature)
            data.append("infos",this.detail)
            data.append("uploadFile",this.file)
            console.log('data', data)
            $.ajax({
                type: "POST",
                url: "https://www.achaonihao.com/pethome/community/lostPetPublish.php",
                
                data: data,
                contentType: false,
                processData: false,
                success: (data)=>{
                   
                    this.$Message.success("发布成功!")
                    this.$router.push({
                        path:'/community'
                    })
                },
                error: function(jqXHR) {
                    console.log(jqXHR)
                    alert("发生错误:" + jqXHR.statusText);
                }
            })
                

        }
    }
}
</script>
<style scoped>
.lostPet-page{
    margin-bottom: 80px; 
}
.lostPet-page_header{
    padding: 25px 10px 0 10px;
    background-color:#25b6ed;
}
.lostPet-page_header p{
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
.rest-info{
     padding: 12px 41px;
}
.info-box{
    padding: 12px 11px;
}
.info{
    margin: 5px 0;
}
.text{
    display: inline-block;
    color: #25b6ed;
    width: 60px;
    text-align: right;
}
.rest-text{
    color: #25b6ed;
    width: 100%;
    text-align: left;
}
.publish-btn{
    width: 120px;
    height: 30px;
    border-radius: 15px; 
}
</style>