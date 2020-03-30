import channelCreateSearch from './channelCreateSearch.js'



export default{
    components:{
        channelCreateSearch,
    },


/*********************************************************************************************************** Template: */


    template:`
        <section id="container">

            <h3 id="label">My channels?</h3>

            <div  id="scrollContainer">
                <div v-for="(myChannelName, i ) of myChannelNames">

                <div id="channelCreateSearchChannelInfo"
                    @click="channelSelected( myChannelName.id )">{{ myChannelName.name }}</div>

                </div>
                
            </div>

            <button @click="createNewChannel">Create channel</button>

        </section>
    `,





/*********************************************************************************************************** Methods:*/

    data() {
        return {
            channelIds : [],
            myChannelNames : [],
            allMessages : [],            
        }
    },
    

/*********************************************************************************************************** Methods:*/


    methods:{


        channelSelected( myChannelId ){

            let tempMessages = [];
            

            for( let message of this.allMessages ){
                if( message.channelid === myChannelId ){
                    tempMessages.push( message );
                }
            }
            
            
            this.$store.commit( 'setCurrentChannelMessages', tempMessages )
            this.$router.push( '/channelMessage')

            return

        },


        getMyChannels(){
            for(let channel of this.channels) {
                for(let channelId of this.channelIds) {
                    if(channel.id === channelId) {
                        this.myChannelNames.push(channel)
                    }
                }
            }
        },


        getCurrentUserInfo(){
            if( this.userLoggedIn.loggedIn === 'true' ){

                for(let accountChannel of this.accountChannels) {
                    if(accountChannel.accountid === this.currentUser.id) {
                        this.channelIds.push(accountChannel.channelid)
                    } 
                }
                this.getMyChannels()                    
            }
        },


        createNewChannel(){
            this.$router.push( '/createChannel')
        }



    },


/*********************************************************************************************************** Computed: */

    computed:{
        channels(){
            return this.$store.state.channels
        },
        
        accountChannels(){
            return this.$store.state.accountChannels
        },

        currentUser(){
            return this.$store.state.currentUser
        },

        userLoggedIn(){
            return this.$store.state.userLoggedIn
        },

        currentUserMessages(){
            return this.$store.state.currentChannelMessages;
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
            .then( messages => this.allMessages = messages )


        this.getCurrentUserInfo()
        
    }



}