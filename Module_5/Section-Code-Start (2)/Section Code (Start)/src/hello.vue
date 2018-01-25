<template>
	<div>
		<h3>Server Status: {{status}}</h3>
		<hr>
		<button @click="changeStatus"></button>
	</div>
</template>
<script>
export default {
	data (){
		return {
			status: critical
		}
	},
	methods: {
		changeStatus(){
			this.status = 'Normal';
		}
	}
}
</script>
