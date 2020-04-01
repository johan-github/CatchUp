import channelCreateSearch from './channelCreateSearch.js'



export default{
    components:{
        channelCreateSearch,
    },


/*********************************************************************************************************** Template: */


    template:`
        <section id="container">

            <h3 id="label">My channels? (DisplayChannel)</h3>

                    <div id="box" v-for="(myChannelName, i ) of myChannelNames">

                    <div id="channelName"
                            @click="channelSelected( myChannelName.id )">
                            <div>{{ myChannelName.name }}</div>
                        </div>

                        <div id="scrollContainer">
                            <div id="membersBox" v-for="testBuddy of displayChannelFriends( i )">
                                <div id="memberNick">{{ testBuddy.usernick}} ( id:{{ testBuddy.id }} )</div>
                            </div>
                        </div>

                        <div id="message"
                            v-for="channelMessage of displayLatestChannelMessages(myChannelName.id)">
                            <div>{{channelMessage.text}}  </div>                  
                        </div>

                    </div>

            <button @click="createNewChannel">Create channel</button>

        </section>
    `,

    /*
<section id="container">

            <h3 id="label">My channels? (DisplayChannel)</h3>

            <div id="scrollContainer">
                
                <div id="displayChannelBox"
                    v-for="(myChannelName, i ) of myChannelNames">

                    <div id="displayChannelBuddies"
                        v-for="testBuddy of displayChannelFriends( i )">
                        {{ testBuddy.usernick}} ( {{ testBuddy.id}} )
                    </div>
                    
                    <div id="displayChannelName"
                        @click="channelSelected( myChannelName.id )">
                        {{ myChannelName.name }}
                    </div>

                    <div id="displayChannelMessage"
                        v-for="channelMessage of displayLatestChannelMessages(myChannelName.id)">
                        {{channelMessage.text}}                    
                    </div>

                </div>
                
            </div>

            <button @click="createNewChannel">Create channel</button>

        </section>
    */

    /*
    <section id="container">

            <h3 id="label">My channels? Display</h3>

            <div id="scrollContainer">
                
            <div>

                <div id="displayChannelBox"
                    v-for="(myChannelName, i ) of myChannelNames">

                    <div id="displayChannelBuddies"
                        v-for="testBuddy of displayChannelFriends( i )">
                        <div>{{  }}</div>
                    </div>

                    

                    <div id="displayChannelName"
                        @click="channelSelected( myChannelName.id )">
                        <div>{{ myChannelName.name }}</div>   
                    </div>

                    <div id="displayChannelMessages"
                        v-for="channelMessage of displayLatestChannelMessages(myChannelName.id)">
                        {{channelMessage.text}}                    
                    </div>

                </div>

            </div>
                
            </div>

            <button @click="createNewChannel">Create channel</button>

        </section>
        */





/*********************************************************************************************************** Methods:*/

    data() {
        return {
            channelIds : [],
            myChannelNames : [],
            allMessages : [],            
            accounts : [],
            latestchannelmessages : [],
        }
    },
    

/*********************************************************************************************************** Methods:*/


    methods:{

         displayLatestChannelMessages(channelId) {
             let channelMessages = []
             for(let message of this.latestchannelmessages) {
                 if(message.channelid === channelId) {
                     channelMessages.push(message)
                     console.log(message.text)
                 }
             } 
             return channelMessages
         },


        displayChannelFriends(index) {
            let channelBuddies = []
            let channelAccounts = []
            
            for(let accountChannel of this.accountChannels) {
                if(accountChannel.channelid === index ) {
                    channelBuddies.push(accountChannel.accountid)
                }
            }

            for(let account of this.accounts) {
                for(let channelBuddy of channelBuddies) {
                    if(account.id === channelBuddy) {
                        channelAccounts.push( account )
                    }
                }
            }

            return channelAccounts;
        },


        channelSelected( myChannelId ){

            let tempMessages = [];
            

            for( let message of this.allMessages ){
                if( message.channelid === myChannelId ){
                    tempMessages.push( message );
                }
            }
            
            
            this.$store.commit( 'setCurrentChannelMessages', tempMessages )
            this.$router.push( '/channelMessage')

            this.displayChannelFriends(myChannelId)
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

        currentChannelId(){
            return this.$store.state.currentChannelId;
        }

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

        await fetch('/rest/accounts')
            .then( accounts => accounts.json())
            .then( accounts => this.accounts = accounts )

        await fetch('/rest/latestchannelmessages/' + this.currentUser.id)
            .then( latestchannelmessages => latestchannelmessages.json())
            .then(latestchannelmessages => this.latestchannelmessages = latestchannelmessages)


        this.getCurrentUserInfo()
        this.displayChannelFriends()
        this.displayLatestChannelMessages()
        
    }



}