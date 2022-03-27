<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <h1>Hello</h1>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  background-color: #77f6fd;

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  font-weight: normal;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 50%;
  width: 100%;
  max-height: 50%;
  height: 100%;

  background-color: rgba(24, 24, 24, 0.33);
  color: white;

  border-radius: 0.5rem;
}

.wrapper h1 {
  display: inline;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>
