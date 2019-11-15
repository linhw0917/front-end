<template>
	<div class="forget-box">
		<img src="../../../assets/picture/manage/back.png" @click="handleRouterbacklogin" class="forget-back"></img>
		<p class="forget-title">验证邮箱</p>
		<p class="forget-texttel">邮箱</p>
		<input class="forget-inputtel" placeholder="请输入邮箱"/>
		<input class="forget-change" placeholder="请输入验证码" />
		<div class="forget-get-btn" @click="checking" v-if="state===false">获取验证码</div>
		<div class="forget-get-btn forget-time" v-if="state===true">倒计时{{ currentTime }}s</div>
		<button class="forget-next" @click="handleRouterchange">下一步</button>
	</div>
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
		beforeCreate () {
		    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 100px ')
		},
		beforeDestroy () {
		    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 100px ')
		},
		methods: {
			handleRouterchange(){
				this.$router.push('/loginning/change')
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
	.forget-box{
		position: relative;
	}
	.forget-title{
		position: absolute;
		left:50%;
		transform:translate(-50%);
		top: 5.125rem;
		width: 60%;
		height: 3.75rem;
		color: rgba(16, 16, 16, 1);
		font-size: 2.25rem;
		font-family: PingFangSC-regular;
	}
	.forget-texttel{
		position: absolute;
		left: 36px;
		top: 196px;
		width: 64px;
		height: 23px;
		color: rgba(16, 16, 16, 1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.forget-inputtel{
		position: absolute;
		left: 110px;
		top: 187px;
		width: 60%;
		height: 40px;
		line-height: 23px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(70, 65, 70, 1);
		font-size: 16px;
		text-align: center;
		font-family: Roboto;
		border:none;
	}
	.forget-change{
		position: absolute;
		left: 29px;
		top: 247px;
		width: 180px;
		height: 45px;
		line-height: 23px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 16px;
		text-align: center;
		font-family: Roboto;
		border:none;
	}
	.forget-get-btn{
		position: absolute;
		left: 219px;
		top: 246px;
		width: 113px;
		height: 45px;
		line-height: 42px;
		background-color: rgba(104, 189, 223, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 15px;
		text-align: center;
		font-family: Roboto;
	}
	.forget-next{
		position: absolute;
		left: 70px;
		top: 342px;
		width: 60%;
		height: 40px;
		line-height: 23px;
		border-radius: 10px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(70, 65, 70, 1);
		font-size: 16px;
		text-align: center;
		font-family: Roboto;
	}
	.forget-get-btn.forget-time{
		background: #a7b6d0;
	}
	.forget-back{
		position:absolute;
		left: 1.5rem;
		top: 2.5rem;
		width: 10%;
	}
</style>
