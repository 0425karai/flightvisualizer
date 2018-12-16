import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Layout from "@/views/Layout";
import Result from "@/views/Result";
import Photo from "@/views/Photo";
import Landing from "@/views/Landing";
import Concept from "@/views/Concept";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: { name: "landing" },
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
          path: "/photo/:planId",
          name: "photo",
          component: Photo,
          props: true
        },
        {
          path: "/landing",
          name: "landing",
          component: Landing
        },
        {
          path: "/Concept",
          name: "Concept",
          component: Concept
        }
      ]
    }
  ]
});

export default router;
