import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        habits: [],
        categories: [],
        selectedDay: null,
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
    },
    getters: {
        getHabitsForSelectedDay() {
            return this.habitsByDay[this.selectedDay] || []
        }
    }
})