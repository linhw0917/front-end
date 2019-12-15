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
		left: 6.75vw;
		top: -1.625vh;
		width: 80%;
		height: 6.75vh;
		border-radius: 4px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(70, 65, 70, 1);
		text-align: left;
		font-family: Roboto;
		border:none;
	}
</style>
