<template>
    <!-- Add new habit category -->
    <div id="exit-btn-container">
        <button id="exit-btn" @click="navigateToMainPage">X</button>
    </div>
    <section id="add-category-container">
        <h1>ADD NEW CATEGORY</h1>

        <div id="add-category">
            <h2>Write habit category:</h2>
            <input v-model="category">
            <button @click="addNewCategory">Add new category</button>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '../../store';


const appStore = useAppStore()
const category = ref('')

const addNewCategory = () => {
   if (category.value.trim() !== '') {
       appStore.addCategory(category.value);
       category.value = '';
   }
}
const navigateToMainPage = () => {
  router.push('/');
};


</script>

<style scoped>

</style>