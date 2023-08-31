<template>
      <section id="calendar-section">
    <div class="calendar-container">
      <!-- Calendar Days -->
      <div class="box" v-for="(day, index) in days" :key="index" @click="navigateToDayHabits(day)">
        {{ day.name }}<br>
        {{ day.date }}
      </div>

      <!-- Choose Category -->
      <div class="box">
        <h2>Habit list</h2>
        <div class="category-options">
          <input type="radio" id="allCategories" value="all" v-model="selectedCategories">
          <label for="allCategories">All Categories</label>

          <input type="radio" id="selected-categories" value="selected" v-model="selectedCategories">
          <label for="selected-categories">Selected Categories</label>
        </div>

        <div v-if="selectedCategories === 'selected'" class="category-checkboxes">
          <label v-for="newCat in appStore.categories" :key="newCat">
            <input type="checkbox" v-model="selectedCategoryCheckboxes" :value="newCat">
            {{ newCat }}
          </label>
        </div>
        <div v-else-if="selectedCategories === 'all'" class="category-checkboxes">
        </div>
      </div>
    </div>

    <!-- Habit List -->
    <div class="habit-list">
      <h3> Habits for {{ appStore.selectedDay }}</h3>
      <div class="habit-item" v-for="(habits, category) in habitsByCategoryForSelectedDay" :key="category">
        <h2> CATEGORY: {{ category }}</h2>
        <div v-for="(habitItem, habitIndex) in habits" :key="habitIndex" class="habit-item">
          <input type="checkbox" :id="habitItem.id" v-model="habitItem.checked">
          <label v-show="mark" :for="habitItem.id" :class="{ 'checked-label' : habitItem.checked }">{{ habitItem.habit }}</label>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useAppStore } from '../store';
import { useRouter } from 'vue-router';

const appStore = useAppStore()
const router = useRouter()
const selectedDay = ref('');
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const selectedCategories = ref('all');
const selectedCategoryCheckboxes = ref([]);
const allCategories = ref([]);
const computedSelected = ref('');
const mark = ref(true);

const habitsByCategoryForSelectedDay = computed(() => {
    const selectedCategories = appStore.getSelectedCategories;
    const habitsByCategory = {};

    const habitsForSelectedDay = appStore.habitsByDay[appStore.selectedDay] || [];

    habitsForSelectedDay.forEach((habit) => {
        if (selectedCategories.includes(habit.category)) {
            if (!habitsByCategory[habit.category]) {
                habitsByCategory[habit.category] = [];
            }
            habitsByCategory[habit.category].push(habit);
        }
    });

    return habitsByCategory;
});


if (selectedCategories.value === 'all') {
  computedSelected.value = 'All Categories';
} else if (selectedCategories.value === 'selected') {
  computedSelected.value = appStore.categories
      .filter(cat => selectedCategoryCheckboxes.value.includes(cat.name))
      .map(cat => cat.name)
      .join(', ');
}

watch(selectedCategoryCheckboxes, () => {
  appStore.setSelectedCategories(selectedCategoryCheckboxes.value);
  computedSelected.value = appStore.categories
      .filter(cat => selectedCategoryCheckboxes.value.includes(cat.name))
      .map(cat => cat.name)
      .join(', ');
});

watch(selectedCategories, (newValue) => {
  if (newValue === 'all') {
    selectedCategoryCheckboxes.value = appStore.getAllCategories;
  } else if (newValue === 'selected') {
    selectedCategoryCheckboxes.value = appStore.getSelectedCategories;
  }
});


const selectDay = (day) => {
  selectedDay.value = day;
  appStore.setSelectedDay(day);
  router.push({name: 'day', params: {dayName: day.date}})
};

const getCurrentDate = () => {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const today = new Date();
    const currentDay = today.getUTCDay();

    // Set the time zone offset to UTC+3 (EEST)
    const timeZoneOffset = 3 * 60; // Convert to minutes

    const weekDates = daysOfWeek.map((day, index) => {
        const offset = index - currentDay + 1;
        const date = new Date(today);

        // Adjust the date and time based on the time zone offset
        date.setUTCMinutes(date.getUTCMinutes() + timeZoneOffset);
        date.setUTCDate(today.getUTCDate() + offset);

        const dd = String(date.getUTCDate()).padStart(2, '0');
        const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
        const yyyy = date.getUTCFullYear();
        return { name: day, date: `${yyyy}-${mm}-${dd}` };
    });

    return weekDates;
}
const weekDates = getCurrentDate();

const days = daysOfWeek.map((day, index) => {
  return { name: day, date: weekDates[index].date };
});

const navigateToDayHabits = (day) => {
  router.push({ name: 'day', params: { dayName: day.date } });
};

watch(
  () => router.currentRoute.value.params.dayName,
  (newDayName) => {
    if (newDayName) {
      selectDay(newDayName);
    }
  }
);

</script>

<style scoped>

#calendar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 20px;
}
.calendar-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    background-color: #7fa99b;
    border: 1px solid #ccc;
    gap: 10px;
    width: 100%;
    height: 100%;
}

.box {
    border: 1px solid black;
    padding: 10px 20px;
    cursor: pointer;
    background-color: white;
}

.box:hover {
    background-color: #fdc57b;
}

.habit-list {
    text-align: center;
    background-color: #394a51;
    width: 100%;
    height: 100%;
}

.habit-list h3 {
    color: white;
    text-transform: uppercase;
}

.habit-item {
    margin: 10px 0;
    padding: 5px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;

}

.checked-label {
  text-decoration: line-through;
}
</style>