<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red">Count组件中人数为：{{sum}}</h3>
        <h3>列表中第一个人名是：{{firstPersonName}}</h3>
        <input type="text" v-model="title">
        <button @click="addPerson">添加</button>
        <button @click="addPersonWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一个姓名随机的人</button>
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
            return this.$store.state.PersonAbout.personList
        },
        sum() {
            return this.$store.state.CountAbout.sum
        },
        firstPersonName() {
            return this.$store.state.PersonAbout.personList[0].name
        }
    },
    methods: {
        addPerson() {
            console.log("#######", this.$store)
            if(this.title != "") {
                this.$store.commit("PersonAbout/addPerson", {id: nanoid(), name: this.title});
                this.title = "";
            } else {
                alert("输入框不能为空！");
            }
        },
        addPersonWang() {
            if(this.title != "") {
                this.$store.dispatch("PersonAbout/addPersonWang", {id: nanoid(), name: this.title});
                this.title = "";
            } else {
                alert("输入框不能为空！");
            }
        },
        addPersonServer() {
            this.$store.dispatch("PersonAbout/addPersonServer");
            this.title = "";
        }
    }
}
</script>

<style>

</style>