<template>
    <div>
        <h2>我是Home的内容</h2>
        <ul>
            <li>
                <router-link to="/home/news?id=zzz01&name=abc" active-class="active">News</router-link>
            </li>
            <li>
                <router-link 
                    :to="{
                        //path: '/home/details',
                        name: 'details',    //命名路由
                        query: {
                            id: '001',
                            name: 'msg001'
                        }
                    }" 
                    active-class="active"
                >Details</router-link>
            </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style>

</style>