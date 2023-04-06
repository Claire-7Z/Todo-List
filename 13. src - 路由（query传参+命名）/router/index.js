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
                    path: "news",
                    component: News
                },
                {
                    name: "details",
                    path: "details",
                    component: Details
                },
            ]
        }
    ]
})