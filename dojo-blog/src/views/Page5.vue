<template>
  <div class="" v-if="error">{{ error }}</div>
  <div class="" v-if="posts.length">
    <PostList :posts="posts" />
  </div>
  <div class="" v-else>
    <Spinner />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Page 5",
  components: { PostList, Spinner },
  setup() {
    const { posts, error, load } = getPosts();

    load();
    return { posts, error };
  },
};
</script>

<style></style>
