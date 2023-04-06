import Vue from "vue"
import Vuex from "vuex"

import CountOption from "./Count"
import PersonsOption from "./Persons"

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        CountAbout: CountOption,
        PersonAbout: PersonsOption
    }
})