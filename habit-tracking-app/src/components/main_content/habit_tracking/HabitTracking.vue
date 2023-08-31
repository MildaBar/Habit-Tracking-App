<template>
  <div id="choose-category">
    <h2>Habit list</h2>
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
      <!-- <span>Selected categories: {{ selectedCategoriesText }}</span> -->
    </div>
    <div v-else-if="selectedCategories === 'all'" class="category-checkboxes">
    </div>

    <!-- <div v-for="newCat in appStore.categories" :key="newCat">
      <label class="category-checkboxes">
        <input
        type="checkbox"
        v-if="selectedCategories === 'selected' || selectedCategories === 'all'"
        v-model="selectedCategoryCheckboxes"
        :value="newCat"
        :checked="selectedCategories === 'all'"
      >
      {{ newCat }}
      </label>
    </div>
    <span>Selected categories: {{ selectedCategoriesText }}</span> -->
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useAppStore } from '../store.js';

const appStore = useAppStore();

const selectedCategories = ref('all');
const selectedCategoryCheckboxes = ref([]);
const allCategories = ref([]);
const computedSelected = ref('');

// if (selectedCategories.value === 'all') {
//   computedSelected.value = 'All Categories';
// } else if (selectedCategories.value === 'selected') {
//   computedSelected.value = appStore.categories
//       .filter(cat => selectedCategoryCheckboxes.value.includes(cat.name))
//       .map(cat => cat.name)
//       .join(', ');
// }

// watch(selectedCategoryCheckboxes, () => {
//   appStore.setSelectedCategories(selectedCategoryCheckboxes.value);
// })


// const selectedCategoriesText = computed(() => {
//   if (selectedCategories.value === 'all') {
//     return 'All Categories';
//   }
//   return selectedCategoryCheckboxes.value.join(', ');
// });

watch(selectedCategories, () => {
  if (selectedCategories.value === 'all') {
    // When 'All Categories' is selected, get all categories and update habits
    const allCategories = appStore.getAllCategories();
    appStore.setSelectedCategories(allCategories);
  } else if (selectedCategories.value === 'selected') {
    // When 'Selected Categories' is selected, update habits based on selected checkboxes
    appStore.setSelectedCategories(selectedCategoryCheckboxes.value);
  }
});


</script>

<style scoped>

#choose-category {
  border: 1px solid black;
  border-style: dashed;
  padding: 10px;
  border-radius: 5px;
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