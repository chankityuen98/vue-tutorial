<template>
  <PostList :posts="posts" />
</template>

<script>
import PostList from "../components/PostList.vue";

import { ref } from "vue";
export default {
  name: "Page 4",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "Welcome to blog",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla voluptatibus eius itaque dolore quibusdam non, distinctio nam laudantium voluptas odio corporis aut error ipsum iusto, ratione aliquam a consectetur.",
        id: 1,
      },
      {
        title: "top css hack",
        body: "lorem ipsum",
        id: 2,
      },
    ]);

    return { posts };
  },
};
</script>

<style></style>
