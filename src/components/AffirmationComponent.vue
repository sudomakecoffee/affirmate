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
import { usePhraseStore } from "@/stores/phraseStore";

export default defineComponent({
  setup() {
    const affirmationComponent = ref();
    const phrases = usePhraseStore();
    const affirmation = ref("Hello Friend");
    const loading = ref(true);

    onMounted(() => {
      loading.value = false;
      setInterval(() => {
        {
          loading.value = true;
          setTimeout(() => {
            affirmation.value = phrases.getRandom();
            loading.value = false;
          }, 2000);
        }
      }, 20000);
    });

    return {
      affirmationComponent,
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
