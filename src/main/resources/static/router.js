import Vue from './libs/vue.esm.browser.js'
import Router from './libs/vue-router.esm.browser.js'
Vue.use( Router )

import home from './views/home.js'
import channels from './views/channels.js'
import friends from './views/friends.js'
import options from './views/options.js'
import about from './views/about.js'
import registerUser from './views/registerUser.js'
import loginUser from './views/loginUser.js'

export const router = new Router({
    mode: 'history',

    routes:[

        {
            name: 'home',
            path: '/',
            component: home
        },
        {
            name: 'home',
            path: '/index.html',
            component: home
        },
        {
            name: 'home',
            path: '/home',
            component: home
        },
        {
            name: 'registerUser',
            path: '/register/user',
            component: registerUser
        },
        {
            name: 'channels',
            path: '/channels',
            component: channels
        },
        {
            name: 'friends',
            path: '/friends',
            component: friends
        },
        {
            name: 'options',
            path: '/options',
            component: options
        },
        {
            name: 'about',
            path: '/about',
            component: about
        },
        {
            name: 'loginUser',
            path: '/loginUser',
            component: loginUser
        }



    ]
})