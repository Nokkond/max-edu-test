import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        cities: [
            {"id":"1","title":"Выберите город"},
        ]
    },
    getters: {
        getCities: state => state.cities
    },
    actions: {
        loadCitiesInfo(context){
            return axios
                .get("https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/cities")
                .then((response) => {
                    console.log(response)
                    context.commit('updateCitiesInfo', response.data)
                })
                .catch(er=>console.log(er))
        },
    },
    mutations: {
        updateCitiesInfo(state, orderInfo) {
            state.cities = orderInfo
        },
    },
})
