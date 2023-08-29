<template>
  <div id="choose-category">
      <h2>Habit list</h2>
      <div class="category-options">
          <input type="radio" id="allCategories" value="all" v-model="selectedCategories">
          <label for="allCategories">All Categories</label>

          <input type="radio" id="selected-categories" value="selected" v-model="selectedCategories">
          <label for="selected-categories">Selected Categories</label>
      </div>

      <div v-if="selectedCategories === 'selected'" id="category-checkboxes">
          <label v-for="newCat in appStore.categories" :key="newCat">
              <input type="checkbox" v-model="selectedCategoryCheckboxes" :value="newCat">
              {{ newCat }}
          </label>
      </div>

      <br>
      <span>Selected categories: {{ selectedCategoryCheckboxes }}</span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useAppStore } from '../store.js';

const appStore = useAppStore();

const selectedCategories = ref('all');
const selectedCategoryCheckboxes = ref([]);
const computedSelected = ref('');

if (selectedCategories.value === 'all') {
  computedSelected.value = 'All Categories';
} else if (selectedCategories.value === 'selected') {
  computedSelected.value = appStore.categories
      .filter(cat => selectedCategoryCheckboxes.value.includes(cat.name))
      .map(cat => cat.name)
      .join(', ');
}


watch(selectedCategoryCheckboxes, () => {
  computedSelected.value = appStore.categories
      .filter(cat => selectedCategoryCheckboxes.value.includes(cat.name))
      .map(cat => cat.name)
      .join(', ');
});

</script>

<style scoped>

#choose-category {
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #7fa99b;
}

.category-options {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

input[type="radio"] {
  margin-right: 5px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

select[multiple] {
  width: 100%;
  height: auto;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>