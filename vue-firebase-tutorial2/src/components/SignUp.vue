<template>
	<div class="sign-up">
		<input type="text" v-model="email" placeholder="Email"><br>
		<input type="password" v-model="password" placeholder="Password"><br>
		<button v-on:click="signUp">Sign Up</button>
		<span>Or go back to  <router-link to="/Login">login</router-link></span>
	</div>
</template>
<script>
export default{
	name: 'signUp',
	data (){
		return{
			email: '',
			password: ''
		}
	},
	methods: {
		signUp: function (){
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function(user){
				alert('Your account has been created!')
			},
			function(err){
				alert('Oops' + err.message)
			}
			);
		}
	}
}

</script>
<style scoped>
.sign-up{
	margin-top: 40px;
}

input{
	margin: 10px 0;
	width: 20%;
	padding: 15px;
}

button{
	cursor: pointer;
	margin-top: 20px;
	width: 10%;
}
span{
	margin-top: 40%;
	font-size: 13px;
}

</style>