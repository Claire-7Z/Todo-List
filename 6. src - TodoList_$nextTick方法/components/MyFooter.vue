<template>
    <div class="todo-footer" v-show="allTodo">
        <label>
          <input type="checkbox" v-model="allDo" />
        </label>
        <span>
          <span>已完成{{finishTodo}}</span> / 全部{{allTodo}}
        </span>
        <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "MyFooter",
    // "finishTodo", "allTodo" => todoList传到MyFooter计算，无需在App计算后传过去
    // "allCheck", "delDone" 使用自定义事件
    props: ["todoList"],
    methods: {
        clearDone() {
            this.$emit("delDone");
        }
    },
    computed: {
        // 计算“全部”事件
        allTodo() {
            return this.todoList.length;
        },
        // 计算“已完成”事件的值
        finishTodo() {
            return this.todoList.reduce((pre, cur)=> {
                return pre + (cur.done ? 1 : 0)
            }, 0)
        },
        // 控制全选框
        allDo: {
            get() {
                return this.finishTodo === this.allTodo && this.allTodo > 0
            },
            set(v) {
                // 自定义事件触发
                // this.allCheck(v);
                this.$emit("allCheck", v);
            }
        }
    }
}
</script>

<style>
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>