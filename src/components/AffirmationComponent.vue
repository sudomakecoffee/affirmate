<template>
  <div class="wrapper" v-if="!loading">
    <h1>Hello</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const loading = ref(true);
console.log("loading...");
await delay();

onMounted(() => {
  console.log("mounted");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const el = document.querySelector(`div.wrapper`) as any;
  console.log(el);
  el.classList.add("fadeIn");
  console.log("visible");
});

function delay(ms = 3000) {
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

  background-color: rgba(24, 24, 24, 0.67);
  color: white;

  border-radius: 0.5rem;
}

.wrapper h1 {
  display: inline;
}

div.fadeIn {
  animation: fadeIn 2s ease-in 1;
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
