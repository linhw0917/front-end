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
	                    value: '选项1',
	                    label: '男'
	                  }, {
	                    value: '选项2',
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
		left: 40px;
		top: -10px;
		width: 100%;
		height: 39px;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(108, 103, 103, 1);
		font-size: 18px;
		font-family: Microsoft Yahei;
	}
</style>
