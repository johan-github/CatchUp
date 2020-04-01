/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by ......
* Notes: routes to all the pages.
/**********************************/
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
import createChannel from './views/createChannel.js'
import channelMessage from './views/channelMessage.js'

export const router = new Router({
    mode: 'history',

    routes:[

        {
            name: 'loginUser',
            path: '/',
            component: loginUser
        },
        {
            name: 'home',
            path: '/home',
            component: home
        },
        {
            name: 'registerUser',
            path: '/registerUser',
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
            path: '/loginuser',
            component: loginUser
        },
        {
            name: 'createChannel',
            path: '/createChannel',
            component: createChannel
        },
        {
            name : 'channelMessage',
            path : '/channelMessage',
            component : channelMessage,
        },



    ]
})