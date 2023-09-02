<script setup>
import { RouterView } from 'vue-router';
import Calendar from './components/main_content/calendar/Calendar.vue'
import Footer from './components/footer/Footer.vue'
import Navigation from './components/main_content/navigation/Navigation.vue'

</script>


<template>
  <div id="app">
    <div id="navigation">
      <Navigation />
    </div>
    <div id="main-content-container">
      <div class="main-content">
        <div id="navigation-container" style="display: flex;">
          <div class="content">
            <router-view />
          </div>
        </div>
      </div>
      <Calendar />
    </div>
    <footer id="footer">
      <div class="footer-div">
        <Footer />
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

#footer {
  background-color: #fdc57b;
  color: #fff;
  padding: 10px;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-div {
  border: 1px solid black;
  border-style: dashed;
  padding: 10px;
}

#main-content-container {
  display: flex;
  font-family: monospace;

  height: 100%;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 20px;
}

.content {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: flex 0.3s ease;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Media Query for Mobile Devices */
@media (max-width: 767px) {
  #navigation {
    width: 100%;
    height: 80%;
  }

  .mobile-only-image {
    padding: 20px;
    display: inline;
    margin-left: 10px;
    width: 80%;
    height: 80%;
  }

  .main-content {
    flex-direction: column;
    align-items: center;
  }
}
</style>



<!-- storeCategory.js
  import { defineStore } from "pinia";

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
    }),
    actions: {
        addCategory(category) {
            this.categories.push({
                name: category,
                habits: []
            })
        },
    },
});


export const useHabitStore = defineStore('habit', {
    state: () => ({
        habits: [],
    }),
    actions: {
        addHabit({ habit, category }) {
            const habitObject = {
                name: habit,
                category,
            };

            this.habits.push(habitObject);
        },
    },
}); -->