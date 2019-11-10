<template>
	<div class="main">
	    <Header title="个人主页" />
		<div class="center-card">
			
		</div>
		<div class="center-choss">
			    <ul>
			        <router-link tag="li" to="/animal-manage">
						<div class="center-inline">
			            <img src="../../assets/picture/center/manage.png" class="center-img">  宠物管理
						</div>
			        </router-link>
					<div class="link-down"></div>
			        <router-link tag="li" to="/collect">
						<div class="center-inline">
			            <img src="../../assets/picture/manage/collect.png" class="center-img">  收藏夹
						</div>
			        </router-link>
					<div class="link-down"></div>
			        <router-link tag="li" to="/interest">
						<div class="center-inline">
			            <img src="../../assets/picture/manage/interest.png" class="center-img">  感兴趣的动物
						</div>
			        </router-link>
					<div class="link-down"></div>
					<router-link tag="li" to="/set">
						<div class="center-inline">
					    <img src="../../assets/picture/manage/set.png" class="center-img">  设置
						</div>
					</router-link>
			    </ul>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header';
export default{
	name : 'center',
	components : {
	    Header
	},
	beforeCreate () {
	    document.querySelector('body').setAttribute('style', 'background-color: rgba(16, 16, 16, 0.08)')
	},
	beforeDestroy () {
	    document.querySelector('body').setAttribute('style', 'background-color: rgba(16, 16, 16, 0.08) ')
	}
}
</script>

<style>

.center-card{
	position:relative;
	top:50px;
	background-color: antiquewhite;
}
.center-choss{
	position:fixed;
	top:289px;
	width: 100%;
	background-color: white;
}
ul{
	list-style-type:none;
	position:relative;
	border-radius: 9px 9px 0 0;
}
ul li{
	line-height:53px;
}
.link-down {
	position:relative;
	left: 90px;
    width: 50%;
    height: 1px;
    border-top: solid rgba(187, 187, 187, 1) 2px;
}
.center-inline{
	position:relative;
	left:20px;
	font-size: 24px;
	display:inline;
}
.center-img{
	position:relative;
	top:20px;
}
</style>
