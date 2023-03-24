<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <MyHeader :addItem="addItem" />
            <MyList :todoList="todoList" :exCheck="exCheck" :delTodo="delTodo" />
            <MyFooter :todoList="todoList" :allCheck="allCheck" :delDone="delDone" />
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'

export default {
    name: "App",
    data() {
        return {
            // 获取本地存储数据，若本地存储没有，则为空数组
            todoList: JSON.parse(localStorage.getItem("todoList")) || [],
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
            this.todoList.forEach( t=> {
                t.done = flag
            })
        },
        // 切换选中状态
        exCheck(id) {
            this.todoList.forEach(t => {
                if(t.id === id) {
                    t.done = !t.done;
                }
            });
        },
        // 删除本选项
        delTodo(id) {
            if(confirm("确定删除吗？")) {
                this.todoList = this.todoList.filter( item=> {
                    return item.id != id;
                })
            }
        },
        // 清除已完成
        delDone() {
            this.todoList = this.todoList.filter( item=> {
                return !item.done;
            })
        }
    },
    watch: {
        // 监控列表数据变化，将数据存入本地存储
        // 因数据是数组对象，所以开启深度监视
        todoList: {
            deep: true,     
            handler(v) {
                localStorage.setItem("todoList", JSON.stringify(v));
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