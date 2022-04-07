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
      phraseStore,
    };
  },
  components: {
    AffirmationComponent,
  },
});
</script>

<style>
@import "@/assets/base.css";
@import "@/assets/animations.css";

#app {
  background-color: hsl(183, 97%, 73%);

  display: flex;
  flex-direction: column;

  width: 95%;
  height: 95%;

  justify-content: center;
  align-items: center;

  font-weight: normal;
}
</style>
