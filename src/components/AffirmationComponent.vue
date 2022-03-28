<template>
  <div class="wrapper fadeIn" v-if="!loading">
    <h1>Hello</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loading = ref(true);
console.log("loading...");
await delay();

function delay(ms = 500) {
  return new Promise((resolve) =>
    setTimeout(() => {
      loading.value = false;

      resolve(null);
      console.log("loaded");
    }, ms)
  );
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 50%;
  width: 100%;
  max-height: 50%;
  height: 100%;

  opacity: 0;
  background-color: rgba(24, 24, 24, 0.67);
  color: white;

  border-radius: 0.5rem;
}

.wrapper h1 {
  display: inline;
}

.wrapper.fadeIn {
  animation: fadeIn 2s ease-in forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
