import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        habits: [],
        categories: [],
        selectedDay: null,
        selectedCategories: [],
        habitsByDay: {},
    }),
    actions: {
        addHabit({ habit, category }) {
            this.habits.push({ habit, category })
        },
        addCategory(category) {
            this.categories.push(category)
        },
        setSelectedDay(day) {
            console.log('Updated selected Day: ', day);
            this.selectedDay = day
        },
        addHabitToDay({ day, habit, category }) {
            if (!this.habitsByDay[day]) {
                this.habitsByDay[day] = []
            }
            this.habitsByDay[day].push({ habit, category })
        },
        setSelectedCategories(categories) {
            this.selectedCategories = categories;
        },
        removeCategory(category) {
            const index = this.categories.indexOf(category);
            if (index !== -1) {
                this.categories.splice(index, 1);
            }
        }
    },
    getters: {
        getHabitsByCategoryForSelectedDay() {
            const habitsByCategory = {};

            const habitsForSelectedDay = this.habitsByDay[this.selectedDay] || [];

            habitsForSelectedDay.forEach((habit) => {
                const { category } = habit;
                if (!habitsByCategory[category]) {
                    habitsByCategory[category] = [];
                }
                habitsByCategory[category].push(habit);
            });

            return habitsByCategory;
        },
        getSelectedCategories() {
            return this.selectedCategories;
        },
        getAllCategories() {
            return this.categories;
        },
    }
})