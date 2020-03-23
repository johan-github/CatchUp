import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use( Vuex )

export const store = new Vuex.Store({
    state:{

        channelNames:[],
        friendList:[],
        myAccount: '',

        channels:[
            {
                channelName: 'Members of the Sith'
            },
            {
                channelName: 'Homangus Lovers'
            },
            {
                channelName: 'Cars, cars and cars'
            },
            {
                channelName: 'Music e-Type'
            },
        ],

        
    },


/*********************************************************************************************************** */

    mutations:{
        /*********************************************** channelnames*/
        setChannelNames(state, channelNames){
            state.channelNames = channelNames },

        appendChannelNames(state, channelName){
            state.channelNames.push( channelName ) },


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