import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DeptView from "@/views/DeptView.vue";
import DeptListView from "@/components/dept/DeptList.vue";
import DeptDetailView from "@/components/dept/DeptDetail.vue";
import DeptRegistView from "@/components/dept/DeptRegist.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/dept",
    name: "dept",
    component: DeptView,
    redirect: "/dept/list",
    children: [
      {
        path: "list",
        name: "list",
        component: DeptListView,
      },
      {
        path: "detail/:deptNo",
        name: "detail",
        component: DeptDetailView,
      },
      {
        path: "regist",
        name: "regist",
        component: DeptRegistView,
      },
    ],
  },
  // {
  //   path: "/index.html",
  //   bredirect: "/",
  // },
  // {
  //   path: "/dept",
  //   name: "dept",
  //   component: DeptView,
  //   redirect: "/dept/list",
  //   children: [
  //     {
  //       path: "/list",
  //       component: DeptListView,
  //     },
  //     {
  //       path: "/regist",
  //       component: DeptRegistFormView,
  //     },
  //     {
  //       path: "/detail/:deptNo",
  //       component: DeptDetailView,
  //     },
  //   ],
  // },
  // {
  //   path: "/dept/regist",
  //   component: DeptRegistFormView,
  // },
  // {
  //   path: "/dept/detail/:deptNo",
  //   component: DeptDetailView,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
