import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from '../components/About'
import Home from '../components/Home'
import News from '../components/News'
import Details from '../components/Details'

export default new VueRouter({
    routes: [
        {
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news/:id/:name", //:id 传参的key值，路径直接带value
                    component: News,
                    // props: {c: 900},
                    // props: true,     // 值为布尔型 true则表示params所有的参数会以props形式传给组件
                    props(route) {      // 值为函数 返回值以props形式传给组件
                        return {
                            id: route.params.id,
                            name: route.params.name
                        }
                    }

                },
                {
                    name: "details",    // params传参，路径必须使用命名路由
                    path: "details/:id/:name",    // 子路由中路径不能加/
                    component: Details
                },
            ]
        }
    ]
})