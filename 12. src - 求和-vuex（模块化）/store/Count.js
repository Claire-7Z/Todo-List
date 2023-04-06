export default {
    namespaced: true,   //开启命名空间
    actions: {
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
        }
    },
    mutations: {
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
    },
    state: {
        sum: 0,
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
}