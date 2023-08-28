<script setup>
import { RouterView, RouterLink } from 'vue-router';
import Calendar from './components/main_content/calendar/Calendar.vue'
import HabitTracking from './components/main_content/habit_tracking/HabitTracking.vue'
</script>

<template>
  <div id="app" class="flex-container">
    <div id="add-habit-container" class="add-habit-content">
          <router-link :to="{name: 'addHabit'}">Add Habit</router-link>
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
}

.flex-container {
  display: flex;
  flex-direction: row;
}

#main-content-container {
  position: relative;
  display: flex;
}


#add-habit-container {
  flex: 1;
  background-color: lightgray;
  padding: 20px;
  box-sizing: border-box;
}

.router-view-container {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}
</style>