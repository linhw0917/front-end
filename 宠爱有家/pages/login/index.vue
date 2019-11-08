<template>
	<div class="zai-box">
		<image src="../../static/picture/back-ground/title.png" mode='aspectFit' class="zai-logo"></image>
		<div class="zai-form">
			<input class="zai-input" placeholder-class placeholder="请输入手机号" />
			<input class="zai-input" placeholder-class password placeholder="请输入密码"/>
			<view class="zai-label">忘记密码？</view>
			<button class="zai-btn">立即登录</button>
			<navigator url="../zaizai-register/index" hover-class="none" class="zai-label">还没有账号？点此注册.</navigator>
		</div>
	</div>
</template>

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
		position: absolute;
		width: 100%;
		height: 200upx;
		top:100upx;
		margin-left: -100upx;
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
		background: #ff65a3;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
