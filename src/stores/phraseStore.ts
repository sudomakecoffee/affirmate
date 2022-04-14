import { acceptHMRUpdate, defineStore } from "pinia";

let randomized: number[];
export const usePhraseStore = defineStore("phrases", {
  state: () => ({
    phrases: [
      "Just because it took you longer than others doesn't mean you failed.",
      "Don't sacrifice yourself in pursuit of pleasing everyone else.",
      "You don't have to feel hopeful about the future, it's enough to just be curious about what's coming.",
      "Be proud of how far you've come, even if you still have a long way to go.",
      "Success by your timeline is still success.",
      "Every day it gets a little easier.  But you have to do it every day, that's the hard part.",
      "Taking care of your well-being isn't weakness, it's necessary.",
      "Pretending to not be afraid is as good as actually not being afraid.",
      "Motivation builds habits, habits build routines.  Don't let lack of motivation stop you from trying.",
      "Being different isn't the same as being less than anyone else.",
      "We all have two fates: one is the result of whatever mess you were born into, and one is the result of deciding that's just not fucking good enough.",
      "In the face of such hopelessness as our eventual, certain death, there is little sense in not at least TRYING to accomplish all of your wildest dreams.",
      "If you can't be a pine at the top of the hill, be the best little shrub on the side of the hill.",
      "A river cuts through rock not because of its power, but because of its persistence.",
      "Doing one thing, no matter how small, is better than doing nothing, but sometimes doing nothing is necessary for your well-being.",
      "Sometimes you just have to say fuck it and start over.",
      "Make peace with your past so it won't disturb your present.",
      "What other people think of you is none of your business.",
      "Time heals almost everything.  Give it time.",
      "No one is in charge of your happiness except you.",
      "Don't compare your experience to others and don't judge their experience. You have no idea what their journey is all about, and it doesn't invalidate yours.",
      "It's okay to not know the answers.",
      "Do something today that your future self will thank you for.",
      "You are enough.",
      "Failing is always an option. It is okay to fail. Learn from it.",
    ],
  }),
  getters: {
    get: function (state) {
      return function (which: number) {
        if (!randomized) {
          randomized = [...state.phrases].map((_, index) => {
            return index;
          });
          randomized.sort(() => Math.random() - 0.5); // takes value [0, 1] and converts to [-0.5, 0.5]
        }
        const index = randomized[which % randomized.length];
        return state.phrases[index];
      };
    },
  },
  actions: {
    getRandom(): string {
      const index: number = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[index];
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePhraseStore, import.meta.hot));
}
