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
    const affirmationComponent = ref();
    const phrases = usePhraseStore();
    let affirmation = ref("Hello Friend");
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
  padding: 15px 15px 15px 15px;
}

.wrapper.fadeIn {
  animation: fadeIn 2s ease-in forwards;
}

.wrapper.fadeOut {
  animation: fadeOut 2s ease-in forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
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
