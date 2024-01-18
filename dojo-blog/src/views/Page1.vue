<template>
  <div class="home">
    <h2>Refs</h2>
    <p>Name: {{ ninjaOne.name }}, Age: {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja</button>

    <h2>Reactive</h2>
    <p>Name: {{ ninjaTwo.name }}, Age: {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Page 1",
  setup() {
    const ninjaOne = ref({ name: "mario", age: 15 });
    const ninjaTwo = reactive({ name: "luigi", age: 15 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };

    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo };
  },
};
</script>

<style></style>
