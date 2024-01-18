<template>
  <div class="post-list">
    <div class="" v-for="post in posts" :key="post.id">
      <SinglePostVue :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePostVue from "./SinglePost.vue";

export default {
  name: "PostList",
  props: ["posts"],
  components: { SinglePostVue },
  setup(props) {
    console.log(props.posts);
  },
};
</script>

<style></style>
