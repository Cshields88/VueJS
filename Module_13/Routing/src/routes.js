import User from "./components/user/User.vue"; //imports component
import Home from "./components/Home.vue";

export const routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "/user/:id", //this is what is placed at the end of the url
    component: User //What component needs to be loaded when directed to path
  }
];
