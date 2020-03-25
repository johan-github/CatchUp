import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use( Vuex )

export const store = new Vuex.Store({
    state:{

        friendList:[],
        myAccount: '',
        channels:[],
        
    },


/*********************************************************************************************************** */

    mutations:{
        /*********************************************** channelnames*/
        setChannels(state, channels){
            state.channels = channels},
        appendChannel(state, channel){
            state.channel.push( channel )},

        /*********************************************** */

        

        appendChannel( state, channel){
            state.channels.push( channel ) },

        appendName(state, name){
            state.names.push( name ) },



        /*********************************************** */

        removeTestChannel( state, index ){
            state.testChannels.splice( index, 1 ) /* index: pos / 1: amount */ },

        removeChannel( state, index ){
            state.channels.splice( index, 1 ) /* index: pos / 1: amount */ },

        /*********************************************** listFriends*/
        setFriendList(state, friendList){
            state.friendList = friendList },

        appendFriendList(state, friendList){
            state.friendList.push( friendList ) },

        /************************************************ */

        setMyAccount(state, myAccount){
            state.myAccount = myAccount },

        deleteMyAccount(state, myAccount){
            state.myAccount = null} // '' instead of null?
    }

/*********************************************************************************************************** */




















































})