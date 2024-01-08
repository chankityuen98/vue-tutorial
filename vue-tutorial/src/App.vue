<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">Click me</button>
  <teleport to=".modal" v-if="showModal">
    <Modal :header="header" :content="content" theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up Now</a>
        <a href="#">More Info</a>
      </template>
    <p>Hi im slot, im being pass through from outside of this component!</p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">Open Modal 1(alt + click)</button>

  <teleport to=".modal" v-if="showModal2">
    <Modal :header="header" :content="content" theme="" @close="toggleModal2">
      
    <p>Hi im slot, and im exist in modal 2!</p>
    </Modal>
  </teleport>

  <button @click="toggleModal2">Open Modal 2</button>

</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "First Vue App :P",
      header: "Header Hi",
      content: "This is the content",
      showModal: false,
      showModal2: false
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModal2(){
      this.showModal2 = !this.showModal2
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
