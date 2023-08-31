import { createRouter, createWebHashHistory } from 'vue-router'
import Calendar from './components/main_content/calendar/Calendar.vue'
import AddHabit from './components/main_content/add_habits/AddHabit.vue'
import DayHabits from './components/main_content/calendar/DayHabits.vue'
import AddCategory from './components/main_content/sidebar/sidebarComponents/AddCategory.vue'
import DeleteCategory from './components/main_content/sidebar/sidebarComponents/DeleteCategory.vue'


const routes = [
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
    {
        path: '/addCategory',
        name: 'addCategory',
        component: AddCategory,
    },
    {
        path: '/deleteCategory',
        name: 'deleteCategory',
        component: DeleteCategory,
    },
    {
        path: '/day/:dayName',
        name: 'day',
        component: DayHabits,
        props: true,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;