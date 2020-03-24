import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use( Vuex )

export const store = new Vuex.Store({
    state:{

        channelNames: [],
        channels: [],
        
        friends: [
            {
                name: 'Ommah'
            },
            {
                name: 'Sanna'
            },
            {
                name: 'Dennosh'
            },
            {
                name: 'Loli'
            },
            {
                name: 'Alawi'
            },
            {
                name: 'Sosi'
            },
            {
                name: 'Hassan'
            },
            {
                name: 'Helena'
            },
            {
                name: 'Alberts'
            },
            {
                name: 'Tobbe'
            },
            {
                name: 'Matthias'
            },
            {
                name: 'Johan'
            },
            {
                name: 'Zlatan'
            },
            {
                name: 'Pippi'
            },
            {
                name: 'Stellan'
            },
            {
                name: 'Anna'
            },
            {
                name: 'Nils'
            },
            {
                name: 'Erik'
            },
            {
                name: 'Naruto'
            },
            {
                name: 'Itsa mea, Mario'
            },
            {
                name: 'Beso'
            },
            {
                name: 'Desilva'
            },
            {
                name: 'James'
            },
            {
                name: 'Ronny'
            },
        ],

        friendsAdded: [
        ],




    },


/*********************************************************************************************************** */

    mutations:{
        /************************************************************************** friendsAdded */

        setFriendsAdded( state, friendsAdded ){
            state.friendsAdded = friendsAadded },

        appendFriendsAdded( state, friend ){
            state.friendsAdded.push( friend ) },

        removeFriendsAdded( state, index ){
            state.friendsAdded.splice( index, 1 ) },
        
        /************************************************************************** friends */

        setFriends( state, friends ){
            state.friends = friends },

        appendFriend( state, friend ){
            state.friends.push( friend ) },

        removeFriend( state, index ){
            state.friends.splice( index, 1 ) },

        /************************************************************************* channelNames */


        setChannelNames(state, channelNames){
            state.channelNames = channelNames },

        appendChannelName(state, channelName){
            state.channelNames.push( channelName ) },

        removeChannelName( state, index ){
            state.channelNames.splice( index, 1 ) },


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