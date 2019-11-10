<template>
	<center>
	<div class="login-box">
		<img src="@/assets/picture/back-ground/title.png" mode='aspectFit' class="login-title"></image>
		<div class="login-form">
			<p><input v-model="account" class="login-input" placeholder-class placeholder="请输入手机号" /></p>
			<p><input v-model="password" class="login-input" placeholder-class password placeholder="请输入密码"/></p>
			<el-checkbox v-model="checked" class="login-checkbox">记住密码</el-checkbox>
			<el-button @click="handleRoutercenter" type="primary" icon="el-icon-right" circle class="login-next"></el-button>
		</div>
		<el-button @click="handleRouterregister" size="small" round class="login-button">用户注册</el-button>
		<el-button @click="handleRouterforget" size="small" round class="login-button">忘记密码</el-button>
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
			    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 100px ')
			},
			beforeDestroy () {
			    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 100px ')
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
					this.$router.push('/loginning/register')
				},
				handleRouterforget(){
					this.$router.push('/loginning/forget');
				}
			}
	}
</script>
<style>
.login-title{
	position: relative;
	top: 20px;
	left:-10px;
	transform:scale(0.6)
}
.login-input{
	position: relative;
	top: -10px;
	height: 50px;
	width: 250px;
	background-color: rgba(245, 243, 243, 1);
	border-radius: 100px;
	line-height: 20px;
	text-align: center;
	margin-top: 20px;
	border:none;
}
.login-checkbox{
	position: relative;
	top:12px;
	left:12px;
}
.login-next{
	position: relative;
	top:62px;
	left:-42px;
	background-color: rgba(37, 182, 237, 1);
}
.login-button{
	position: relative;
	top:250px;
	background-color: rgba(37, 182, 237, 1);
	color: #FFFFFF;
}
</style>
