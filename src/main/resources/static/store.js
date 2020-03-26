import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use( Vuex )

export const store = new Vuex.Store({
    state:{

        friendList:[],
        myAccount: '',
        channels:[],
        accountChannels:[],

        currentUser:{
            id:'',
            email:'',
            usernick:'',            
        },
    },


/*********************************************************************************************************** */

    mutations:{

        /*********************************************** channels*/
        setChannels(state, channels){
            state.channels = channels},
        appendChannel(state, channel){
            state.channels.push( channel )},
        removeChannel( state, index ){
            state.channels.splice( index, 1 ) /* index: pos / 1: amount */ },

        /**************************************************** accountChannels */

        setAccountChannels(state, accountChannels){
            state.accountChannels = accountChannels},
        appendAccountChannel(state, accountChannel){
            state.accountChannels.push( accountChannel )},
        removeAccountChannel(state, index){
            state.accountChannels.splice( index, 1)
        },

        /*********************************************************** CurrentUser */
        setCurrentUser(state, currentUser){
            state.currentUser = currentUser
        },


        /*********************************************** */

        removeTestChannel( state, index ){
            state.testChannels.splice( index, 1 ) /* index: pos / 1: amount */ },

        /************************************************************************* channelNames */

        /*********************************************** listFriends*/
        setFriendList(state, friendList){
            state.friendList = friendList },

        appendFriendList(state, friendList){
            state.friendList.push( friendList ) },

        /************************************************ */

        setMyAccount(state, myAccount){
            state.myAccount = myAccount },

        deleteMyAccount(state, myAccount){
            state.myAccount = null // '' instead of null? 
        },


        /************************************************************************** channels */


        setChannels( state, channels ){
            state.channels = channels },

        appendChannel( state, channel ){
            state.channels.push( channel ) },

        removeChannel( state, index ){
            state.channels.splice( index, 1 ) },
        
        
        /************************************************************************** channels */
        /************************************************************************** channels */
        /************************************************************************** channels */
        /************************************************************************** channels */
        /************************************************************************** channels */


    }








})