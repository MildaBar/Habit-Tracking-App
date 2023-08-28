<template>
    <div class="my-element">
        <div class="box">Prev</div>
        <div class="box" v-for="(day, index) in days" :key="index" @click="selectDay(day)">{{ day }}</div>
        <div class="box">Next</div>

        <div>
            <h3> Habits for {{ appStore.selectedDay }}</h3>
        </div>

        <div class="habitList">
            <label for="habitList">HABIT LIST</label>
            <div class="habitList">
                <p v-for="(habit, index) in habitsForSelectedDay" :key="index">{{  habit.habit }} (Category: {{ habit.category }})
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAppStore } from '../store';

const appStore = useAppStore()
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const selectDay = (day) => {
    console.log('Selected DAY: ', day);
    appStore.setSelectedDay(day);
};

const habitsForSelectedDay = computed(() => {
    console.log('Computed Property - Selected Day:', appStore.selectedDay);
    return appStore.getHabitsForSelectedDay;
});

</script>

<style scoped>
.my-element {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.my-element {
    display: flex;
    color: black;
    border: 1px solid black;
    width: 100%;
    height: 100%;
    position: relative;
}

.box {
    border: 1px solid black;
    padding: 10px;
    text-align: center;
}

.habitList {
    border: 1px solid black;
    font-size: 20px
}
</style>
