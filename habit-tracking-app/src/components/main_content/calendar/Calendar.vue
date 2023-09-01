<template>
    <section id="calendar-section">
  <div class="calendar-container">
    <!-- Calendar Days -->
    <div class="col-sm" v-for="(day, index) in days" :key="index" @click="navigateToDayHabits(day)">
      {{ day.name }}<br>
      {{ day.date }}
    </div>
  </div>

  <!-- Habit List -->
  <h3>{{ appStore.selectedDay }}</h3>
  <label v-show="isFutureDay">You can't mark/unmark habits for future days.</label>
  <div class="habit-list">
        <!-- Choose Category -->
        <div id="select-category">
      <!-- <h2>Habit list</h2> -->
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
      <div class="habit-row">
          <div class="habit-list-container" v-for="(habits, category) in habitsByCategoryForSelectedDay" :key="category">
              <h2> CATEGORY: {{ category }}</h2>
              <div v-for="(habitItem, habitIndex) in habits" :key="habitIndex" class="habit-item">
                  <input
                  type="checkbox"
                  :id="habitItem.id"
                  v-model="habitItem.checked"
                  :disabled="isFutureDay"
                  >

                  <label
                  v-show="mark"
                  :for="habitItem.id"
                  :class="{ 'checked-label': habitItem.checked }"
                  >
                  {{ habitItem.habit }}</label>
              </div>
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


// ----- future day mark / unmark
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

const isPastDay = computed(() => {
  const selectedDate = new Date(selectedDay.value);
  return selectedDate < currentDate;
});

const isToday = computed(() => {
  const selectedDate = new Date(selectedDay.value);
  return selectedDate.toDateString() === currentDate.toDateString();
});

const isFutureDay = computed(() => {
  const selectedDate = new Date(selectedDay.value);
  return selectedDate > currentDate;
});

// ------
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
/* Calendar section styles */
#calendar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

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

/* Habit list by categories !!!!!!!!!!!! */
.habit-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #394a51;
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
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
}

.habit-item {
  margin: 5px 0;
}

#select-category {
  background-color: #7fa99bb3;
  width: 100%;
  padding: 10px;
}

.checked-label {
  text-decoration: line-through;
}

/* Media Queries for Responsive Design */

@media (max-width: 767px) {
  .habit-list-container {
    flex-basis: calc(100% - 20px);
  }
}
</style>
