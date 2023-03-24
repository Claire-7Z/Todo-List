<template>
    <li >
        <label>
            <input 
                type="checkbox" 
                :checked="todoObj.done" 
                @change="changeCheck(todoObj.id)" 
            />
            <span v-show="!eFlag">{{todoObj.title}}</span>
            <input 
                type="text" 
                v-model="todoObj.title" 
                v-show="eFlag" 
                ref="inputTitle"
                @blur="eFlag=false"
            >
        </label>
        <button class="btn btn-danger" @click="delDo(todoObj.id)">删除</button>
        <button class="btn btn-info" @click="editDo(todoObj.id)">编辑</button>
    </li>
</template>

<script>
import pubsub from "pubsub-js"

export default {
    name: "MyItem",
    // exCheck 使用全局事件总线
    // delTodo 使用消息发布与订阅
    // props: ["todoObj", 'exCheck',"delTodo"],
    props: ["todoObj"],
    data() {
        return {
            eFlag: false,
        }
    },
    methods: {
        // 选择框事件
        changeCheck(id) {
            // 调用全局事件总线绑定的事件
            this.$bus.$emit("exCheck", id);
        },
        // 删除事件
        delDo(id) {
            // 消息订阅（注意：调用delTodo方法时，会收到这两个参数'delTodo', id）
            pubsub.publish('delTodo', id);
        },
        // 编辑事件
        editDo() {
            this.eFlag = true;
            // $nextTick DOM更新后再执行回调函数的代码
            this.$nextTick(()=> {
                this.$refs.inputTitle.focus();
            })
        }
    }
}
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
    li:hover {
        background-color:#ddd;
    }
    li:hover button {
        display: block;
    }
</style>