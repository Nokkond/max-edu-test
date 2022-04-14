<template>
  <div class="hello">

    <h1>Ваш филиал</h1>
    <select><option v-for="city in getCities" :key="city.id">{{city.title}}</option>
    </select>
    <input type="checkbox">

    <h1>Тема обращения</h1>
    <div>
      <input type="radio" id="horns" name="horns" checked>
      <label for="horns">Недоволен качеством услуг</label>
    </div>
    <div>
      <input type="radio" id="horns" name="horns">
      <label for="horns">Рассторжение договора</label>
    </div>
    <div>
      <input type="radio" id="horns" name="horns">
      <label for="horns">Не приходит письмо активации на почту</label>
    </div>
    <div>
      <input type="radio" id="horns" name="horns">
      <label for="horns">Не работает личный кабинет</label>
    </div>
    <input placeholder="Другое" id="horns" name="horns">

    <h1>Описание проблемы</h1>
    <textarea></textarea>
    <h1>Загрузка документов</h1>
    <p>Приложите, пожалуйста полноэкранный скриншот. Это поможет быстрее решить проблему.</p>
    <input type="file">
    <button>Отправить</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
      return{
        cities: [
          {"id":"1","title":"Выберите город"},
        ]
      }
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['getCities']),


  },
  methods: {
    ...mapActions(['loadCitiesInfo'])
  },
  created() {
    this.loadCitiesInfo();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
