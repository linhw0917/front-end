<template>
	<center>
	<div class="login-box">
		<div class="login-title-box">
			<img src="@/assets/picture/back-ground/title.png" mode='aspectFit' class="login-title"></image>
		</div>
		<div class="login-form">
			<p><input v-model="account" class="login-input-tel" placeholder-class placeholder="请输入手机号" /></p>
			<p><input v-model="password" class="login-input-password" placeholder-class password placeholder="请输入密码"/></p>
			<el-checkbox v-model="checked" class="login-checkbox">记住密码</el-checkbox>
		</div>
		<el-button @click="handleRoutercenter" type="primary" icon="el-icon-right" circle class="login-next"></el-button>
		<div class="login-button-box">
		<el-button @click="handleRouterregister" size="small" round class="login-button-register">用户注册</el-button>
		<el-button @click="handleRouterforget" size="small" round class="login-button-forget">忘记密码</el-button>
		</div>
	</div>
	</center>
</template>

<script>
	export default {
	        data () {
	            return {
					account:'',
					password:'',
	                checked: false,
	            }
	        },
			beforeCreate () {
			    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 6rem ')
			},
			beforeDestroy () {
			    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 6rem ')
			},
			methods:{
				handleRoutercenter(){
					/*this.ajax.post('接口',{
						account:this.account,
						password:this.password}).then(res=>{
							var res=res.data.status;
							if(status===0)
					})*/
					this.$router.push('/center');
				},
				handleRouterregister(){
					this.$router.push('/loginning/register');
				},
				handleRouterforget(){
					this.$router.push('/loginning/forget');
				}
			}
	}
</script>
<style>
.login-title-box{
	margin-top: 5rem;
}
.login-title{
	margin:0 auto;
	width: 70%;
}
.login-input-tel{
	margin:0 auto;
	height: 2.3rem;
	width: 60%;
	background-color: rgba(245, 243, 243, 1);
	border-radius: 10rem;
	text-align: center;
	border:none;
}
.login-input-password{
	margin-top:20px;
	height: 2.3rem;
	width: 60%;
	background-color: rgba(245, 243, 243, 1);
	border-radius: 10rem;
	text-align: center;
	border:none;
}
.login-checkbox{
	margin: 20px;
}
.login-next{
	background-color: rgba(37, 182, 237, 1);
}
.login-button-box{
	margin-top: 170px;
	margin-left: 80px;
	margin-right: 80px;
	margin-bottom: 20px;
}
.login-button-register{
	float: left;
	background-color: rgba(37, 182, 237, 1);
	color: #FFFFFF;
}
.login-button-forget{
	float: right;
	background-color: rgba(37, 182, 237, 1);
	color: #FFFFFF;
}
</style>
