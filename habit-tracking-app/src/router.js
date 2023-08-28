import { createRouter, createWebHashHistory } from 'vue-router'
import Calendar from './components/main_content/calendar/Calendar.vue'
import AddHabit from './components/main_content/add_habits/AddHabit.vue'
import HabitTracking from './components/main_content/habit_tracking/HabitTracking.vue'


const routes = [
    {
        path: '/habitTracking',
        name: 'habitTracking',
        component: HabitTracking,
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: Calendar,
    },
    {
        path: '/addHabit',
        name: 'addHabit',
        component: AddHabit,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;