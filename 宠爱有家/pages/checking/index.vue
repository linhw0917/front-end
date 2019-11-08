<template>
	<view class="zai-box">
		<view class="zai-logo"></view>
		<view class="zai-title">用户注册</view>
		<view class="zai-form">
			<input class="zai-input" placeholder-class placeholder="请输入手机号码" />
			<view class="zai-input-btn">
				<input class="zai-input" placeholder-class placeholder="请输入验证码"/>
				<view class="zai-checking" @click="checking" v-if="state===false">获取验证码</view>
				<view class="zai-checking zai-time" v-if="state===true">倒计时{{ currentTime }}s</view>
			</view>
			<button class="zai-btn">确定</button>
			<navigator url="../zaizai-login/index" open-type='navigateBack' hover-class="none" class="zai-label">已有账号，点此去登录.</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				state: false,		//是否开启倒计时
				totalTime: 60,		//总时间，单位秒
				recordingTime: 0, 	//记录时间变量
				currentTime: 0, 	//显示时间变量
			}
		},
		onLoad() {
	
		},
		methods: {
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
	.zai-box{
		padding: 250upx 100upx;
		position: relative;
		background-image:url(https://i.niupic.com/images/2019/11/06/_18.jpeg);
		background-repeat:no-repeat;
		background-size: cover;
		background-position-y: 200upx;
	}
	.zai-logo{
		margin:0 auto;
		margin-top: -30px;
		width: 166px;
		height: 75px;
		line-height: 20px;
		border-radius: 20px;
		background-color: rgba(37, 182, 237, 1);
		border: 1px solid rgba(187, 187, 187, 1);
	}
	.zai-title{
		position: absolute;
		top: 85upx;
		line-height: 360upx;
		font-size: 68upx;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
		color: rgba(255, 255, 255, 1);
		font-family: PingFangSC-regular;
	}
	.zai-form{
		margin-top: 150upx;
	}
	.zai-input{
		background: #e2f5fc;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
	}
	.input-placeholder, .zai-input{
		color: #94afce;
	}
	.zai-label{
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
	.zai-btn{
		border: 0;
		border-radius: 100upx;
		margin-top: 50upx;
		width: 80px;
		height: 35px;
		opacity: 0.57;
		border-radius: 4px;
		background-color: rgba(104, 189, 223, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		text-align: center;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(187, 187, 187, 1);
	}
	.zai-btn:after{
		border: 0;
	}
	
	/*验证码输入框*/
	.zai-input-btn{
		position: relative;
	}
	.zai-input-btn .zai-input{
		padding-right: 260upx;
	}
	.zai-checking{
		position: absolute;
		right: 0;
		top: 0;
		background: rgba(104, 189, 223, 1);
		color: #fff;
		border: 0;
		border-radius: 110upx;
		font-size: 36upx;
		margin-left: auto;
		margin-right: auto;
		padding-left: 28upx;
		padding-right: 28upx;
		box-sizing: border-box;
		text-align: center;
		text-decoration: none;
		line-height: 2.55555556;
		-webkit-tap-highlight-color: transparent;
		overflow: hidden;
		padding-top: 2upx;
		padding-bottom: 2upx;
	}
	.zai-checking.zai-time{
		background: #a7b6d0;
	}
	
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
