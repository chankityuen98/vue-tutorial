<template>
  details
  <div class="" v-if="error">{{ error }}</div>
  <div class="post" v-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
  <div class="" v-else><Spinner /></div>
</template>

<script>
import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Details",
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return { post, error };
  },
};
</script>

<style></style>
