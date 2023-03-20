<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <MyHeader :addItem="addItem" />
            <MyList :todoList="todoList" />
            <MyFooter :finishTodo="finishTodo" :allTodo="allTodo" />
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

import {nanoid} from 'nanoid'

export default {
    name: "App",
    data() {
        return {
            todoList: [
                {id:nanoid(), title: "喝酒", done: false},
                {id:nanoid(), title: "烫头", done: true},
                {id:nanoid(), title: "说相声", done: false},
            ],
            finishTodo: 0
        }
    },
    components: {
        MyHeader,
        MyList,
        MyFooter
    },
    methods: {
        // 添加一条列表
        addItem(obj) {
            this.todoList.unshift(obj);
        },
    },
    computed: {
        allTodo() {
            return this.todoList.length;
        }
    },
    watch: {
        todoList: {
            immediate: true,
            deep: true,
            handler(v) {
                this.finishTodo = 0;
                v.forEach(t => {
                    if(t.done) this.finishTodo++
                });
            }
        }
    }
}
</script>

<style>
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
</style>