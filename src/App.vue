<template>
  <AffirmationComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AffirmationComponent from "./components/AffirmationComponent.vue";
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

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  font-weight: normal;
}
</style>
