<script setup>
  import { useCounterStore } from '../stores/counter';

  const counter = useCounterStore();

  counter.init();

</script>

<template>
  <div>
    <h1>Counter: {{ counter.count }}</h1>
    <h2>Double Counter: {{ counter.doubleCount }}</h2>
    <button @click="counter.increment">Increment</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
