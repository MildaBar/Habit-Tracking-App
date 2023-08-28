<template>
  <Header />
  <div id="main-content-container">
    <div id="calendar">
      <Calendar />
    </div>

    <div id="habit-tracking-container">
        <HabitContainer />
    </div>
  </div>

</template>

<script setup>
import Header from './Header.vue'
import Calendar from './Calendar/Calendar.vue'
import HabitContainer from './HabitContent/HabitContainer.vue'
</script>

<style scoped>
#main-content-container {
  position: relative;
  display: flex;
}

#calendar {
  width: 40%;
  height: 100vh;
  border: 1px solid black;
  background-image: linear-gradient(#e0ffcd, rgb(255, 255, 255));
  clip-path: polygon(43% 14%, 69% 15%, 86% 22%, 100% 40%, 100% 100%, 50% 100%, 0 100%, 0% 70%, 0 0, 21% 8%);
  margin-bottom: 20px;
}

#habit-tracking-container {
  width: 60%;
  height: 100vh;
  border: 1px solid black;
  clip-path: polygon(45% 12%, 66% 5%, 87% 4%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0% 70%, 0 40%, 21% 13%);
  background-image: linear-gradient(#e0ffcd, rgb(255, 255, 255));
}
</style>