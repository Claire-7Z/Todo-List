<template>
    <div class="todo-footer" v-show="allTodo">
        <label>
          <input type="checkbox" v-model="allDo" @change="changAllCheck" />
        </label>
        <span>
          <span>已完成{{finishTodo}}</span> / 全部{{allTodo}}
        </span>
        <button class="btn btn-danger" @click="delDone">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "MyFooter",
    props: ["finishTodo", "allTodo", "allCheck", "delDone"],
    data() {
        return {
            allDo: false
        }
    },
    methods: {
        // 全选框切换调用父组件的方法控制列表的选择框
        changAllCheck() {
            this.allCheck(this.allDo);
        }
    },
    watch: {
        // 监控“已完成”事件，与“全部”事件相等，则全选勾中
        finishTodo(v) {
            if(v === this.allTodo && v != 0) {
                this.allDo = true;
            } else {
                this.allDo = false;
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