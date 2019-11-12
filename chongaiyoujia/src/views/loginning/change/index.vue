<template>
	<div class="change-box">
		<img src="../../../assets/picture/manage/back.png" @click="handleRouterbackforget" class="change-back"></img>
		<p class="change-title">修改密码</p>
		<p class="change-textin">输入密码</p>
		<input class="change-input" v-model="changetextin"/>
		<p class="change-textagain">再次确认密码</p>
		<input class="change-inputagain" v-model="changetextagain"/>
		<button class="change-next" @click="handleRoutercenter">完成</button>
	</div>
</template>

<script>
	export default {
	        data () {
	            return {
					changetextin:'',
					changetextagain:'',
	            }
	        },
			beforeCreate () {
			    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 6rem ')
			},
			beforeDestroy () {
			    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 6rem ')
			},
			methods:{
				handleRouterbackforget(){
						this.$router.go(-1)
				},
				handleRoutercenter(){
					/*this.ajax.post('接口',{
						account:this.account,
						password:this.password}).then(res=>{
							var res=res.data.status;
							if(status===0)
					})*/
					if(this.changetextin===this.changetextagain&&this.changetextin.length>=6){
						this.$router.push('/center');
					}
					else if(this.changetextin!==this.changetextagain){
						this.$message.error('两次密码输入不一致！');
					}
					else if(this.changetextin.length<6){
						this.$message.error('密码不能少于6个字符！');
					}
				}
			}
	}
</script>

<style>
	.change-box{
		position: relative;
	}
	.change-title{
		position: absolute;
		left: 45px;
		top: 5.25rem;
		width: 144px;
		height: 51px;
		color: rgba(16, 16, 16, 1);
		font-size: 36px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.change-textin{
		position: absolute;
		left: 45px;
		top: 196px;
		width: 93px;
		height: 23px;
		color: rgba(16, 16, 16, 1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.change-input{
		position: absolute;
		left: 130px;
		top: 189px;
		width: 200px;
		height: 30px;
		border-radius: 10px;
		text-align: left;
		border: none;
		background-color: rgba(37, 182, 237, 0.6);
	}
	.change-textagain{
		position: absolute;
		left: 45px;
		top: 238px;
		width: 96px;
		height: 23px;
		color: rgba(16, 16, 16, 1);
		font-size: 16px;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.change-inputagain{
		position: absolute;
		left: 150px;
		top: 234px;
		width: 200px;
		height: 30px;
		border-radius: 10px;
		text-align: left;
		border: none;
		background-color: rgba(37, 182, 237, 0.6);
	}
	.change-next{
		position: absolute;
		left: 48px;
		top: 285px;
		width: 280px;
		height: 34px;
		line-height: 20px;
		border-radius: 10px;
		background-color: rgba(37, 182, 237, 0.6);
		text-align: center;
		border: 1px solid rgba(187, 187, 187, 0.6);
	}
	.change-back{
		position:absolute;
		left: 24px;
		top: 32px;
		width: 31px;
		height: 31px;
		background-color: rgba(16, 16, 16, 1);
	}
</style>
