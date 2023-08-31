<template>
  <section id="sidebar">
    <div class="sidebar">
      <div id="add-habit-container">
        <router-link id="add-habit-link" :to="{name: 'addHabit'}">Add Habit</router-link>
      </div>
      <div id="add-category">
        <router-link id="add-category-link" :to="{name: 'addCategory'}">Add Category</router-link>
      </div>
      <div id="delete-category">
        <router-link id="delete-category-link" :to="{name: 'deleteCategory'}">Delete Category</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>

<style scoped>
#main-content-container {
  display: flex;
  font-family: monospace;
  height: 100vh;
  width: 100%;
}

.sidebar {
  width: 80px;
  background-color: #fbf2d5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease;
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