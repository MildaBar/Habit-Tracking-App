<template>
    <!-- Add new habit -->
    <section id="add-habit-section">
        <div id="exit-btn-container">
            <button id="exit-btn" @click="navigateToMainPage">X</button>
        </div>
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

    <!-- Add new habit category -->
    <section id="add-category-container">
        <h1>ADD NEW HABIT CATEGORY</h1>

        <div id="add-category">
            <h2>Write habit category:</h2>
            <input v-model="category">
            <button @click="addNewCategory">Add new category</button>
        </div>

    </section>
</section>
   <router-view />
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router';
import { ref, computed } from 'vue'
import { useAppStore } from '../store';

const router = useRouter()

const appStore = useAppStore()
const category = ref('')

const selected = ref('')
const habit = ref('')

const navigateToMainPage = () => {
    router.push('/')
}

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