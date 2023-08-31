<template>
    <!-- Add new habit -->
    <section id="section">
        <div id="exit-btn-container">
            <button id="exit-btn" @click="navigateToMainPage">X</button>
        </div>
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

            <button @click="addNewHabit" :disabled="!selected || habit.trim() === '' || !appStore.selectedDay">Add new habit</button>
        </section>
    </section>
    <router-view />
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router';
import { ref, computed } from 'vue'
import { useAppStore } from '../store';


const appStore = useAppStore()

const selected = ref('')
const habit = ref('')

const router = useRouter();

const navigateToMainPage = () => {
  router.push('/');
};

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
@import '../sidebar/sidebarComponents/style.css'
</style>