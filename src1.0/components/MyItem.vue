<template>
    <li >
        <label>
            <input type="checkbox" :checked="todoObj.done" @click="exCheck(todoObj.id)" />
            <span>{{todoObj.title}}</span>
        </label>
        <button class="btn btn-danger" v-show="btnFlag">删除</button>
    </li>
</template>

<script>
export default {
    name: "MyItem",
    props: ["todoObj", 'exCheck', "btnFlag"],
    data() {
        return {
            
        }
    },
    methods: {
        // showBtn() {
        //     this.btnFlag = true;
        // }
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
</style>