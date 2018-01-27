<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>User Name: {{switchName()}}</p>
		<p>User Age: {{age}}</p>
		<button @click="resetName">Reset Name</button>
	</div>
</template>

<script>
import {eventBus} from '../main'
export default {
	

	props: ['name'], //data set from outside source, short for properties
	methods: {
		switchName (){
			return this.name.split('').reverse().join('');
		},
		resetName(){
			this.name = "chris";
		}
	},
	created (){
		eventBus.$on('ageWasEdited', (age) => {
			this.userAge = age;
		});
	}
}
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
