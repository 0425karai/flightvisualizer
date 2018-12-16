import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Layout from "@/views/Layout";
import Result from "@/views/Result";
import Landing from "@/views/Landing";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: { name: "home" },
      children: [
        {
          path: "/home",
          name: "home",
          component: Home
        },
        {
          path: "/result",
          name: "result",
          component: Result
        },
        {
          path: "/landing",
          name: "landing",
          component: Landing
        }
      ]
    }
  ]
});

export default router;
