<template>
  <Suspense>
    <template #fallback>
      <!-- <LoadingSpinner color="#00C9AC" /> -->
    </template>
    <AffirmationComponent />
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AffirmationComponent from "./components/AffirmationComponent.vue";
// import LoadingSpinner from "./components/LoadingSpinner.vue";
import { usePhraseStore } from "./stores/phraseStore";

export default defineComponent({
  setup() {
     const phraseStore = usePhraseStore();
    return {
      phraseStore
    };
  },
  components: {
    AffirmationComponent,
  },
});
</script>

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

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>