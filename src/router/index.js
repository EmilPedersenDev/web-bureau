import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/russian-bear",
    name: "RussianBear",
    component: () => import("../views/RussianBear.vue"),
  },
  {
    path: "/glenfiddich",
    name: "Glenfiddich",
    props: true,
    component: () => import("../views/Glenfiddich.vue"),
  },
  {
    path: "/rocking-the-daisies",
    name: "RockingTheDaisies",
    component: () => import("../views/RockingTheDaisies.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/mount-vernon",
    name: "MountVernon",
    component: () => import("../views/MountVernon.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
