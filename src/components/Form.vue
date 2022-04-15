<template>
  <div >
    <h2>Форма подачи заявок в отдел сервиса и качества</h2>
  <div class="form">
    <h4>Ваш филиал<span class="star"> *</span></h4>
    <div class="office">
    <select  v-model="office" :disabled="checked">
      <option :value="''" disabled selected>Выберите город</option>
      <option v-for="city in getCities" :key="city.id"  :value="city.title" placeholder="Выберите город">{{city.title}}</option>
    </select>
      <div class="checkbox_block">
        <input class="check" type="checkbox" v-model="checked"> <div>Онлайн</div>
      </div>
    </div>


    <div class="topic">
      <h4>Тема обращения<span class="star"> *</span></h4>
      <div class="radio_block" v-for='problem in problemsList' :key="problem.id">
        <input class="radio" v-model="topic" :value="problem.text" type="radio"  id="problem.id" name="topic" unchecked>
        <label class="radio_text">{{problem.text}}</label>
      </div>
      <input class="other" placeholder="Другое" id="5" name="topic" v-model="myTopic" >
    </div>

    <div class="problem">
    <h4 class="problem_title">Описание проблемы<span class="star"> *</span></h4>
    <textarea v-model="problem"></textarea>
    </div>
    <div class="download">
      <h4>Загрузка документов</h4>
      <p>Приложите, пожалуйста полноэкранный скриншот. <br> Это поможет быстрее решить проблему.</p>
      <div class="file_submit">
        <input class="file" type="file" @change="uploadFile" ref="file" id="files" name="files">
        <button class="submit" @click="submitFile" :disabled="!checkSubmit" name="files">ОТПРАВИТЬ</button>
      </div>
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
        topic: '',
        myTopic: '',
        problem: '',
        images: '',
        problemsList: [{text: 'Недоволен качеством услуг', id: '1'},
                       {text: 'Расторжение договора', id: '2'},
                       {text: 'Не приходит письмо активации на почту', id: '3'},
                       {text: 'Не работает личный кабинет', id: '4'}]
      }
  },
  computed: {
    ...mapGetters(['getCities']),
    checkSubmit(){
      if ((this.office !== '' || this.checked === true) && (this.topic !== '' || this.myTopic !== '') && this.problem !== '') return true
      else return false
    }
  },
  methods: {
    ...mapActions(['loadCitiesInfo']),
      uploadFile() {
        this.images = this.$refs.file.files[0];
      },
      submitFile() {
        const formData = new FormData();
        if (this.checked === true) formData.append('city', 'Онлайн')
        else formData.append('city', this.office)
        formData.append('problem', this.problem)
        if(this.topic==="") formData.append('topic', this.myTopic)
        if(this.myTopic==="") formData.append('topic', this.topic)
        // if(this.images) formData.append('file', this.images)

        const headers = { 'Content-Type': 'multipart/form-data' };
        axios.post('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/send-form', formData, { headers }).then((res) => {
          console.log(res);
         if (res.data.success===true) this.$router.push({name: 'submit'})
        }).catch((error) => {
          console.log(error)
          alert('Ошибка отправки заявки')
        })
      }
  },
  created() {
    this.loadCitiesInfo()
  },
  watch: {
    myTopic: function() {
      if(this.myTopic!=='') this.topic = ''
    },
    topic: function() {
      if(this.topic!=='') this.myTopic = ''
    }
  }
}
</script>


<style scoped>
.form {
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 50px 30px 30px;
  color:  #6a6969;
}
h2 {
  letter-spacing: -0.5px;
  margin-top: 19px;
  color: #393939;
}
h3 {
  margin: 40px 0 0;
}
select {
  margin-top: -14px;
  margin-left: 10px;
  padding-left: 8px;
  width: 262px;
  height: 38px;
  letter-spacing: 0.6px;
  border-color: #d0d0d0;
  background-color: #edecec;
  color: #6c6c6c;
  border-radius: 1px;
}
.office {
  display: flex;
  flex-direction: column;
}
.check {
  margin-right: 12px;
  width: 27px;
  height: 27px;

}
.checkbox_block {
  margin-left: 6px;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
}
.topic {
  margin-top: 26px;
  display: flex;
  flex-direction: column;
}
.radio {
  border-width: 0px;
  margin-left: 0px;
  height: 24px;
  width: 24px;
  color: black;
}

.radio_block {
  margin: -8px -10px 23px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.radio_text {
  font-size: 14px;
  margin-top: 2px;
  margin-left: 8px;
  letter-spacing: 0.3px;
}
.other {
  width: 246px;
  height: 32px;
  padding-left: 10px;
  margin-top: -10px;
  margin-left: 10px;
  font-size: 14px;
  letter-spacing: 0.3px;
  border: 1px solid #d0d0d0;
  border-radius: 1px;
  color: #6c6c6c;
}
.problem_title {
  margin-left: 0px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;

}
.problem {
  margin-top: 28px;
  margin-left: 10px;
}
textarea {
  letter-spacing: 0.5px;
  border: 1px solid #d0d0d0;
  border-radius: 1px;
  color: #6c6c6c;
  padding: 10px 1px 10px 10px;
  font-family: Arial, Helvetica, Avenir, sans-serif;
  margin: auto;
  resize: none;
  width: 100%;
  height: 110px;
}
textarea:focus {
  color: black;
  border: 1px solid black;
}



.download {
  margin-top: 28px;
}
p {
  letter-spacing: 0.5px;
  font-size: 14px;
  margin-top: -8px;
  margin-left: 10px;
}
h4 {
  margin-top: 12px;
  margin-left: 10px;
  font-weight: 100;
  letter-spacing: 0.3px;
  color:  #757575;
}

.star {
  color: red;
}
.file_submit {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}
.file {
  margin-bottom: 40px;
  font-size: 14px;
}
.submit {
  width: 120px;
  height: 34px;
  background-color: #ff9768;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border: 1px solid #ff9768;
}

.submit:active {
  width: 120px;
  height: 34px;
  background-color: orangered;
}
.submit:hover {
  opacity: 0.8;
}
.submit:disabled {
  width: 120px;
  height: 34px;
  background-color: silver;
  border-color: silver;
  opacity: 1;


}

/**/

input[type='radio'] {
  position: relative;
  height: 22px;
  width: 22px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

input[type='radio']::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
}

input[type='radio']:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: black;
  transform: translate(-50%, -50%);
  visibility: visible;
}
</style>
