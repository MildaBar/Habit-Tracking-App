import { defineStore } from "pinia";

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
    }),
    actions: {
        addCategory(category) {
            this.categories.push({
                name: category,
                habits: []
            })
        },
    },
});


export const useHabitStore = defineStore('habit', {
    state: () => ({
        habits: [],
    }),
    actions: {
        addHabit({ habit, category }) {
            const habitObject = {
                name: habit,
                category,
            };

            this.habits.push(habitObject);
        },
    },
});
