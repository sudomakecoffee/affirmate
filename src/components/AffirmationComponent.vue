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

    onMounted(() => {
      loading.value = false;
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

  padding: 2rem 4rem;
  max-width: 50%;
  max-height: 50%;

  text-align: center;

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
    padding: 4rem 6rem;
  }
}
</style>
