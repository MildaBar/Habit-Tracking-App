<template>
    <!-- Delete category -->
    <div id="exit-btn-container">
            <button id="exit-btn" @click="navigateToMainPage">X</button>
        </div>
    <section id="delete-category-container">
        <h1>DELETE CATEGORY</h1>

        <div id="delete-category">
            <h2>Select which category to delete:</h2>
            <select v-model="deleteCategory" id="delete-selected-category">
                <option disabled value="">Select habit category</option>
                <option v-for="category in categories" :value="category">{{ category }}</option>
            </select>
            <button @click="deleteSelectedCategory">DELETE</button>
        </div>
    </section>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router';
import { ref, computed } from 'vue'
import { useAppStore } from '../../store';


const appStore = useAppStore()
const deleteCategory = ref('')
const router = useRouter();

const navigateToMainPage = () => {
  router.push('/');
};

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

#add-habit-container {
   border: 1px solid black;
   border-style: dashed;
   padding: 10px;
}

#add-habit-section {
    background-color:  #fdc57b;
    padding: 10px;
    display: block;
    align-items: center;
    height: 100vh;
}

h1 {
    font-size: 20px;
    text-align: center;
    width: 10px;
    background-color: rgba(255, 255, 255, 0.651)
}

h2 {
    font-size: 15px
}

#selected-habit {
    padding: 5px;
}


/* Exit btn */
#exit-btn-container {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    padding: 5px;
}

#exit-btn {
    border-radius: 50%;
    border: 0;
    background-color: #fbf2d5;
}

#exit-btn:hover {
    background-color: #fd7b7b;
    transform: scale(1.3);
    border: 1px solid black;
}

</style>