<template>
	<center><div class="usermassage-box">
		<div class="usermassage-title">个人信息</div>
		<ul class="usermassage-head">
		<li class="usermassage-text">头像</li>
		<li><Icon /></li>
		</ul>
		<ul class="usermassage-input">
			<li class="usermassage-text">昵称:</li>
			<li><Name ref="name"/></li>
		</ul>
	</div></center>
</template>

<script>
	import Icon from '@/components/Icon';
	import Name from '@/components/Name';
	export default {
		beforeCreate () {
		    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(@/assets/picture/back-ground/checkingbackground.jpeg);background-size: cover;background-position-y: 100px ')
		},
	    components : {
	        Icon,
			Name
	    },
		beforeDestroy () {
		    document.querySelector('body').setAttribute('style', 'position: relative;background-image: url(@/assets/picture/back-ground/checkingbackground.jpeg);background-size: cover;background-position-y: 100px ')
		}
	}
</script>

<style>
	.usermassage-title{
		position: relative;	
		top: 75px;
		width: 166px;
		height: 75px;
		line-height: 80px;
		border-radius: 20px;
		background-color: rgba(37, 182, 237, 0.6);
		text-align: center;
		border: 1px solid rgba(187, 187, 187, 1);
		color: #FFFFFF;
		font-size: 28px;
	}
	.usermassage-head{
		left: 20px;
		position: relative;
		display: flex;
		list-style-type:none;
	}
	.usermassage-text{
		left: 25px;
		top: 120px;
		height: 28px;
		color: rgba(70, 65, 70, 1);
		font-size: 24px;
		text-align: left;
		font-family: PingFangSC-regular;
		position: relative;
	}
	.usermassage-input{
		left: 20px;
		position: relative;
		display: flex;
		list-style-type:none;
	}
</style>
