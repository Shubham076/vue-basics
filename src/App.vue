<template>
  <div id="app">
    <Hello msg="Vue"/>
    <div class="first" v-highlight:backgrounx="'green'">{{hello  | to-lowercase}}</div>
    <contact></contact>

  </div>
</template>

<script>
import Hello from './components/HelloWorld.vue'
import contact from "./components/forms.vue"


export default {
  name: 'App',
  components: {
    Hello,
    contact
  },
  data(){
    return{
      hello:'HELLO'
    }

  }
}
</script>

<style></style>


