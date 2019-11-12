<template>
	<div class="choose-animal-box">
	<CheckboxGroup v-model="chooseanimal" class="choose-animal">
		    <img class="chooseanimal-dog-picture" src="../../assets/picture/manage/dog.png"></img>
	        <Checkbox class="chooseanimal-dog">
	            <span class="chooseanimal-dog-text">{{dog}}</span>
	        </Checkbox>
			<img class="chooseanimal-cat-picture" src="../../assets/picture/manage/cat.png"></img>
	        <Checkbox class="chooseanimal-cat">
	            <span class="chooseanimal-cat-text">{{cat}}</span>
	        </Checkbox>
			<img class="chooseanimal-yichong-picture" src="../../assets/picture/manage/ciwei.png"></img>
	        <Checkbox class="chooseanimal-yichong">
	            <span class="chooseanimal-yichong-text">{{yichong}}</span>
	        </Checkbox>
	</CheckboxGroup>
	</div>
</template>

<script>
	  export default {
		name:'Chooseanimal',
		data () {
		            return {
						dog:'狗狗',
						cat:'猫猫',
						yichong:'异宠',
						chooseanimal:[]
		            }
		        }
	  };
</script>

<style>
	.choose-animal{
		position: relative;
	}
	.chooseanimal-dog-picture{
		position: relative;
		top:0px;
		left: 10px;
	}
	.chooseanimal-dog-text{
		position: relative;
		color: rgba(37, 182, 237, 1);
		font-size: 28px;
	}
	.chooseanimal-dog{
		position: relative;
		top:20px;
		left: -100px;
	}
	.chooseanimal-cat-picture{
		position: relative;
		top:180px;
		left:-180px;
	}
	.chooseanimal-cat-text{
		position: relative;
		color: rgba(37, 182, 237, 1);
		font-size: 28px;
	}
	.chooseanimal-cat{
		position: relative;
		top:80px;
		left: 20px;
	}
	.chooseanimal-yichong-picture{
		position: relative;
		top:200px;
		left: -70px;
	}
	.chooseanimal-yichong-text{
		position: relative;
		color: rgba(37, 182, 237, 1);
		font-size: 28px;
	}
	.chooseanimal-yichong{
		position: relative;
		top:220px;
		left:-180px;
	}
</style>
