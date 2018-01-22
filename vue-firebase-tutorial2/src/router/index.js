import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '*',
		redirecct: '/Login'
	},
	{
		path: '/',
		redirect: '/Login'
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
	},
	{
		path: '/HelloWorld',
		name: 'HelloWorld',
		component: HelloWorld,
		requiresAuth: true
	}
	]
})
