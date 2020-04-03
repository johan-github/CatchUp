/********************************* /
* Orginal by Hassan. 2020-03-24
* Last Edited by: Tobbe and Hassan (cleanUp) 2020-04-02
* Notes: This displays all the Account's channels, with channel members (friends) and channels latest message ./views/home.js
/**********************************/
import channelCreateSearch from './channelCreateSearch.js'



export default{
    components:{
        channelCreateSearch,
    },


/*********************************************************************************************************** Template: */


    template:`
        <section id="container">

            <div>
                <h3 id="label">My channels</h3>
                <input type="text" placeholder="Search channel..." @keyup="searchChannel()" v-model="searchString">
                <button @click="resetSearchField()">Reset search!</button>
            </div>          

            <section id="scrollContainer">

                <div id="displayChannelBox" v-for="(myChannel, i ) of searchChannel()">

                    <div id="displayChannelMemberBox">
                        <div id="displayChannelMember" v-for="testBuddy of displayChannelFriends( myChannel.id )">  </div>
                    </div>

                    <div id="displayChannelName" @click="selectChannelAndShowItsMessages( myChannel.id )"> {{ myChannel.name }} </div>

                    <div id="displayChannelMessageBlock">
                        <div id="messageSenderAvatar">{{  }}</div>
                        <div id="messageSenderMessage">{{ displayLatestChannelMessages( myChannel.id ) }} </div>
                    </div>

                </div>

            </section>

            <button @click="createNewChannel">Create channel</button>            

        </section>
    `,

/*********************************************************************************************************** Methods:*/

    data() {
        return {
            channels : [],
            accountChannels : [],
            accounts : [],
            latestChannelMessages : [],
            allMessages : [],

            searchString : '',
        }
    },

    /*********************************************************************************************************** Methods:*/


    methods:{        

        //search channel name
        searchChannel(){
            let tempChannels = [];

            if( this.searchString === '' ){
                return this.getMyChannels();
            }

            for( let channel of this.getMyChannels() ){
                if( channel.name.toLowerCase().includes( this.searchString.toLowerCase() )){
                    tempChannels.push( channel );
                }
            }
            return tempChannels;
        },
        
        //Makes the search field, that holds searchString, empty
        resetSearchField(){
            this.searchString = '';
        },

        //displaying latest channel message
         displayLatestChannelMessages( channelId ) {

            let tempMessage = '';
             
            for( let message of this.latestChannelMessages ){
                if( message.channelid === channelId ){

                    if( message.text === null ){
                        tempMessage = 'Error! Message is empty';
                    }
                    tempMessage = message.text;
                }
            }

            return tempMessage;
         },

         //Displays an avatar next to the latest channel message
         displayLatestMessageSender( channelId ) {

            let messageSender = '';
             
            for( let message of this.latestChannelMessages ){
                if( message.channelid === channelId ){
                    messageSender = message.usernick
                }
            }
            for(let account of this.accounts) {
                if(account.usernick === messageSender) {
                    return account.avatar
                }
            }
         },

         //display all friends (members) in channel
        displayChannelFriends( index ) {
            let channelBuddies = []
            let channelAccounts = []
            
            for(let accountChannel of this.accountChannels) {
                if(accountChannel.channelid === index ) {
                    channelBuddies.push( accountChannel.accountid )
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

        //Method to activate when selecting/clicking a channel to route the user to channelMessage
        selectChannelAndShowItsMessages( myChannelId ){

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

        //gets all channels by the logged in user and stores them in myChannels[]
        getMyChannels(){

            let tempChannelIds = [];
            let tempChannels = [];

            for( let accountChannel of this.accountChannels ){
                if( accountChannel.accountid === this.currentAccount.id ){
                    tempChannelIds.push( accountChannel.channelid )
                }
            }

            for(let channel of this.channels) {
                for(let channelId of tempChannelIds) {
                    if(channel.id === channelId) {
                        tempChannels.push( channel )
                    }
                }
            }

            return tempChannels;
        },        


        //router to views/createChannel
        createNewChannel(){
            //this.$router.push( '/createChannel')
            this.$router.push( '/loginAccount')
        }
    },


/*********************************************************************************************************** Computed: */

    computed:{

        currentAccount(){
            return this.$store.state.currentAccount
        },        

        currentAccountMessages(){
            return this.$store.state.currentChannelMessages;
        },

        currentChannelId(){
            return this.$store.state.currentChannelId;
        }

    },


/*********************************************************************************************************** Created: */

    async created(){  

        //Fetches/gets all the channels from channels.db and stores it in a channels ("class-array")
        await fetch('/rest/channels')
            .then(channels => channels.json())
            .then(channels => this.channels = channels)


        //Fetches/gets all the accounts from accounts.db and stores it in a accounts ("class-array")
        await fetch('/rest/accounts')
            .then( accounts => accounts.json())
            .then( accounts => this.accounts = accounts )


        //Fetches/gets all the accountchannels from accountchannels.db and stores it in a accountChannels ("class-array")
        await fetch('/rest/accountchannels' )
            .then(accountChannels => accountChannels.json())
            .then(accountChannels => this.accountChannels = accountChannels)


        //Fetches/gets all the latestchannelmessages from latestchannelmessages.db and stores it in a latestchannelmessages ("class-array")
        await fetch('/rest/latestchannelmessages/' + this.currentAccount.id )
            .then( latestChannelMessages => latestChannelMessages.json())
            .then( latestChannelMessages => this.latestChannelMessages = latestChannelMessages )


        //Run these methods when class is entered
        this.displayChannelFriends();
        this.displayLatestChannelMessages();
        this.getMyChannels();
        
    }
}