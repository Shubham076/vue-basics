import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"
import {store} from "./Store/store"
// import VueRouter from "vue-router"
import Vuelidate from "vuelidate"

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Vuelidate)
// Vue.use(VueRouter)



Vue.directive('highlight',{
  bind(el ,binding){
    if(binding.arg === 'background'){
    el.style.backgroundColor = binding.value
    }
    else{
      el.style.color=binding.value
    }
  }


})

Vue.filter('to-lowercase',(value)=>{
  return value.toLowerCase()
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
