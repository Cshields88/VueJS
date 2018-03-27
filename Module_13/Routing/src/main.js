import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter); //imports router package

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPostion) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }

    // return { x: 0, y: 700 };
  }
});

router.beforeEach((to, from, next) => {
  console.log("global beforeEach");
  next(); //allows routing action to continue
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
