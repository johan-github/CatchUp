import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use( Vuex )

export const store = new Vuex.Store({
    state:{

        friendList:[],
        channels:[],
        accountChannels:[],
        messages : [],


        // TEST for log out-function
        currentAccount: '',


        currentUser:{
            id: '0',
            email: '',
            usernick: '',
        },

        currentChannelMessages : [],

        currentChannelId : '',


        navBar:{
            login : 'L O G I N',
            register : 'R E G I S T E R',
            home : '',
            channels : '',
            friends : '',
            options : '',
            about : '',
            logOut : '',
            routeLogin : '/loginUser',
            routeRegister : '/registerUser',
            routeHome : '',
            routeChannels : '',
            routerFriends : '',
            routeOptions : '',
            routeAbout : '',
            routeLogOut : '',
        },

        userLoggedIn : {
            loggedIn : 'false',
        }
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



        /*********************************************** userLoggedIn */

        changeLoggedIn(state){
            state.userLoggedIn.loggedIn = 'true'
        },





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
            state.currentUser = currentUser},


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