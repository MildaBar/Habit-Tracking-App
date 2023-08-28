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
        <select v-model="selected" id="select-category">
            <option disabled value="">Select habit category</option>
            <option v-for="newCat in categories" :value="newCat.name">{{ newCat.name }}</option>
        </select>
        <label for="allCategories">All categiories</label>

        <br>

        <input type="radio" id="selected-categories" value="Select categories" v-model="selectedCategories">
        <label for="selcted">Select categories</label>
        <br>
        <select v-model="selected" id="select-category">
            <option disabled value="">Select habit category</option>
            <option v-for="newCat in categories" :value="newCat.name">{{ newCat.name }}</option>
        </select>
        <span>Selected categories: {{ selected }}</span>
    </div>
</template>

<style scoped>

</style>
