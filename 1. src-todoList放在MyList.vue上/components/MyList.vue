<template>
    <ul class="todo-main">
        <MyItem v-for="t in todoList" :key="t.id" :todoObj="t" :exCheck="exCheck" />
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'

import {nanoid} from 'nanoid'

export default {
    name: "MyList",
    data() {
        return {
            todoList: [
                {id:nanoid(), title: "喝酒", done: false},
                {id:nanoid(), title: "烫头", done: true},
                {id:nanoid(), title: "说相声", done: false},
            ]
        }
    },
    components: {
        MyItem
    },
    methods: {
        exCheck(id) {
            this.todoList.forEach(t => {
                console.log("@@@@@@",t)
                if(t.id === id) {
                    t.done = !t.done;
                }
            });
        }
    }
}
</script>

<style scoped>
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>