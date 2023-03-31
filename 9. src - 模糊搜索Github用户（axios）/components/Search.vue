<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>
        <button @click="searchList">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: "Search",
    data() {
        return {
            keyWord: ""
        }
    },
    methods: {
        searchList() {
            this.$bus.$emit("userList", {
                isFirst: false,
                isLoading: true,
                userList: []
            })
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    this.$bus.$emit("updateList", {
                        isFirst: false,
                        isLoading: false,
                        userList: response.data
                    });
                },
                error => {
                    alert(error.message);
                    this.$bus.$emit("updateList", {
                        isFirst: false,
                        isLoading: false,
                        userList: []
                    });
                }
            )
        }
    }
}
</script>

<style>

</style>