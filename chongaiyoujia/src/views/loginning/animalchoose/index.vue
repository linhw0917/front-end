<template>
	<center><div class="animalchoose-box">
		<img src="../../../assets/picture/manage/back.png" @click="handleRouterbackusermassage" class="animalchoose-back"></img>
		<div class="animalchoose-title">感兴趣的宠物</div>
		<Chooseanimal ref="chooseanimal"/>
		<p @click="handleRoutertocenter" size="small" round class="animalchoose-button">确定</p>
	</div></center>
</template>

<script>
	import Chooseanimal from '@/components/Chooseanimal';
	export default{
		beforeCreate () {
		    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 100px ')
		},
		components : {
		    Chooseanimal
		},
		methods:{
			handleRoutertocenter(){
				this.$router.push('/center');
			},
			handleRouterbackusermassage(){
				this.$router.go(-1)
			}
		},
		beforeDestroy () {
		    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(https://i.niupic.com/images/2019/11/09/_2.jpeg);background-size: cover;background-repeat:no-repeat;background-position-y: 100px ')
		}
	}
</script>

<style>
	.animalchoose-box{
		margin-top: 5rem;
	}
	.animalchoose-title{
		margin:0 auto;
		width: 60%;
		height: 4.6875rem;
		line-height: 5rem;
		border-radius: 1.25rem;
		background-color: rgba(37, 182, 237, 0.6);
		text-align: center;
		border: 1px solid rgba(187, 187, 187, 1);
		color: #FFFFFF;
		font-size: 1.75rem;
	}
	.animalchoose-button{
		position: absolute;
		top:600px;
		width: 30%;
		height: 42px;
		border-radius: 10px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 28px;
		text-align: center;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(187, 187, 187, 1);
		left:50%;
		transform:translate(-50%);
	}
	.animalchoose-back{
		position: fixed;
		left: 30px;
		top: 30px;
		width: 10%;
	}
</style>
