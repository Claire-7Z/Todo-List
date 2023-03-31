<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red">Count组件中人数为：{{sum}}</h3>
        <input type="text" v-model="title">
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: "Persons",
    data() {
        return {
            title: ""
        }
    },
    computed: {
        // ...mapState(["personList"])
        personList() {
            return this.$store.state.personList
        },
        sum() {
            return this.$store.state.sum
        }
    },
    methods: {
        addPerson() {
            if(this.title != "") {
                this.$store.dispatch("addPerson", {id: nanoid(), name: this.title});
                this.title = "";
            } else {
                alert("输入框不能为空！");
            }
        }
    }
}
</script>

<style>

</style>