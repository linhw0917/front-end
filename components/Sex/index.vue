<template>
	 <select v-model="value" class="sex-select">
	    <option
	      v-for="item in options"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	    </option>
	</select>
</template>

<script>
	 export default {
			name:'Sex',
	          data() {
	                return {
	                  options: [{
	                    value: '0',
	                    label: '男'
	                  }, {
	                    value: '1',
	                    label: '女'
	                  }],
	                  value: ''
	                }
	          }
	     }
</script>

<style>
	.sex-select{
		position: relative;
		left: 11.75vw;;
		top: -1.625vh;
		width: 100%;
		height: 6.75vh;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(108, 103, 103, 1);
		font-size: 3vh;
		font-family: Microsoft Yahei;
	}
</style>
