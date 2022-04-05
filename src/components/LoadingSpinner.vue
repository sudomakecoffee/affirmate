<template>
  <div class="wrapper" v-if="props.loading">
    <div
      class="circle"
      v-for="index in props.count"
      :style="`--index: ${index}`"
      :key="index"
    ></div>
  </div>
  <!-- <div class="text">Loading...</div> -->
</template>

<script setup lang="ts">
import { computed, defineComponent } from "vue";

// export default defineComponent({
//   setup() {
    
//   }
// });

const props = defineProps({
  loading: { type: Boolean, default: true },
  color: { type: String, default: "#000000" },
  size: { type: Number, default: 60 },
  sizeUnit: { type: String, default: `px` },
  count: { type: Number, default: 2 },
});

const computedSize = computed(() => {
  return `${props.size}${props.sizeUnit}`;
});
const computedColor = computed(() => {
  return props.color;
});
</script>

<style scoped>
.wrapper {
  position: relative;
  width: v-bind(computedSize);
  height: v-bind(computedSize);
}

.circle {
  position: absolute;
  width: v-bind(computedSize);
  height: v-bind(computedSize);
  background-color: v-bind(computedColor);
  border-radius: 100%;

  opacity: 0.6;
  inset: 0;
  animation-fill-mode: both;
  animation-name: bounce;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-delay: calc(1s * var(--index));
}

.text {
  padding-top: 1rem;
  color: #181818;
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
