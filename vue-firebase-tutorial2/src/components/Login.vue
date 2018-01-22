<template>
	<div class="login">
		<input type="text" v-model="email" placeholder="Email"><br>
		<input type="password" v-model="password" placeholder="Password"><br>
		<button v-on:click="signIn">Login</button>
		<p>Don't have an account? <router-link to="/SignUp">You Can Create One Here</router-link></p>
	</div>
</template>
<script>
import firebase from 'firebase'
export default{
	name: 'login',
	data (){
		return{
			email: '',
			password: ''
		}
	},
	methods: {
		// login (){
		// 	this.$router.replace('HelloWorld')
		// },
		signIn (){
			firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
				function(user){
					alert('You Are Connected');
					console.log('Logged In')
				},
				function(err){
					alert('Oops ' + err.message);
					console.log('Cannot Log In')
				}
				);
		} //End signIn function
	}
}

</script>
<style scoped>
.login{
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
p{
	margin-top: 40px;
	font-size: 13px;
}
p a {
	text-decoration: underline;
	cursor: pointer;
}
</style>