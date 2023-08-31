<script setup>
import { RouterView, RouterLink } from 'vue-router';
import Calendar from './components/main_content/calendar/Calendar.vue'
import Header from './components/header/Header.vue'
import Sidebar from './components/main_content/sidebar/Sidebar.vue'
</script>



<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <div id="main-content-container">
      <div class="main-content">
        <div id="sidebar">
          <Sidebar />
        </div>
        <div class="content">
        <router-view />
        </div>
        <Calendar />
      </div>
    </div>
  </div>
</template>

<style>
#main-content-container {
  display: flex;
  font-family: monospace;
  height: 100vh;
  width: 100%;
}

#sidebar {
  width: 200px;
  background-color: #fbf2d5;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5px;
  align-items: flex-start;
}

.content {
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: flex 0.3s ease;
}

.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: flex 0.3s ease;
}


/* Add habit button */
/* .add-habit-content {
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
} */

</style>