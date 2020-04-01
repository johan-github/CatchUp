/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by Johan (cleanUp) 2020-04-01
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
import registerAccount from './views/registerAccount.js'
import loginAccount from './views/loginAccount.js'
import createChannel from './views/createChannel.js'
import channelMessage from './views/channelMessage.js'
import test from './views/test.js'

export const router = new Router({
    mode: 'history',

    routes:[

        {
            name: 'loginAccount',
            path: '/',
            component: loginAccount
        },
        {
            name: 'home',
            path: '/home',
            component: home
        },
        {
            name: 'registerAccount',
            path: '/registeraccount',
            component: registerAccount
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
            name: 'loginAccount',
            path: '/loginaccount',
            component: loginAccount
        },
        {
            name: 'createChannel',
            path: '/createchannel',
            component: createChannel
        },
        {
            name : 'channelMessage',
            path : '/channelmessage',
            component : channelMessage,
        },
        {
            name: 'testPage',
            path: '/test',
            component: test,
        },



    ]
})