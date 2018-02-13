import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
	bind(el, bind, vnode){
		el.style.backgroundColor = 'green';
	}
});

Vue.directive('text-color', {
	bind(el, bind){
		el.style.color = 'white';
	}
})

new Vue({
	el: '#app',
	render: h => h(App)
})
