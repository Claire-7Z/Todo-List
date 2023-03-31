<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前和放大10倍为：{{bigSum}}</h3>
        <h3 style="color: red">Persons组件中人数为：{{personList.length}}</h3>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="increment(num)">+</button>
        <button @click="decrement(num)">-</button>
        <button @click="incrementOdd(num)">奇数再加</button>
        <button @click="incrementWait(num)">等一等再加</button>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from "vuex"

export default {
    name: "Count",
    data() {
        return {
            // sum: 0,
            num: 1
        }
    },
    methods: {
        /* increment() {
            // this.$store.dispatch("increment", this.num)
            this.$store.commit("increment", this.num)
        },
        decrement() {
            // this.$store.dispatch("decrement", this.num)
            this.$store.commit("decrement", this.num)
        },
        incrementOdd() {
            this.$store.dispatch("incrementOdd", this.num)
        },
        incrementWait() {
            this.$store.dispatch("incrementWait", this.num)
        } */
        ...mapActions("CountAbout", {incrementOdd:"incrementOdd", incrementWait: "incrementWait"}),
        // ...mapActions({increment: "increment", decrement: "decrement"}),
        ...mapMutations("CountAbout", ["increment", "decrement"]),
    },
    computed: {
        /* sum() {
            return this.$store.state.sum;
        },
        bigSum() {
            return this.$store.getters.bigSum;
        }, */
        ...mapState("CountAbout", {sum: "sum"}),
        ...mapState("PersonAbout", {personList: "personList"}),
        // ...mapState(["sum"]),
        ...mapGetters("CountAbout", {bigSum: "bigSum"})
        // ...mapGetters(["bigSum"])
    }
}
</script>

<style>

</style>