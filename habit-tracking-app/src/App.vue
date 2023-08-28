<template>
  <div id="app">
    <main>
      <router-view></router-view>
      <div class="content-container">
        <div>
          <MainContent class="content"/>
        </div>
        <div >
          <HelpContent v-if="showHelpInfo" :class="'help-content'"/>
        </div>
        <div v-if="addHabit" :class="'add-habit-content'">
          <useAddHabit />
        </div>
      </div>
      <button @click="toggleAddHabit" class="addHabit-button">Add habit</button>
      <button @click="toggleHelpContent" class="help-button">
        Help
      </button>
    </main>
    <Footer />

  </div>
</template>

<script setup>
import MainContent from './components/main/MainContent.vue'
import Footer from './components/footer/Footer.vue'
import HelpContent from './components/main/HelpContent.vue'
import useAddHabit from './components/main/AddHabit/useAddHabit.vue'
import router from './router.js'
import { ref } from 'vue'


let showHelpInfo = ref(false)
let addHabit = ref(false)

const toggleHelpContent = () => {
  showHelpInfo.value = !showHelpInfo.value;
  if (showHelpInfo.value) {
    router.push('/help');
  }
};

const toggleAddHabit = () => {
  addHabit.value = !addHabit.value;
  if (addHabit.value) {
    router.push('/addHabit')
  }
}

</script>


<style scoped>

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.content-container {
  display: flex;
  align-items: flex-start;
}

.content {
  flex: 1;
  padding: 20px;
}

.help-content, .add-habit-content {
  flex: 1;
  padding: 20px;
  background-color: #ffcab0;
  color: black;
}

.help-button {
  position: fixed;
  bottom: 50px;
  left: 10px;
  z-index: 1;
  border: 1px solid black;
  background-color: #ffebbb;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

.addHabit-button {
  position: fixed;
  top: 100px;
  bottom: 50px;
  left: 1800px;
  z-index: 1;
  border: 1px solid black;
  background-color: #ffebbb;
  border-radius: 50%;
  width: 70px;
  height: 70px;
}
</style>