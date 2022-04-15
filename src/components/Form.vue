<template>
  <div>
  <div class="form">

    <h4>Ваш филиал<span class="star">*</span></h4>

    <div>
    <select v-model="office" :disabled="checkOffice">
      <option value="" disabled selected>Выберите город</option>
      <option v-for="city in getCities" :key="city.id"  value="" placeholder="Выберите город">{{city.title}}</option>
    </select><input type="checkbox" v-model="checked"> Онлайн
    </div>

    <h4>Тема обращения<span class="star">*</span></h4>
    <div>
      <input type="radio" id="first"  name="horns" unchecked>
      <label for="first">Недоволен качеством услуг</label>
    </div>
    <div>
      <input type="radio" id="second" name="horns" >
      <label for="second">Рассторжение договора</label>
    </div>
    <div>
      <input type="radio" id="third" name="horns">
      <label for="third">Не приходит письмо активации на почту</label>
    </div>
    <div>
      <input type="radio" id="forth" name="horns">
      <label for="forth">Не работает личный кабинет</label>
    </div>
    <input placeholder="Другое" id="horns" name="horns">

    <h4>Описание проблемы<span class="star">*</span></h4>
    <textarea v-model="problem"></textarea>
    <h4>Загрузка документов</h4>
    <p>Приложите, пожалуйста полноэкранный скриншот. Это поможет быстрее решить проблему.</p>
    <div>
      <input type="file" @change="uploadFile" ref="file">
      <button @click="submitFile">Upload!</button>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios
  from "axios";

export default {
  name: 'Form',
  data() {
      return{
        cities: [
          {"id":"1","title":"Выберите город"},
        ],
        office: '',
        checked: false,
        isOfficeDisabled: false,
        topic: '',
        problem: '',
        images: null
      }
  },
  computed: {
    ...mapGetters(['getCities']),
    checkOffice(){
      if (this.checked===true) return true;
      else return false;
    }
  },
  methods: {
    ...mapActions(['loadCitiesInfo']),
      uploadFile() {
        this.Images = this.$refs.file.files[0];
      },
      submitFile() {
        const formData = new FormData();
        formData.append('city', this.office);
        formData.append('file', this.Images);
        const headers = { 'Content-Type': 'multipart/form-data' };
        axios.post('https://httpbin.org/post', formData, { headers }).then((res) => {
          res.data.files;
          res.status;
        });
      }
  },
  created() {
    this.loadCitiesInfo();
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
h4{
  font-weight: 100;
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
.star {
  color: red;
}
.form {
  border: 1px solid silver;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  /*background-color: red;*/
}
textarea {
  resize: none;
}
</style>
