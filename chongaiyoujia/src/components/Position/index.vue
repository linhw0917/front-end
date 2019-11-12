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
	            value: '选项1',
	            label: '鼓楼区'
	          }, {
	            value: '选项2',
	            label: '台江区'
	          }, {
	            value: '选项3',
	            label: '仓山区'
	          }, {
	            value: '选项4',
	            label: '马尾区'
	          }, {
	            value: '选项5',
	            label: '长乐区'
	          }, {
	            value: '选项6',
	            label: '晋安区'
	          }, {
	            value: '选项7',
	            label: '福清县'
	          }, {
	            value: '选项8',
	            label: '连江县'
	          }, {
	            value: '选项9',
	            label: '闽侯县'
	          },{
	            value: '选项10',
	            label: '罗源县'
	          },{
	            value: '选项11',
	            label: '永泰县'
	          },{
	            value: '选项12',
	            label: '闽清县'
	          },{
	            value: '选项13',
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
