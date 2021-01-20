import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage.vue';
import CardsView from '../views/CardsView.vue';
import CardsForward from '../views/CardsForward.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/about',
    name: 'CardsView',
    component: CardsView,
  },
  {
    path: '/forward',
    name: 'CardsForward',
    component: CardsForward,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
