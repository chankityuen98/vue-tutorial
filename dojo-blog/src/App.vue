<template>
  <nav>
    <router-link :to="{ name: 'page-1' }">Ref & Reactive</router-link>
    <router-link :to="{ name: 'page-2' }">Computed</router-link>
    <router-link :to="{ name: 'page-3' }">Watch & WatchEffect</router-link>
    <router-link :to="{ name: 'page-4' }">Props in Setup function</router-link>
    <router-link :to="{ name: 'page-5' }"
      >Fetching data in Setup function</router-link
    >
    <router-link :to="{ name: 'Create' }">Create</router-link>
    <!-- <router-link :to="{ name: 'details' }"
      >Creating another composable</router-link
    > -->
  </nav>
  <router-view />
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 2rem;
}
</style>
