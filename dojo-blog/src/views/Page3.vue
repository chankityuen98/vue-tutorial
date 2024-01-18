<template>
  <input type="text" v-model="search" />
  <p>Search term: {{ search }}</p>
  <div class="" v-for="name in matchingNames" :key="name">
    <p>{{ name }}</p>
  </div>

  <button @click="handleClick">Stop watching</button>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: "Page 2",
  setup() {
    const search = ref("");
    const names = ref(["mario", "yoshi", "toad", "bowser", "koopa", "peach"]);

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("watch function ran", search.value);
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames, handleClick };
  },
};
</script>

<style></style>
