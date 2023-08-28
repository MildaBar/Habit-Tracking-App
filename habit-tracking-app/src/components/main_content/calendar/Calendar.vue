<script setup>

</script>

<template>
    <div class="my-element">
    <div class="box">Prev</div>
    <div class="box">Mon</div>
    <div class="box">Tue</div>
    <div class="box">Wed</div>
    <div class="box">Thu</div>
    <div class="box">Fri</div>
    <div class="box">Sat</div>
    <div class="box">Sun</div>
    <div class="box">Next</div>
</div>
</template>

<style scoped>
.my-element {
  display: flex;
  flex-direction: row;
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
</style>
