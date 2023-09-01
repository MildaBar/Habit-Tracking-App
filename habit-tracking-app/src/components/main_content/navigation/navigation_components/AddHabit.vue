<template>
    <!-- Add new habit -->
    <section id="section">
        <section id="container">
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

                <br>

                <span>Selected day: {{ appStore.selectedDay }}</span>
            </div>

            <div v-if="selected && habit.trim() && appStore.selectedDay">
                <button @click="addNewHabit">Add new habit</button>
            </div>
            <div v-else id="error-msg">Please provide all required information: <br> category, habit, date</div>

        </section>
    </section>
    <router-view />
</template>

<script setup>
import { RouterView } from 'vue-router';
import { ref, computed } from 'vue'
import { useAppStore } from '../../store';


const appStore = useAppStore()

const selected = ref('')
const habit = ref('')

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
@import '../style.css';

#error-msg {
    border: 1px solid black;
    padding: 1px;
    font-size: 15px;
    border-style: double;
    text-align: center;
    border-width: 5px;
}
</style>