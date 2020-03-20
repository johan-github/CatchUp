import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use( Vuex )

export const store = new Vuex.Store({
    state:{

        channelnames:[],

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

        channelsBU:[
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

        names:[
            {
                firstName: 'Helena',
                lastName: 'Jackson'
            },
            {
                firstName: 'Alberts',
                lastName: 'Swarzenegger'
            },
            {
                firstName: 'Johan',
                lastName: 'Stalone'
            },
            {
                firstName: 'Matthias',
                lastName: 'Scott'
            },
            {
                firstName: 'Tobbe',
                lastName: 'Messi'
            },
            {
                firstName: 'Hassan',
                lastName: 'Wayne'
            }
            
        ]







    },


/*********************************************************************************************************** */

    mutations:{
        setChannelNames(state, channelnames){
            state.channelnames = channelnames },


        /*********************************************** */

        appendChannelNames(state, channelName){
            state.channelNames.puch( channelName ) },

        appendTestChannels( state, channel ){
            state.testChannels.push( channel ) },

        appendChannel( state, channel){
            state.channels.push( channel ) },

        appendName(state, name){
            state.names.push( name ) },



        /*********************************************** */

        

        removeTestChannel( state, index ){
            state.testChannels.splice( index, 1 ) /* index: pos / 1: amount */ },

        removeChannel( state, index ){
            state.channels.splice( index, 1 ) /* index: pos / 1: amount */ }
    }

/*********************************************************************************************************** */




















































})