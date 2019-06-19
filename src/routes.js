// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Modals from '@/pages/modals/Modals'

// Routering
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/modals',
            name: 'modals',
            component: Modals
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})