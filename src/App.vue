<template>
  <div id="app">
    <h2>Форма подачи заявок в отдел сервиса и качества</h2>
    <Form/>
  </div>
</template>

<script>
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Form
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  /*-moz-osx-font-smoothing: grayscale;*/

  /*color: #2c3e50;*/
  min-width: 300px;
  max-width: 800px;
  margin: auto;

}
</style>
