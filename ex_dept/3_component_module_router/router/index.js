import MainContentView from "../views/MainContentView.js";
import DeptListView from "../views/DeptListView.js";
import DeptRegistFormView from "../views/DeptRegistFormView.js";
import DeptDetailView from "../views/DeptDetailView.js";

const routes = [
  {
    path: "/",
    component: MainContentView,
  },
  {
    path: "/index.html",
    bredirect: "/",
  },
  {
    path: "/dept/list",
    component: DeptListView,
  },
  {
    path: "/dept/regist",
    component: DeptRegistFormView,
  },
  {
    path: "/dept/detail/:deptNo",
    component: DeptDetailView,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
