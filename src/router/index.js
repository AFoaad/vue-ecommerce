import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminRoutes from '../routes/admin';

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const routes = [...baseRoutes, ...AdminRoutes];

export default new VueRouter({
  routes
})
