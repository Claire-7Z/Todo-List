<template>
    <ul class="todo-main">
        <MyItem v-for="t in todoList" :key="t.id" :todoObj="t" :delTodo='delTodo' />
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'


export default {
    name: "MyList",
    // exCheck/delTodo 给MyItem使用
    // 使用全局事件总线 exCheck
    // props: ['todoList', "exCheck", "delTodo"],
    props: ['todoList', "delTodo"],
    components: {
        MyItem
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