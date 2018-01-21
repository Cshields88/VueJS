import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	},
	{
		path: '/Login',
		name: 'Login',
		component: Login
	},
	{
		path: '/SignUp',
		name: 'SignUp',
		component: SignUp
	}
	]
})
