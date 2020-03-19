import Vue from './libs/vue.esm.browser.js'
import Router from './libs/vue-router.esm.browser.js'
Vue.use( Router )

import home from './views/home.js'
import channels from './views/channels.js'
import friends from './views/friends.js'
import options from './views/options.js'
import about from './views/about.js'
//import frontPage from './views/frontPage.js'

export const router = new Router({
    mode: 'history',

    routes:[

        {
            //name: 'frontPage',
            path: '/',
            component: home
        },
        {
            name: 'home',
            path: '/home',
            component: home
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
        }



    ]
})