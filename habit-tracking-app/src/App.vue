<script setup>
import { RouterView, RouterLink } from 'vue-router';
import Calendar from './components/main_content/calendar/Calendar.vue'
import HabitTracking from './components/main_content/habit_tracking/HabitTracking.vue'
</script>

<template>
  <div id="app" class="flex-container">
    <div id="add-habit-container" class="add-habit-content">
      <router-link id="add-habit-link" :to="{name: 'addHabit'}">Add Habit</router-link>
    </div>
        <div class="router-view-container">
          <router-view />
        </div>
    <div id="main-content-container">
        <Calendar />
        <HabitTracking />
    </div>
  </div>
</template>

<style>
#app {
  display: flex;
  height: 100vh;
  font-family: monospace;
}

.flex-container {
  display: flex;
  flex-direction: row;
}

#main-content-container {
  position: relative;
  display: flex;
}

.router-view-container {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}

/* Add habit button */
.add-habit-content {
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background: #fbf2d5;
  display: flex;
  align-items: center;
  justify-content: center;
}

#add-habit-link {
  text-decoration: none;
  color: black;
}

.add-habit-content:hover {
  transform: scale(1.3);
  background-color: #fbf2d5;
  transition-duration: 600ms;
  transition-timing-function: ease;
  border: 1px solid black;
}

</style>