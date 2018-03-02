import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-tutorial-61e19.firebaseio.com/data.json";

new Vue({
  el: "#app",
  render: h => h(App)
});
