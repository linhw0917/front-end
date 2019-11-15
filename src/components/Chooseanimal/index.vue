<template>
	<div class="choose-animal-box">
	<CheckboxGroup v-model="checked" class="choose-animal">
		    <img class="chooseanimal-dog-picture" src="../../assets/picture/manage/dog.png"></img>
	        <Checkbox class="chooseanimal-dog" label="dog">
	            <span class="chooseanimal-dog-text">{{dog}}</span>
	        </Checkbox>
			<img class="chooseanimal-cat-picture" src="../../assets/picture/manage/cat.png"></img>
	        <Checkbox class="chooseanimal-cat" label="cat">
	            <span class="chooseanimal-cat-text">{{cat}}</span>
	        </Checkbox>
			<img class="chooseanimal-yichong-picture" src="../../assets/picture/manage/ciwei.png"></img>
	        <Checkbox class="chooseanimal-yichong" label="yichong">
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
						checked:'12'
		            }
		        }
	  };
</script>

<style>
	.choose-animal{
		position: relative;
		margin-top: 1vh;
	}
	.chooseanimal-dog-picture{
		position: relative;
		left: 22.625vw;
	}
	.chooseanimal-dog-text{
		position: relative;
		color: rgba(37, 182, 237, 1);
		font-size: 3.75vh;
	}
	.chooseanimal-dog{
		position: relative;
		top:2.2vh;
		left: 0vw;
	}
	.chooseanimal-cat-picture{
		position: relative;
		top:25.25vh;
		left:-29.25vw;
	}
	.chooseanimal-cat-text{
		position: relative;
		color: rgba(37, 182, 237, 1);
		font-size: 3.75vh;
	}
	.chooseanimal-cat{
		position: relative;
		top:9vh;
		left: 29.25vw;
	}
	.chooseanimal-yichong-picture{
		position: relative;
		top:27.5vh;
		left: 0vw;
	}
	.chooseanimal-yichong-text{
		position: relative;
		color: rgba(37, 182, 237, 1);
		font-size: 3.75vh;
	}
	.chooseanimal-yichong{
		position: relative;
		top:28.75vh;
		left:-25.25vw;
	}
</style>