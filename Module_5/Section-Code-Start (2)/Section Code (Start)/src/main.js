import Vue from 'vue'
import App from './App.vue'
import hello from './hello.vue'

Vue.component('app-server-status', hello);

new Vue({
	el: '#app',
	render: h => h(App)
})
