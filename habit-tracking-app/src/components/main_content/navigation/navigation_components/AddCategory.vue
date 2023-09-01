<template>
    <!-- Add new habit category -->
    <section id="section">
    <section id="container">
        <h1>ADD NEW CATEGORY</h1>

        <div id="add-category">
            <h2>Write habit category:</h2>
            <input v-model="category">
            <button @click="addNewCategory">Add new category</button>
        </div>
    </section>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '../../store';

const appStore = useAppStore()
const category = ref('')

const addNewCategory = () => {
   if (category.value.trim() !== '') {
       appStore.addCategory(category.value);
       category.value = '';
   }
}

</script>

<style scoped>
@import '../style.css'
</style>