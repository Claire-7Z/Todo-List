<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
</template>

<script>
// nanoid 插件生成id
import { nanoid } from 'nanoid'

export default {
    name: "MyHeader",
    // 接收父组件添加列表值的方法
    props: ['addItem'],
    data() {
        return {
            title: ''
        }
    },
    methods: {
        // 输入框添加值
        add() {
            if(this.title.trim() == "") {
                alert("输入框不能为空！");
                return
            }
            var obj = {id: nanoid(), title: this.title, done: false};
            this.addItem(obj);
            this.title = '';
        }
    }
}
</script>

<style scoped>
    .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    }

    .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>