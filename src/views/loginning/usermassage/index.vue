<template>
	<center><div class="usermassage-box">
		<img src="../../../assets/picture/manage/back.png" @click="handleRouterbackregister" class="usermassage-back"></img>
		<div class="usermassage-title">个人信息</div>
		<div class="usermassage-tissue">
		<ul class="usermassage-head">
		<li class="usermassage-text-icon">头像</li>
		<li><Icon /></li>
		</ul>
		<ul class="usermassage-input">
			<li class="usermassage-text-name">昵称:</li>
			<li><Name ref="name"/></li>
		</ul>
		<ul class="uermassge-sex">
			<li class="usermassage-text-sex">性别:</li>
			<li><Sex ref="sex"/></li>
		</ul>
		<ul class="uermassge-position">
			<li class="usermassage-text-position">地区:</li>
			<li><Position ref="position"/></li>
		</ul>
		<ul class="usermassage-password">
			<li class="usermassage-text-password">密码:</li>
			<li><Password ref="password"/></li>
		</ul>
		</div>
		<button @click="handleRouteranimalchoose" class="usermassage-btn">下一步</button>
	</div></center>
</template>

<script>
	import Icon from '@/components/Icon';
	import Name from '@/components/Name';
	import Sex from '@/components/Sex';
	import Position from '@/components/Position';
	import Password from '@/components/Password';
	export default {
		data(){
			return{
				email:''
			}
		},
		beforeCreate () {
		    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-position-y: 100px ')
		},
	    components : {
	        Icon,
			Name,
			Sex,
			Position,
			Password
	    },
		created(){
			this.email=this.$route.query.email;
		},
		methods:{
			handleRouteranimalchoose(){
				console.log(this.email);
				if(this.$refs.name.input.length>8){
					this.$message.error('昵称不超过8个字符!');
				}
				else if(this.$refs.name.input.length<=0){
					this.$message.error('昵称不能为空!');
				}
				else if(this.$refs.password.input.length<6){
					this.$message.error('密码不得少于6个字符!');
				}
				else{
					this.$router.push({path:'/loginning/animalchoose',query:{
						email:this.email,
						name:this.$refs.name.input,
						sex:this.$refs.sex.value,
						position:this.$refs.position.value,
						password:this.$refs.password.input}
						})
				}
			},
			handleRouterbackregister(){
				this.$router.go(-1)
			}
		},
		beforeDestroy () {
		    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-position-y: 100px ')
		}
	}
</script>

<style>
	.usermassage-box{
		margin-top: 8vh;
	}
	.usermassage-title{
		margin: 0 auto;
		width: 50%;
		height: 10vh;
		line-height: 10vh;
		border-radius: 1.25rem;
		background-color: rgba(37, 182, 237, 0.6);
		border: 1px solid rgba(187, 187, 187, 1);
		color: #FFFFFF;
		font-size: 4vh;
	}
	.usermassage-tissue{
		margin-top: 8.125vh;
		font-size: 4.5vw;
		margin-left: 7.875vw;
	}
	.usermassage-head{
		display: flex;
		list-style-type:none;
	}
	.usermassage-input{
		display: flex;
		list-style-type:none;
	}
	.uermassge-sex{
		display: flex;
		list-style-type:none;
		margin-top: 3.25vh;
	}
	.uermassge-position{
		display: flex;
		list-style-type:none;
		margin-top: 3.25vh;
	}
	.usermassage-password{
		display: flex;
		list-style-type:none;
		margin-top: 3.25vh;
	}
	.usermassage-btn{
		margin-top: 8.625vh;
		margin-left: 19.25vw;
		width: 30%;
		height: 6.5vh;
		border-radius: 4px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 3vh;
		text-align: center;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(187, 187, 187, 1);
	}
	.usermassage-back{
		position: fixed;
		left: 30px;
		top: 30px;
		width: 10%;
	}
</style>
