<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
export default{
	data(){
		return{
			heading: 'This is the heading',
			subtitle: 'This is the subtitle'
		}
	}
}

</script>

<style scoped>
div {
	border: 1px solid blue;
	background-color: lightblue;
	padding: 30px;
	margin: 20px auto;
	text-align: center
}
</style>