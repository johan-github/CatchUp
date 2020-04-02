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
            
            <input id="aa" type="text" placeholder="Search channel..." @keyup="searchByName" v-model="searchVar">
            <button @click="resetSearchField">Reset</button>            

            <section id="scrollContainer">

                <div id="box" v-for="(myChannel, i ) of getMyChannels()">

                    <div id="blockBlockMember">
                        <div id="blockMember" v-for="testBuddy of displayChannelFriends( myChannel.id )">  </div>
                    </div>

                    <div id="blockChannelName" @click="selectChannelAndShowItsMessages( myChannel.id )"> {{ myChannel.name }} </div>

                    <div id="messageBlock">
                        <div id="messageSender">{{ displayLatestMessageSender( myChannel.id ) }}</div>
                        <div id="messageSender">{{ displayLatestChannelMessages( myChannel.id ) }} </div>
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

            searchVar : '',
        }
    },

    /*********************************************************************************************************** Methods:*/


    methods:{

        //search channel name
        searchByName( string ){
            for( let channel of this.channels )
            if( channel.name.toLowerCase() === this.searchVar.toLowerCase() ){
                console.log( this.searchVar)
            }
        },


        //vi jobbar med denna
        resetSearchField(){
            this.searchVar = '';
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


         //
         displayLatestMessageSender( channelId ) {

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

            console.log( "getMyChannels" );

            let tempChannelIds = [];
            let tempChannels = [];

            for( let accountChannel of this.accountChannels ){
                if( accountChannel.accountid === this.currentAccount.id ){
                    console.log( "2" );
                    tempChannelIds.push( accountChannel.channelid )
                }
            }

            for(let channel of this.channels) {
                for(let channelId of tempChannelIds) {
                    if(channel.id === channelId) {
                        console.log( "3" );
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