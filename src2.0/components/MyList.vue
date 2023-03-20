<template>
    <ul class="todo-main">
        <MyItem v-for="t in todoList" :key="t.id" :todoObj="t" :exCheck="exCheck" @click="console.log(123)" @mouseover="btnFlag=true;console.log('**************')" @mouseleave="btnFlag=false" :btnFlag="btnFlag" :delTodo='delTodo' />
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'


export default {
    name: "MyList",
    // delTodo 给MyItem使用
    props: ['todoList', "delTodo"],
    data() {
        return {
            btnFlag: true
        }
    },
    components: {
        MyItem
    },
    methods: {
        // 切换选中状态
        exCheck(id) {
            this.todoList.forEach(t => {
                if(t.id === id) {
                    t.done = !t.done;
                }
            });
        },
    },
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