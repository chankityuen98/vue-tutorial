<template>
  <PostList :posts="posts" />
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";

import { ref } from "vue";
export default {
  name: "Page 4",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

    load();
    return { posts, error };
  },
};
</script>

<style></style>
