new Vue ({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'http://www.google.com',
		
	},
	computed:{
		output (){
			return this.counter > 5 ? 'Greater Than 5' : 'Smaller Than 5';
		}
	},
	methods: {
		sayHello: function(){
			return 'Hello';
		}

	}

})