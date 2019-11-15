<template>
	<input
	  class="Password-input"
	  v-model="input"
	  clearable>
	</input>
</template>

<script>
	export default {
		name:'Password',
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
	.Password-input{
		position: relative;
		left: -5.75vw;
		top: 0.625vh;
		width: 30%;
		height: 6.75vh;
		border-radius: 4px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(70, 65, 70, 1);
		text-align: left;
		font-family: Roboto;
		border:none;
	}
</style>

