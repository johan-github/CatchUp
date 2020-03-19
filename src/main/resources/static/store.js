import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use( Vuex )

export const store = new Vuex.Store({
    state:{

        channels:[],

        testChannels:[
            {
                testChannelName: 'Members of the Sith'
            },
            {
                testChannelName: 'Homangus Lovers'
            },
            {
                testChannelName: 'Cars, cars and cars'
            },
            {
                testChannelName: 'Music e-Type'
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


    mutations:{
        appendTestChannels( state, channel ){
            state.testChannels.push( channel )
        },

        appendChannel( state, channel){
            state.channels.push( channel )
        },

        appendName(state, name){
            state.names.push( name )
        },

        /*********************************************** */

        removeTestChannel( state, index ){
            state.testChannels.splice( index, 1 ) /* index: pos / 1: amount */
        }
    }



















































})