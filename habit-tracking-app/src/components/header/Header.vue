<script setup>
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>
    <header class="main-header">
        <div class="header">
            <img src="../../assets/bar-chart.png" alt="Logo" class="logo">
            <h1 class="welcome-message">Be the best with DAILY INPRO!</h1>
          </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    text-align: center;
}

.logo {
    width: 100px;
    height: 100px;
}

.welcome-message {
    font-size: 24px;
    margin-top: 0;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease-out 0.5s forwards;
}

@keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
</style>
