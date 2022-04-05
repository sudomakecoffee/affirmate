<template>
  <div class="wrapper fadeIn" v-if="!loading">
    <h1>{{name}}</h1>
  </div>
</template>

<script lang="ts">
// import { type GameBusData, alertBusKey } from "@/use/useGameBus";
import { defineComponent, ref, onMounted } from "vue";
import { usePhraseStore } from "./../stores/phraseStore";

export default defineComponent({
  setup() {
    const affirmationComponent = ref();
    const phrases = usePhraseStore();
    var phrase = phrases.getRandom("a");
    var phrase2 = phrases.getRandom("a");
    console.log(phrase2, phrase);
    // let name: string = "test2";
    let name = ref("test2");

    const loading = ref(true);

    function delay(ms = 500) {
      // return new Promise((resolve) => {
          // loading.value = false;
          name.value = phrases.getRandom("a")
          // resolve(null);
          console.log( name.value);
      // });
    }

    onMounted(() => {
      console.log("loading...");
      loading.value = false;
      // while(true) {
        setInterval(() => {
          {       
            delay();
          }
          }, 5000)
    });

    return {
      affirmationComponent,
      name,
      delay,
      loading
    };
  }
});



// function delay(ms = 500) {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       loading.value = false;
//       const phrases = usePhraseStore();
//       this.name = phrases.getRandom
//       resolve(null);
//       console.log("loaded");
//     }, ms)
//   );
// }
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
