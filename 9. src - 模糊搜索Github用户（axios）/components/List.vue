<template>
    <div class="row">
        <div class="card" v-for="u in info.userList" :key="u.id" v-show="userList.length">
            <a :href="u.html_url" target="_blank">
            <img :src="u.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{u.login}}</p>
        </div>
        <div v-if="info.isFirst">欢迎使用！</div>
        <div v-show="info.isLoading">加载中。。。</div>
    </div>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            info: {
                isFirst: true,
                isLoading: false,
                userList: []
            }
        }
    },
    methods: {
        updateList(obj) {
            this.info = obj;
        }
    },
    mounted() {
        this.$bus.$on("updateList", this.updateList);
    }
}
</script>

<style>

</style>