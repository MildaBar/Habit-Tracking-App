<template>
  <section id="sidebar">
    <div class="sidebar">
      <div id="add-habit-container">
        <router-link id="add-habit-link" class="link" :to="{name: 'addHabit'}">
          <img src="../../../assets/add.svg" alt="add-icon">
          Add Habit
        </router-link>
      </div>
      <div id="add-category">
        <router-link id="add-category-link" class="link" :to="{name: 'addCategory'}">
          <img src="../../../assets/category.svg" alt="add-category">
          Add Category
        </router-link>
      </div>
      <div id="delete-category">
        <router-link id="delete-category-link" class="link" :to="{name: 'deleteCategory'}">
          <img src="../../../assets/delete.svg" alt="">
          Delete Category
        </router-link>
      </div>
    </div>
    <div id="information">
        <h2>Information</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus voluptatem excepturi accusantium totam non quam, explicabo ratione? Saepe assumenda beatae consequuntur expedita illum reiciendis qui, magnam architecto dolor cumque nobis!</p>
      </div>
  </section>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>

<style scoped>
.link {
  text-decoration: none;
  color: black;
  padding: 20px;
  display: flex;
  gap: 10px;
  border: 1px solid black;
}

.sidebar {
  padding: 10px;
}

#information {
  padding: 10px;
}

#add-habit-link:hover {
  background-color: rgba(0, 128, 0, 0.201);
}

#add-category-link:hover {
  background-color: rgba(255, 166, 0, 0.187);
}

#delete-category-link:hover {
  background-color: rgba(255, 0, 0, 0.24);
}

</style>