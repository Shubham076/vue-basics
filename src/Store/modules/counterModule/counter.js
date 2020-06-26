import * as actions from './actions'
import * as getters from './getters'
import * as mutations  from './mutations'

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)



export default {
    state:{
        counter:0
    },
    getters,
    mutations,
    actions

}