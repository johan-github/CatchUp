import { store } from '../store.js'
import channelCreateSearch from './channelCreateSearch.js'

export default{
    components:{
        channelCreateSearch,
    },


/*********************************************************************************************************** Template: */


    template:`
        <section>

        <h3>displayMsg</h3>

            <div  id="channelCreateSearchForm">
                <div v-for="(myMessage, i ) of myMessages">

                    <div id="channelCreateSearchChannelInfo">{{ myMessage }}</div>

                </div>
            </div>

        </section>
    `,





/*********************************************************************************************************** Methods:*/

    data() {
        return {
            messageIds : [],
            myMessages : [],

            channelMessages : [],
        }
    },
    

/*********************************************************************************************************** Methods:*/


    methods:{


        getCurrentUserInfo(){
            if( this.userLoggedIn.loggedIn === 'true' ){

                for(let message of this.messages) {
                    if(message.accountid === this.currentUser.id) {
                        this.myMessages.push(message.text)
                    } 
                }                 
            }
        }



    },


/*********************************************************************************************************** Computed: */

    computed:{
        channels(){
            return this.$store.state.channels;
        },
        
        accountChannels(){
            return this.$store.state.accountChannels;
        },

        currentUser(){
            return this.$store.state.currentUser;
        },

        userLoggedIn(){
            return this.$store.state.userLoggedIn;
        },

        messages(){
            return this.$store.state.messages;
        },
    },


    



/*********************************************************************************************************** Created: */

    async created(){

        /**
         * Variable translated to json (java),
         * variable gets sent to store
         */
        await fetch('/rest/channels')
        .then(channels => channels.json())
        .then(channels => this.$store.commit('setChannels', channels))


        await fetch('/rest/accountchannels')
        .then(accountChannels => accountChannels.json())
        .then(accountChannels => this.$store.commit('setAccountChannels', accountChannels))


        await fetch('/rest/messages')
            .then( messages => messages.json())
            .then( messages => this.$store.commit( 'setMessages', messages ))


        this.getCurrentUserInfo()
        
    }



}