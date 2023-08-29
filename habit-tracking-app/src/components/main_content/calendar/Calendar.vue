<template>
    <section id="calendar-section">
        <div class="calendar-container">
            <div class="box">Prev</div>
            <div class="box" v-for="(day, index) in days" :key="index" @click="selectDay(day)">{{ day }}</div>
            <div class="box">Next</div>
        </div>
        <div class="habit-list">
            <h3> Habits for {{ appStore.selectedDay }}</h3>
        <div class="habit-item" v-for="(habits, category) in habitsByCategoryForSelectedDay" :key="category">
            <h2> CATEGORY: {{ category }}</h2>
            <div v-for="(habit, index) in habits" :key="index" class="habit-item">
                <p>{{ habit.habit }}</p>
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useAppStore } from '../store';

const appStore = useAppStore()
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const selectDay = (day) => {
    console.log('Selected DAY: ', day);
    appStore.setSelectedDay(day);
};

const habitsByCategoryForSelectedDay = computed(() => {
    return appStore.getHabitsByCategoryForSelectedDay;
});


</script>

<style scoped>

#calendar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

}
.calendar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.box {
    border: 1px solid black;
    padding: 10px 20px;
    cursor: pointer;
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