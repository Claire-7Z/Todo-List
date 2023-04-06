<template>
    <div>
        <h2>我是Home的内容</h2>
        <ul>
            <li>
                <router-link to="/home/news/zzz01/abc" active-class="active">News</router-link>
            </li>
            <li>
                <!-- replace 表示替换当前链接，默认push模式 追加链接 -->
                <router-link 
                    :to="{
                        //path: '/home/details',
                        name: 'details',    //命名路由（params传参必须使用name）
                        params: {
                            id: '001',
                            name: 'msg001'
                        }
                    }" 
                    active-class="active"
                    replace
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