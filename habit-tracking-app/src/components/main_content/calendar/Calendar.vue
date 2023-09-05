<script setup>
import { ref, computed, watch } from 'vue';
import { useAppStore } from '../store';
import { useRouter } from 'vue-router';
import {
  getCurrentDate,
  navigateToDay,
} from './calendar_components/useDateUtils';

const appStore = useAppStore();
const router = useRouter();
const selectedDay = ref('');
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const selectedCategories = ref('all');
const selectedCategoryCheckboxes = ref([]);
const computedSelected = ref('');
const mark = ref(true);

// Check if the selected day is in the future
const currentDate = new Date();

const isFutureDay = computed(() => {
  try {
    const selectedDate = new Date(selectedDay.value);
    return selectedDate > currentDate;
  } catch (error) {
    console.error('Error parsing selected date:', error);
    return false;
  }
});

// Compute habits grouped by category for the selected day
const habitsByCategoryForSelectedDay = computed(() => {
  const selectedCategories = appStore.getSelectedCategories;
  const habitsByCategory = {};

  const habitsForSelectedDay = appStore.habitsByDay[appStore.selectedDay] || [];

  habitsForSelectedDay.forEach(habit => {
    if (selectedCategories.includes(habit.category)) {
      if (!habitsByCategory[habit.category]) {
        habitsByCategory[habit.category] = [];
      }
      habitsByCategory[habit.category].push(habit);
    }
  });

  return habitsByCategory;
});

// Watch for changes in selectedCategoryCheckboxes and update appStore
watch(selectedCategoryCheckboxes, () => {
  appStore.setSelectedCategories(selectedCategoryCheckboxes.value);
  computedSelected.value = appStore.categories
    .filter(cat => selectedCategoryCheckboxes.value.includes(cat.name))
    .map(cat => cat.name)
    .join(', ');
});

// Watch for changes in selectedCategories and update selectedCategoryCheckboxes
watch(selectedCategories, newValue => {
  if (newValue === 'all') {
    selectedCategoryCheckboxes.value = appStore.getAllCategories;
  } else if (newValue === 'selected') {
    selectedCategoryCheckboxes.value = appStore.getSelectedCategories;
  }
});

// Select a day, update selectedDay, appStore, and router
const selectDay = day => {
  try {
    selectedDay.value = day;
    appStore.setSelectedDay(day);
    router.push({ name: 'day', params: { dayName: day.date } });
  } catch (error) {
    console.error('Error selecting day:', error);
  }
};

// Calculate and store the week's dates
const weekDates = getCurrentDate();

const navigateToDayHabits = day => {
  navigateToDay(router, day);
};

// Generate an array of objects representing days of the week
const days = daysOfWeek.map((day, index) => {
  return { name: day, date: weekDates[index].date };
});

// Watch for changes in the router's current route and trigger selectDay accordingly
watch(
  () => router.currentRoute.value.params.dayName,
  newDayName => {
    try {
      if (newDayName) {
        selectDay(newDayName);
      }
    } catch (error) {
      console.error('Error during route change:', error);
    }
  },
);
</script>

<template>
  <section id="calendar-section">
    <div class="calendar-container">
      <!-- Calendar Days -->
      <div
        class="col-sm"
        v-for="(day, index) in days"
        :key="index"
        @click="navigateToDayHabits(day)"
      >
        {{ day.name }}
        <br />
        {{ day.date }}
      </div>
    </div>

    <!-- Habit List -->
    <h3>{{ appStore.selectedDay }}</h3>
    <label v-show="isFutureDay"
      >You can't mark/unmark habits for future days.</label
    >
    <div class="habit-list">
      <!-- Choose Category -->
      <div id="select-category">
        <div class="category-options">
          <input
            type="radio"
            id="allCategories"
            value="all"
            v-model="selectedCategories"
          />
          <label class="option-label" for="allCategories">All Categories</label>

          <input
            type="radio"
            id="selected-categories"
            value="selected"
            v-model="selectedCategories"
          />
          <label class="option-label" for="selected-categories"
            >Selected Categories</label
          >
        </div>

        <div
          v-if="selectedCategories === 'selected'"
          class="category-checkboxes"
        >
          <label
            class="selected-label"
            v-for="newCat in appStore.categories"
            :key="newCat"
          >
            <input
              type="checkbox"
              v-model="selectedCategoryCheckboxes"
              :value="newCat"
            />
            {{ newCat }}
          </label>
        </div>
        <div
          v-else-if="selectedCategories === 'all'"
          class="category-checkboxes"
        ></div>
      </div>
      <div class="habit-row">
        <div
          class="habit-list-container"
          v-for="(habits, category) in habitsByCategoryForSelectedDay"
          :key="category"
        >
          <h2>{{ category.toUpperCase() }}</h2>
          <div
            v-for="(habitItem, habitIndex) in habits"
            :key="habitIndex"
            class="habit-item"
          >
            <input
              type="checkbox"
              class="checkbox"
              :id="habitItem.id"
              v-model="habitItem.checked"
              :disabled="isFutureDay"
            />

            <label
              v-show="mark"
              :for="habitItem.id"
              :class="{ 'checked-label': habitItem.checked }"
            >
              {{ habitItem.habit }}</label
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Calendar section styles */
#calendar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* Caledar days */
.calendar-container {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 0;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #7fa99b;
  border: 1px solid #ccc;
  white-space: nowrap;
}

.col-sm {
  border: 1px solid black;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  background-color: white;
}

.col-sm:hover {
  background-color: #fbf2d5;
}

/* Habit list */
.habit-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #394a51;
  min-height: 50vh;
  width: 100%;
  padding: 20px;
  gap: 20px;
}

.habit-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
}

.habit-list-container {
  flex-basis: calc(50% - 10px);
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  margin: 5px;
  margin-bottom: 20px;
  max-width: 49%;
  padding: 10px;
}

.habit-item {
  margin: 5px 0;
}

/* Choose category */
#select-category {
  background-color: #7fa99bb3;
  width: 100%;
  padding: 10px;
}
.option-label {
  margin: 10px;
}

.checked-label {
  text-decoration: line-through;
}

.checkbox {
  margin: 10px;
}

.selected-label {
  padding: 10px;
}

@media (width >= 767px) {
  .habit-list-container {
    flex-basis: calc(100% - 20px);
  }
}
</style>
