<template>
	<div class="login">
		<input type="text" placeholder="Email"><br>
		<input type="password" placeholder="Password"><br>
		<button>Login</button>
		<p>Don't have an account? <router-link to="/SignUp">You Can Create One Here</router-link></p>
	</div>
</template>
<script>
export default{
	name: 'login',
	data (){
		return{}
	},
	methods: {
		login (){
			this.$router.replace('HelloWorld')
		}
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