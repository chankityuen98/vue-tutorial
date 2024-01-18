<template>
  <input type="text" v-model="search" />
  <p>Search term: {{ search }}</p>
  <div class="" v-for="name in matchingNames" :key="name">
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Page 2",
  setup() {
    const search = ref("");
    const names = ref(["mario", "yoshi", "toad", "bowser", "koopa", "peach"]);

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames };
  },
};
</script>

<style></style>
