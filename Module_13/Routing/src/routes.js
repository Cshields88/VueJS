import User from "./components/user/User.vue"; //imports component
import UserStart from "./components/user/UserStart.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";
import Home from "./components/Home.vue";

export const routes = [
  {
    path: "",
    component: Home,
    name: 'home'
  },
  {
    path: "/user", //this is what is placed at the end of the url
    //What component needs to be loaded when directed to path
    component: User,
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ]
  }
];
