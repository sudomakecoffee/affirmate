import { acceptHMRUpdate, defineStore } from "pinia";

export const usePhraseStore = defineStore("phrases", {});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePhraseStore, import.meta.hot));
}
