<template>

<form novalidate>
    <div class="first" :class="{invalid:$v.email.$error}">
    <input type="email"  name="email" @blur="$v.email.$touch()" v-model="email">

    <p v-if="!$v.email.email">Please provide a valid email address</p>
    <p v-if="!$v.email.required">This field is required</p>

    </div>

    <div class="second" :class="{invalid:$v.password.$error}">
    <input type="password" name="password" @blur="$v.password.$touch()" v-model="password">
    <p v-if="!$v.password.minLen">Password should be 4 characters long</p>
    <p v-if="!$v.password.required">Password is required</p>
    <!-- {{$v}} -->


    </div>
    <input type="radio" name="gender" value="Male" v-model="gender">Male
    <input type="radio" name="gender" value="Female" v-model="gender">Female
    <select name="country" v-model="country">
        <option>India</option>
        <option>USA</option>
        <option>AUSTRALIA</option>

    </select>
    <input type="checkbox" v-model="checked">SendInfo

    <button @click="submit">Submit</button>

</form>
    
</template>

<script>

import {required , email , minLength } from "vuelidate/lib/validators"
export default {

    data(){
        return{
            email:"",
            password:"",
            gender:"Male",
            checked:false,
            country:"India"
        }
    },
    validations:{
        email:{
            required,
            email
        },
        password:{
            required,
            minLen:minLength(4)
        }

    },
    methods:{
        submit(event){
            event.preventDefault()
            console.log(this.name);
            console.log(this.password);
            console.log(this.gender);
            console.log(this.country);
            console.log(this.checked);

        }
    }
    
}
</script>


<style scoped>

.first.invalid input{
    border:2px solid red;
}

.second.invalid input{
    border:2px solid red;
}

</style>