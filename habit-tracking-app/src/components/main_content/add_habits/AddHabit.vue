<template>
     <section id="add-habit-container">
        <h1>ADD NEW HABIT</h1>

        <h2>Select from habit category list:</h2>
        <select v-model="selected" id="select-category">
            <option disabled value="">Select habit category</option>
            <option v-for="newCat in categories" :value="newCat">{{ newCat }}</option>
        </select>

        <br>

        <h2>Write your daily habit:</h2>
        <input v-model.trim="habit" type="text" placeholder="Add habit">

        <div id="selected-habit">
            <span>Selected category: {{ selected }}</span>
            <br>
            <span>Habit: {{ habit }}</span>
        </div>


        <button @click="addNewHabit" :disabled="!selected || habit.trim() === ''">Add new habit</button>
    </section>

    <section id="add-category-container">
        <h1>ADD NEW HABIT CATEGORY</h1>

        <h2>Write habit category:</h2>
        <input v-model="category">
        <button @click="addNewCategory">Add new category</button>
    </section>
    <router-view />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { ref, computed } from 'vue'
import { useAppStore } from '../store';

const appStore = useAppStore()
const category = ref('')

const selected = ref('')
const habit = ref('')

const addNewCategory = () => {
    if (category.value.trim() !== '') {
        appStore.addCategory(category.value);
        category.value = '';
        console.log(appStore.categories);
    }
}

const addNewHabit = () => {
    if (habit.value.trim() && selected.value !== '' ) {
        appStore.addHabitToDay ({
            habit: habit.value,
            category: selected.value,
            day: appStore.selectedDay,
        });
        habit.value = ''
    }
}

const categories = computed(() => appStore.categories)

</script>

<style scoped>

div {
    border: 1px solid black;
}

</style>