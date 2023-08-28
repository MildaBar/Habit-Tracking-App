<script setup>
import {ref} from 'vue'
import { useCategoryStore } from '../add_habits/storeCategory.js'

const categoryStore = useCategoryStore()
const categories = categoryStore.categories

const selected = ref('')
const selectedCategories = ref('')

</script>

<template>
    <div id="choose-category">
        <h2>Habit list</h2>
        <div class="category-options">
            <input type="radio" id="allCategories" value="all" v-model="selectedCategories">
            <label for="allCategories">All Categories</label>

            <input type="radio" id="selected-categories" value="selected" v-model="selectedCategories">
            <label for="selected-categories">Selected Categories</label>
        </div>
        <select
        v-model="selected"
        id="select-category">
            <option disabled value="">Select habit category</option>
            <option v-for="newCat in categories" :value="newCat.name">{{ newCat.name }}</option>
        </select>

        <br>
        <span>Selected categories: {{ selected }}</span>
    </div>
</template>

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