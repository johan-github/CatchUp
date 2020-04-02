/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by Johan (cleanUp) 2020-04-01
* Notes:  Needs to be looked at. *navBar*  *currentAccount/currentAccount* *accountLogedIn*
/**********************************/
import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use( Vuex )

export const store = new Vuex.Store({
    state:{

        friendList:[],
        channels:[],
        accountChannels:[],
        messages : [],

        currentAccount: {},

        // TEST for log out-function

        currentChannelMessages : [],

        currentChannelId : '',


    },


/*********************************************************************************************************** */

    mutations:{


        /*********************************************** currentChannelMessages */

        setCurrentChannelMessages( state, currentChannelMessages ){
            state.currentChannelMessages = currentChannelMessages; },



        /*********************************************** currentChannelId */
        setCurrentChannelId( state, currentChannelId ){
            state.currentChannelId = currentChannelId; },



        /*********************************************** messages */
        setMessages(state, messages){
            state.messages = messages; },

        appendMessage( state, message ){
            state.messages.push( message ); },

        removeMessage( state, index ){
            state.messages.splice( index, 1 ); },


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


        /*********************************************** listFriends*/
        setFriendList(state, friendList){
            state.friendList = friendList },

        appendFriendList(state, friendList){
            state.friendList.push( friendList ) },

        /************************************************ currentAccount*/

        setCurrentAccount(state, currentAccount){
            state.currentAccount = currentAccount },

        deleteCurrentAccount(state, currentAccount){
            state.currentAccount = null // '' instead of null? 
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