<template>
    <section id="add-habit-container">
        <h1>Add new habit!</h1>

        <h2>Select from habit category list:</h2>
        <select v-model="selected" id="select-category">
            <option disabled value="">Select habit category</option>
        </select>
        <br>

        <h2>Write your daily habit:</h2>
        <input v-model="habit">

        <div id="selected-habit">
            <span>Selected category: {{ selected }}</span>
            <br>
            <span>Habit: {{ habit }}</span>
        </div>


        <button>Add new habit</button>
    </section>

    <section id="add-category-container">
        <h1>Add new habit category!</h1>

        <h2>Write habit category:</h2>
        <input v-model="category">

        <h2>Choose icon:</h2>
        <div>
        </div>

    </section>

</template>

<script setup>
import { ref } from 'vue'

const selected = ref('')
const habit = ref('')
const category = ref('')


</script>

<style scoped>

div {
    border: 1px solid black;
}


</style>
