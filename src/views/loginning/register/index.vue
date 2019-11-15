<template>
	<center><div class="register-box">
		<img src="../../../assets/picture/manage/back.png" @click="handleRouterbacklogin" class="register-back"></img>
		<div class="register-title">用户注册</div>
		<div class="register-form">
			<p><input v-model="inputtel" class="register-inputtel" placeholder-class placeholder="请输入邮箱" /></p>
			<div class="register-check">
				<input v-model="inputcheck" class="register-inputcheck" placeholder-class placeholder="请输入验证码"/>
				<div class="register-checking " @click="checking" v-if="state===false">获取验证码</div>
				<p class="register-checking register-time" v-if="state===true">倒计时{{ currentTime }}s</p>
			</div>
		</div>
		<button @click="handleRouterusermassage" class="register-btn">确定</button>
	</div></center>
</template>

<script>
	import axios from 'axios';
	//axios.defaults.baseURL = "https://www.achaonihao.com";
	export default {
		data() {
			return {
				state: false,		//是否开启倒计时
				totalTime: 60,		//总时间，单位秒
				recordingTime: 0, 	//记录时间变量
				currentTime: 0, 	//显示时间变量
				inputtel:'',//邮箱号
				inputcheck:'',//验证码
				postinputcheck:''
			}
		},
		beforeCreate () {
		    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 100px ')
		},
		beforeDestroy () {
		    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 100px ')
		},
		methods: {
			handleRouterusermassage(){
				if(this.inputtel.length<=0)
					this.$message.error('邮箱不能为空!')
				else{
						if(this.postinputcheck!==0&&this.postinputcheck!==1&&this.postinputcheck!=='')	{
							if(this.inputcheck===this.postinputcheck){
								this.$router.push({path:'/loginning/usermassage',query:{
									email:this.inputtel}})
							}
						}
						else if(this.postinputcheck===0){
							this.$message.error('发送邮件失败！');
						}
						else if(this.postinputcheck===1){
							this.$message.error('邮箱已注册！');
						}
				}
			},
			handleRouterbacklogin(){
					this.$router.go(-1)
			},
			/*emailpost(){
				var inputemail=this.inputtel;
				this.$axios.post("'/email/123.php'",{
					email:'inputemail'
				}).then((res)=>{
						console.log(res);
				});
			},*/
			checking() {
				var inputemail=this.inputtel;
				this.$axios.post('/pethome/email/123.php',{
					email:inputemail
				}).then((res)=>{
						this.postinputcheck=res.data;
						console.log(res);	
						console.log(res.data);	
						//把显示时间设为总时间
						this.currentTime = this.totalTime;
						//开始倒计时
						this.state = true;
						//执行倒计时
						this.checkingTime();
				});
			},
			checkingTime(){
				let that = this;
				//判断是否开启
				if(this.state){
					//判断显示时间是否已到0，判断记录时间是否已到总时间
					if(this.currentTime > 0 && this.recordingTime <= this.totalTime){
						//记录时间增加 1
						this.recordingTime = this.recordingTime + 1;
						//显示时间，用总时间 - 记录时间
						this.currentTime = this.totalTime - this.recordingTime;
						//1秒钟后，再次执行本方法
						setTimeout(() => { 	
							//定时器内，this指向外部，找不到vue的方法，所以，需要用that变量。
							that.checkingTime();
						}, 1000)
					}else{
						//时间已完成，还原相关变量
						this.state = false;		//关闭倒计时
						this.recordingTime = 0;	//记录时间为0
						this.currentTime = this.totalTime;	//显示时间为总时间
					}
				}else{
					//倒计时未开启，初始化默认变量
					this.state = false;
					this.recordingTime = 0;
					this.currentTime = this.totalTime;
				}
			}
		}
	}
</script>

<style>
.register-box{
	margin-top: 12vh;
}
.register-title{   /*用户注册标题*/
	margin:0 auto;
	width: 50%;
	border-radius: 20px;
	background-color: rgba(37, 182, 237, 0.8);
	text-align: center;
	border: 1px solid rgba(187, 187, 187, 1);
	color: white;
	font-size: 5.25vh;
	line-height:12.25vh;
}
	.register-form{
		
	}
	.register-inputtel{
		margin-top: 6.5vh;
		width: 80vw;
		height: 6.8125vh;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(70, 65, 70, 1);
		font-size: 2.5vh;
		text-align: center;
		font-family: Roboto;
		border: none;
	}
	.register-check{
		display: flex;
		padding: 5.1875vh;
	}
	.register-inputcheck{
		width: 60vw;
		height: 6.8125vh;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 2.5vh;
		text-align: center;
		font-family: Roboto;
		border:none;
	}
	.register-checking{
		width: 40vw;
		height: 6.8125vh;
		line-height: 6.8125vh;
		background-color: rgba(104, 189, 223, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 2.5vh;
		text-align: center;
		font-family: Roboto;
	}
	.register-checking.register-time{
		background: #a7b6d0;
	}
	/*按钮点击效果*/
	.register-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
	.register-btn{
		width: 20%;
		height: 4.875vh;
		border-radius: 4px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 2vh;
		text-align: center;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(187, 187, 187, 1);
	}
	.register-back{
		position: fixed;
		left: 30px;
		top: 30px;
		width: 10%;
	}
</style>

