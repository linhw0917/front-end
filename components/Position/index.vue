<template>
	<select v-model="value" class="position-select">
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
		name:'Position',
		data() {
	        return {
	          options: [{
	            value: '鼓楼区',
	            label: '鼓楼区'
	          }, {
	            value: '台江区',
	            label: '台江区'
	          }, {
	            value: '仓山区',
	            label: '仓山区'
	          }, {
	            value: '马尾区',
	            label: '马尾区'
	          }, {
	            value: '长乐区',
	            label: '长乐区'
	          }, {
	            value: '晋安区',
	            label: '晋安区'
	          }, {
	            value: '福清县',
	            label: '福清县'
	          }, {
	            value: '连江县',
	            label: '连江县'
	          }, {
	            value: '闽侯县',
	            label: '闽侯县'
	          },{
	            value: '罗源县',
	            label: '罗源县'
	          },{
	            value: '永泰县',
	            label: '永泰县'
	          },{
	            value: '闽清县',
	            label: '闽清县'
	          },{
	            value: '平潭县',
	            label: '平潭县'
	          }],
	          value: ''
	        }
	    }
	}
</script>

<style>
	.position-select{
		position: relative;
		left: 11.75vw;
		top: -1.625vh;
		width: 100%;
		height: 6.75vh;
		background-color: rgba(130, 201, 223, 1);
		color: rgba(108, 103, 103, 1);
		font-size: 3vh;
		font-family: Microsoft Yahei;
	}
</style>
