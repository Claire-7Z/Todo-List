<template>
    <ul class="todo-main">
        <!-- 
            过度和动画 
            里面有单元素使用 transition包裹；
            多元素使用transition-group包裹；
            appear 页面加载就调用动画
            name 区分多个动画方法
        -->
        <transition-group appear name="todo" >
            <MyItem v-for="t in todoList" :key="t.id" :todoObj="t" :delTodo='delTodo' />
        </transition-group>
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

    /* 动画css, 也可以安装animate.css */
    .todo-enter-active {
        animation: todoAmt 0.5s linear;
    }
    .todo-leave-active {
        animation: todoAmt 0.5s linear reverse;
    }
    @keyframes todoAmt {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>