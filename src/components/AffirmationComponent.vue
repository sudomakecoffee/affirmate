<template>
  <div class="wrapper fadeIn" v-if="!loading">
    <h1>{{ affirmation }}</h1>
  </div>
  <div class="wrapper fadeOut" v-if="loading">
    <h1>{{ affirmation }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { usePhraseStore } from "./../stores/phraseStore";

export default defineComponent({
  setup() {
    const phrases = usePhraseStore();
    const affirmation = ref("Hello Friend");
    const loading = ref(true);
    let currentIndex = 0;

    const resetCurrentIndex = () => {
      currentIndex =
        currentIndex >= phrases.phrases.length
          ? currentIndex % phrases.phrases.length
          : currentIndex;
    };

    function isScreenLockSupported() {
      return "wakeLock" in navigator;
    }

    async function getScreenLock() {
      if (isScreenLockSupported()) {
        let screenLock;
        try {
          screenLock = await navigator.wakeLock.request("screen");
          document.addEventListener('visibilitychange', async () => {
        if (screenLock !== null && document.visibilityState === 'visible') {
          screenLock = await navigator.wakeLock.request('screen');
        }
      });
        } catch (err) {
          console.log(err.name, err.message);
        }
        return screenLock;
      }
    }

    onMounted(() => {
      loading.value = false;
      getScreenLock();
      setInterval(() => {
        {
          loading.value = true;
          setTimeout(() => {
            resetCurrentIndex();
            affirmation.value = phrases.get(currentIndex++);
            loading.value = false;
          }, 2000);
        }
      }, 20000);
    });

    return {
      affirmation,
      loading,
    };
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  width: min(90%, 60rem);
  height: min(90%, 40rem);

  padding: 1rem 2rem;

  background-color: rgba(24, 24, 24, 0.67);
  color: white;
  opacity: 0;

  border-radius: 0.5rem;
}

.wrapper h1 {
  display: inline;
  font-weight: 400;
}

.wrapper.fadeIn {
  animation: fadeIn 2s ease-in forwards;
}

.wrapper.fadeOut {
  animation: fadeOut 2s ease-in forwards;
}

@media only screen and (min-width: 1024px) {
  .wrapper {
    padding: 3rem 6rem;
  }
}
</style>
