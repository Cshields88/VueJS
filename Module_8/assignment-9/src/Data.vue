<template>
	<div>
		<div 
		id="yes"
		@click="switched(true)"
		:class="{active: value}">Yes</div>
		<div 
		id="no"
		@click="switched(false)"
		:class="{active: !value}">No</div>
	</div>
</template>
<script>
export default{
	props: ['value'],
	methods:{
		switched(isOn){
			this.$emit('input', isOn)
		}
	}
}
</script>
<style sccoped>
#yes, #no{
	width: 40px;
	height: 20px;
	background-color: lightgrey;
	padding: 2px;
	display: inline-block;
	margin: 10px -2px;
	box-sizing: content-box;
	text-align: center;
	cursor:pointer;
}
#yes:hover, #yes.active{
	background-color: lightgreen;
}
#no:hover, #no.active{
	background-color: lightcoral;
}
</style>