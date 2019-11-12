<template>
	<center><div class="register-box">
		<img src="../../../assets/picture/manage/back.png" @click="handleRouterbacklogin" class="register-back"></img>
		<div class="register-title">用户注册</div>
		<div class="register-form">
			<p><input v-model="inputtel" class="register-inputtel" placeholder-class placeholder="请输入手机号码" /></p>
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
	export default {
		data() {
			return {
				state: false,		//是否开启倒计时
				totalTime: 60,		//总时间，单位秒
				recordingTime: 0, 	//记录时间变量
				currentTime: 0, 	//显示时间变量
				inputtel:'',//手机号
				inputcheck:''//验证码
			}
		},
		onLoad() {
		
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
					this.$message.error('手机号不能为空!')
				else{
					this.$router.push('/loginning/usermassage')
				}
			},
			handleRouterbacklogin(){
					this.$router.go(-1)
			},
			checking() {
				//把显示时间设为总时间
				this.currentTime = this.totalTime;
				//开始倒计时
				this.state = true;
				//执行倒计时
				this.checkingTime();
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
	margin-top: 5rem;
}
.register-title{   /*用户注册标题*/
	margin: 0 auto;
	width: 50%;
	border-radius: 20px;
	background-color: rgba(37, 182, 237, 0.8);
	text-align: center;
	border: 1px solid rgba(187, 187, 187, 1);
	color: white;
	font-size: 1.75rem;
	line-height:5.25rem;
}
	.register-form{
		
	}
	.register-inputtel{
		margin-top: 40px;
		width: 80%;
		height: 45px;
		line-height: 23px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(70, 65, 70, 1);
		font-size: 16px;
		text-align: center;
		font-family: Roboto;
		border: none;
	}
	.register-check{
		display: flex;
		padding: 35px;
	}
	.register-inputcheck{
		width: 60%;
		height: 45px;
		line-height: 23px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 16px;
		text-align: center;
		font-family: Roboto;
		border:none;
	}
	.register-checking{
		width: 40%;
		height: 45px;
		line-height: 45px;
		background-color: rgba(104, 189, 223, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 15px;
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
		height: 30px;
		border-radius: 4px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 0.875rem;
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

