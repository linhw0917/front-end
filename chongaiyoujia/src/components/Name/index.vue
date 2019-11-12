<!-- 注册中昵称 -->
<template>
	<input
	  class="Name-input"
	  v-model="input"
	  clearable>
	</input>
</template>

<script>
	export default {
		name:'Name',
	    data() {
	      return {
	        input: ''
	      }
	    },
		methods:{
		}
		
	}
</script>

<style>
	.Name-input{
		position: relative;
		left: 20px;
		top: -10px;
		width: 80%;
		height: 44px;
		line-height: 23px;
		border-radius: 4px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(70, 65, 70, 1);
		font-size: 16px;
		text-align: left;
		font-family: Roboto;
		border:none;
	}
</style>
