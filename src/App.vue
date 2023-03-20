<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <MyHeader :addItem="addItem" />
            <MyList :todoList="todoList" :delTodo="delTodo" />
            <MyFooter :todoList="todoList" :allCheck="allCheck" :delDone="delDone" />
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'

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
            // finishTodo: 0, // todoList传到MyFooter计算，无需在App计算后传过去
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
        // 根据全选框的值切换列表选择框的值
        allCheck(flag) {
            /* 自定义
            if(flag) {
                this.todoList.forEach( t=> {
                    t.done = true;
                })
            } else {
                this.todoList.forEach( t=> {
                    t.done = false;
                })
            }*/
            // 优化
            this.todoList.forEach( t=> {
                t.done = flag
            })
        },
        // 删除本选项
        delTodo(id) {
            this.todoList = this.todoList.filter( item=> {
                return item.id != id;
            })
        },
        // 清除已完成
        delDone() {
            this.todoList = this.todoList.filter( item=> {
                return !item.done;
            })
        }
    },
    computed: {
        /* // todoList传到MyFooter计算，无需在App计算后传过去
        // 计算“全部”事件
        allTodo() {
            return this.todoList.length;
        }*/

    },
    watch: {
        // 监控列表的勾选情况，得到“已完成”事件的值
        /*// todoList传到MyFooter计算，无需在App计算后传过去
        todoList: {
            immediate: true,
            deep: true,
            handler(v) {
                // 优化
                this.finishTodo = this.todoList.reduce((pre, cur)=> {
                    return pre + (cur.done ? 1 : 0)
                }, 0)
            }
        },*/

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