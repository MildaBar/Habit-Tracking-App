<template>
    <!-- Delete category -->
    <section id="section">
        <section id="container">
            <h1>DELETE CATEGORY</h1>

            <div id="category">
                <h2>Select which category to delete:</h2>
                <select v-model="deleteCategory" id="delete-selected-category">
                    <option disabled value="">Select habit category</option>
                    <option v-for="category in categories" :value="category">{{ category }}</option>
                </select>
                <button @click="deleteSelectedCategory">DELETE</button>
            </div>
        </section>
        </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '../../store';

const appStore = useAppStore()
const deleteCategory = ref('')

const deleteSelectedCategory = () => {
    const categoryToDelete = deleteCategory.value;
    if (categoryToDelete) {
        appStore.removeCategory(categoryToDelete);
        deleteCategory.value = ''
    }
}

const categories = computed(() => appStore.categories)

</script>

<style scoped>
@import '../style.css'
</style>