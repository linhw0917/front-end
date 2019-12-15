<template>
  <div class="publishTrend-page">
    <div class="publishTrend-page_header">
      <span class="back-logo" @click="backTocommounty"></span>
      <span class="publish-logo" @click="upload"></span>
      <p>发布动态</p>
    </div>
    <div class="content">
      <Input
        v-model="value"
        type="textarea"
        :autosize="{minRows: 5,maxRows: 10}"
        placeholder="Enter something..."
      />
    </div>
    <Upload
      multiple
      ref="upload"
      :format="['docx','doc','txt', 'pdf']"
      :max-size="5000"
      :before-upload="handleUpload"
      action="/"
    >
      <Button icon="ios-cloud-upload-outline">Upload images</Button>
    </Upload>
    <div>
      <ul class="file-list" v-for="(list,index) in files" :key="index">
        <li>
          文件名:
          <span style="font-size:15px;">{{ list.name }}</span>
          <Icon type="ios-close" size="20" style="float:right;" @click="delFileList(index)"></Icon>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      files: []
    };
  },
  methods: {
    backTocommounty() {
      this.$router.push({
        path: "community"
      });
    },
    handleUpload(file) {
      if(file.type == "image/jpeg" || file.type == "image/jpg" || file.type == "image/png" || file.type == "image/gif"){
            if (this.files.length >= 1) {
                this.$Message.info("最多只能上传1张图片!");
            } else {
                this.files.push(file);
            }
        }
        else{
            console.log(1)
            this.$Message.info("文件格式错误!")
        }
    },
    delFileList(index){
        let that = this;
        that.files.splice(index, 1);
    },
    upload() {
      if (this.value == "") {
        this.$Message.info("内容不能为空！");
        return;
      }
      var formData = new FormData();
      let u_id = window.localStorage.getItem("u_id")
      formData.append("u_id",u_id);
      formData.append("content", this.value);
      
      for (var i = 0; i < this.files.length; ++i) {
        formData.append("uploadFile", this.files[i]);
      }
      var that = this
      console.log(formData.get("uploadFile"))
      $.ajax({
        url: "https://www.achaonihao.com/pethome/community/affairPublish.php",
      
        type: "POST",
        async: false,
        data: formData,
        contentType: false,
        processData: false,
        
        success: function(data) {
              that.$Message.success("上传成功!")
			  console.log(data)
              that.$router.push("/community")
        },
        error: function(response) {
        console.log("err")
          console.log(response);
        }
      });
    }
  }
};
</script>
<style scoped>
.publishTrend-page {
  margin-bottom: 80px;
}
.publishTrend-page_header {
  padding: 25px 10px 0 10px;
  background-color: #25b6ed;
}
.publishTrend-page_header p {
  font-size: 25px;
  color: #fff;
}
.back-logo {
  display: inline-block;
  background-image: url("../assets/back-logo.png");
  background-size: cover;
  width: 30px;
  height: 30px;
  float: left;
}
.publish-logo {
  display: inline-block;
  background-image: url("../assets/publish-logo.png");
  background-size: cover;
  width: 30px;
  height: 30px;
  float: right;
}
.content {
  padding: 11px;
}
</style>