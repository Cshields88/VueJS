// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
	apiKey: "AIzaSyDRcdd7DB8LKltSdj7o7lJ4ABqXszPc294",
	authDomain: "auth-tutorial-6b484.firebaseapp.com",
	databaseURL: "https://auth-tutorial-6b484.firebaseio.com",
	projectId: "auth-tutorial-6b484",
	storageBucket: "",
	messagingSenderId: "1077069561188"
};



firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
