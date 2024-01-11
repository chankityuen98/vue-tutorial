<template>
  <h1>{{ job.title }}</h1>
  <p>Job ID: {{ id }}</p>
  <p>{{ job.details }}</p>
  <!-- <p>Job Title: {{ title }}</p>
  <p>Job Details: {{ details }}</p> -->
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err));
  },
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
};
</script>

<style></style>
