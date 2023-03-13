import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/chatGPTView",
  },
  {
    path: "/indexView",
    name: "indexView",
    component: () => import("../views/indexView/indexView.vue"),
  },
  {
    path: "/flowerView",
    name: "flowerView",
    component: () => import("../views/flowerView/flowerView.vue"),
  },
  {
    path: "/canvasView",
    name: "canvasView",
    component: () => import("../views/canvasView/canvasView.vue"),
  },
  {
    path: "/mixinView",
    name: "mixinView",
    component: () => import("../views/mixinView/mixinView.vue"),
  },
  {
    path: "/chatGPTView",
    name: "chatGPTView",
    component: () => import("../views/chatGPTView/chatGPTView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
