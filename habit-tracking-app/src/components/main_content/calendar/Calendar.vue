<template>
    <section id="calendar-section">
        <div class="calendar-container">
            <div class="box">Prev</div>
            <div class="box" v-for="(day, index) in days" :key="index" @click="selectDay(day)">{{ day }}</div>
            <div class="box">Next</div>
            <HabitTracking />
        </div>
        <div class="habit-list">
            <h3> Habits for {{ appStore.selectedDay }}</h3>
            <div class="habit-item" v-for="(habits, category) in habitsByCategoryForSelectedDay" :key="category">
            <h2> CATEGORY: {{ category }}</h2>
            <div v-for="(habitItem, habitIndex) in habits" :key="habitIndex" class="habit-item">
                <p>{{ habitItem.habit }}</p>
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>
import HabitTracking from '../habit_tracking/HabitTracking.vue'
import { computed } from 'vue';
import { useAppStore } from '../store';

const appStore = useAppStore()
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const selectDay = (day) => {
    console.log('Selected DAY: ', day);
    appStore.setSelectedDay(day);
};

const habitsByCategoryForSelectedDay = computed(() => {
    const selectedCategories = appStore.getSelectedCategories;
    const habitsByCategory = {};

    // Iterate through the habits for the selected day
    const habitsForSelectedDay = appStore.habitsByDay[appStore.selectedDay] || [];

    // Filter the habits based on selected categories
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
</style>