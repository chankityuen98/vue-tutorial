<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{sale: theme === 'sale'}">
      <h1>{{header}}</h1>
      <p class="">modal content</p>
      <slot></slot>

      <div class="actions">
        <slot name="links">

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ['header', 'content', 'theme'],
  methods:{
    closeModal(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

h1 {
  color: blue;
}

.modal.sale{
  background-color: crimson;
  color: white;
}

.modal.sale h1{
  color: blue;
}

.modal .actions{
  text-align: center;
  margin: 30px 0 10px 0;
}

.modal .actions a{
  color: #333;
  padding: 8px !important;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

.modal.sale .actions{
  color: white;
}

.modal.sale .actions a{
 color: white;
}
</style>
