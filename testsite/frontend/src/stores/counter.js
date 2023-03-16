import { watch  } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      console.log("123")
      this.count++;
    },
    init() {
      
      const storedCount = sessionStorage.getItem('counter');
      if (storedCount) {
        this.count = JSON.parse(storedCount);
      }
      watch(
        () => this.count,
        (newCount) => {
          sessionStorage.setItem('counter', JSON.stringify(newCount));
        }
      );
    }
  }
})
