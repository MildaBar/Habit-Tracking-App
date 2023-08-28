import { createRouter, createWebHashHistory } from 'vue-router';
import HelpContent from './components/main/HelpContent.vue';
import Calendar from './components/main/Calendar/Calendar.vue';
import useAddHabit from './components/main/AddHabit/useAddHabit.vue';

const Home = { template: '<div>Home</div>' };

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/help',
    name: 'help',
    component: HelpContent,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
  },
  {
    path: '/addHabit',
    name: 'addHabit',
    component: useAddHabit,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
