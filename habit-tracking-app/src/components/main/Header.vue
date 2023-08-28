<template>
    <header class="header-section">
        <a class="navbar-brand" href="#">
            <!-- <img
            src="./bar-chart.png"
            class="header-icon"
            id="header-icon"
            alt="header-icon"
            /> -->
            Maintain your daily habits with DAILY IMPRO!
        </a>
        <div class="btn-section">
            <button
            :style="{ color: buttonColor }"
            id="light-mode"
            :class="{ yellow: btnOnLight }"
            @click="toggleMode('light')"></button>
            <button
            id="dark-mode"
            :style="{ color: buttonColor }"
            :class="{ yellow: btnOnDark }"
            @click="toggleMode('dark')"></button>
        </div>
    </header>

</template>

<script setup>
import { ref } from 'vue'

const bodyBackgroundColor = ref('white')
const bodyColor = ref('black')
const buttonColor = ref('black')
const btnOnLight = ref(false)
const btnOnDark = ref(false)

function toggleMode(buttonType) {
    if (buttonType === 'light') {
        bodyBackgroundColor.value = 'white';
        bodyColor.value = 'black';
        btnOnLight.value = !btnOnLight.value;
        btnOnDark.value = false;
    } else if (buttonType === 'dark') {
        bodyBackgroundColor.value = 'black';
        bodyColor.value = 'white';
        btnOnDark.value = !btnOnDark.value;
        btnOnLight.value = false;
    }

    document.body.style.background = bodyBackgroundColor.value;
    document.body.style.color = bodyColor.value;
}

</script>

<style scoped>

header {
    position: absolute;
    font-family: monospace;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    top: 0;
    left: 0;
    width: 100%;
    color: black;
    z-index: 1;
    margin: 0;
}

.navbar-brand {
  font-size: 30px;
  writing-mode: vertical-lr;
}

.yellow {
    background-color: #fdffcd;
}

.header-icon {
    width: 150px;
    height: 150px;
    animation: moveIc;
}


.btn-section {
    display: flex;
    gap: 20px;
    align-items: center;
}

#light-mode,
#dark-mode {
    width: 30px;
    height: 30px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    border: 1px solid black;
    padding: 10px;
    border-radius: 50%;
}


#light-mode {
    background-image: url('./light-mode.svg');

}

#dark-mode {
    background-image: url('./dark-mode.svg');
}



</style>
