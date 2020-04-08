/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by: Hassan 2020-04-08
*
/**********************************/
import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use( Vuex )

let currentChannelIdToSend;


export const store = new Vuex.Store({
    state:{

        friendList:[],
        channels:[],
        accountChannels:[],
        messages : [],

        currentAccount: {},

        currentChannelMessages : [],

        currentChannel : {},

        currentChannelId : {},


        forChannelCreationMyFriends : [], /* Used by addFriend.js */
        forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel : [], /* Used by addFriendAdded.js */


    },



/*********************************************************************************************************** */

    mutations:{

        /*********************************************** currentChannel */

        setCurrentChannel( state, currentChannel ){
            state.currentChannel = currentChannel; },


        /*********************************************** currentChannelName */

        setCurrentChannelName( state, currentChannelName ){
            state.currentChannelName = currentChannelName; },

        
        /*********************************************** currentChannelMessages */

        setCurrentChannelMessages( state, currentChannelMessages ){
            state.currentChannelMessages = currentChannelMessages; },

        appendCurrentChannelMessage( state, message ){
            state.currentChannelMessages.push( message ); },

        removeCurrentChannelMessage( state, index ){
            state.currentChannelMessages.splice( index, 1 ); },



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


        /****************************************************** channels */


        setChannels( state, channels ){
            state.channels = channels },

        appendChannel( state, channel ){
            state.channels.push( channel ) },

        removeChannel( state, index ){
            state.channels.splice( index, 1 ) },


        
        /****************************************************** forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel */

        setForChannelCreationMyFriendsThatWillBeAddedToTheNewChannel( state, forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel ){
            state.forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel = forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel },

        appendForChannelCreationMyFriendThatWillBeAddedToTheNewChannel( state, friend ){
            state.forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel.push( friend ) },

        removeForChannelCreationMyFriendThatWillBeAddedToTheNewChannel( state, friend ){
            state.forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel.splice( friend, 1 ) },


        /****************************************************** forChannelCreationMyFriends */

        setForChannelCreationMyFriends( state, forChannelCreationMyFriends ){ //används ejj
            state.forChannelCreationMyFriends = forChannelCreationMyFriends },

        appendForChannelCreationMyFriend( state, friend ){
            state.forChannelCreationMyFriends.push( friend ) },

        removeForChannelCreationMyFriend( state, friend ){
            state.forChannelCreationMyFriends.splice( friend, 1 ) },


    }

})

export default store

