import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {
    increment(context, v) {
        context.commit("increment", v);
    },
    decrement(context, v) {
        context.commit("decrement", v);
    },
    incrementOdd(context, v) {
        if(context.state.sum % 2) {
            context.commit("incrementOdd", v);
        }
    },
    incrementWait(context, v) {
        setTimeout(() => {
            context.commit("incrementWait", v);
        }, 500);
    },
    addPerson(context, v) {
        context.commit("addPerson", v);
    }
}

const mutations = {
    increment(state, v) {
        state.sum += v;
    },
    decrement(state, v) {
        state.sum -= v;
    },
    incrementOdd(state, v) {
        state.sum += v;
    },
    incrementWait(state, v) {
        state.sum += v;
    },
    addPerson(state, v) {
        state.personList.unshift(v);
    }
}

const state = {
    sum: 0,
    personList: [
        {id: '001', name: "张三"}
    ]
}

const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})