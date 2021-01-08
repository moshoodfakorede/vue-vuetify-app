import Vue from "vue";
import VueRouter from "vue-router";
import goTo from 'vuetify/es5/services/goto'
import Tasks from "../views/Tasks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${process.env.VUE_APP_NAME} - ${to.name}`
    next();
});

router.afterEach(() => {
    goTo(0, { duration: 0 })
});

export default router;
