import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    habits: JSON.parse(localStorage.getItem('habits')) || [],
    categories: JSON.parse(localStorage.getItem('categories')) || [],
    selectedDay: JSON.parse(localStorage.getItem('selectedDay')) || null,
    selectedCategories:
      JSON.parse(localStorage.getItem('selectedCategories')) || [],
    habitsByDay: JSON.parse(localStorage.getItem('habitsByDay')) || {},
  }),
  actions: {
    addHabit({ habit, category }) {
      this.habits.push({ habit, category });
      localStorage.setItem('habits', JSON.stringify(this.habits));
    },
    addCategory(category) {
      this.categories.push(category);
      localStorage.setItem('categories', JSON.stringify(this.categories));
    },
    setSelectedDay(day) {
      this.selectedDay = day;
      localStorage.setItem('selectedDay', JSON.stringify(this.selectedDay));
    },
    addHabitToDay({ day, habit, category }) {
      if (!this.habitsByDay[day]) {
        this.habitsByDay[day] = [];
      }
      this.habitsByDay[day].push({ habit, category });
      localStorage.setItem('habitsByDay', JSON.stringify(this.habitsByDay));
    },
    setSelectedCategories(categories) {
      this.selectedCategories = categories;
      localStorage.setItem(
        'selectedCategories',
        JSON.stringify(this.selectedCategories),
      );
    },
    removeCategory(category) {
      const index = this.categories.indexOf(category);
      if (index !== -1) {
        this.categories.splice(index, 1);
      }

      for (const day in this.habitsByDay) {
        this.habitsByDay[day] = this.habitsByDay[day].filter(
          habit => habit.category !== category,
        );
      }

      localStorage.setItem('categories', JSON.stringify(this.categories));
      localStorage.setItem('habitsByDay', JSON.stringify(this.habitsByDay));
    },
  },
  getters: {
    getHabitsByCategoryForSelectedDay() {
      const habitsByCategory = {};

      const habitsForSelectedDay = this.habitsByDay[this.selectedDay] || [];

      habitsForSelectedDay.forEach(habit => {
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
  },
  persist: true,
});
