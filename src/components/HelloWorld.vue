<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Counter:{{getCounter}}</h2>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <p></p>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    
  </div>
</template>

<script>

import {mapActions , mapGetters} from "vuex"

export default {
  props: {
    msg: String
  },

  computed:{
    ...mapGetters([
      'getCounter'
    ])
  },

  methods:{
    ...mapActions([
      'increment' , 'decrement'
    ])
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
</style>
