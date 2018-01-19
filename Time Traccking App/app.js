import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
Vue.use(VueFire)

  // Initialize Firebase
  var config = {
  	apiKey: "AIzaSyCwoPaFPmSTBMqpTpgxLYzV7_ZXCd7Ed5Y",
  	authDomain: "book-list-app-5512b.firebaseapp.com",
  	databaseURL: "https://book-list-app-5512b.firebaseio.com",
  	projectId: "book-list-app-5512b",
  	storageBucket: "",
  	messagingSenderId: "1083345888745"
  };
  firebase.initializeApp(config);
  let db = app.database()
  let booksRef = db.ref('Books')

  new Vue({
  	el: '#app',
  	template: '<App/>',
  	components: {App},
  	firebase: {
  		books: booksRef
  	},
  	data (){
  		return {
  			message: 'Hello'
  		}
  	}
  })