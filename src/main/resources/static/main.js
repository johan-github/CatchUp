/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by ......
* Notes: ......
/**********************************/
import Vue from './libs/vue.esm.browser.js'
import { store } from './store.js'
import { router } from './router.js'
import app from './app.js'
import './socket.js'


new Vue({
    store,
    router,
    render: h => h( app )
}).$mount('#app');