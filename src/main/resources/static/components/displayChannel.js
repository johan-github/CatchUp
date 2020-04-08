/********************************* /
* Orginal by Hassan. 2020-03-24
* Last Edited by: Hassan 2020-04-05
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

            <div id="scrollContainer">

                <div id="displayChannelBox" v-for="(channel, i ) of searchChannel()">

                <div id="displayChannelMemberBox" >
                    <div v-for="friend of displayChannelFriends( channel.id )">
                        <img id="displayChannelMember" :src="displayChannelFriendAvatar( friend.avatar )">
                    </div>
                </div>
                    

                    <div id="displayChannelName" @click="selectChannelAndShowItsMessages( channel )"> {{ channel.name }} </div>

                    <div id="displayChannelMessageBlock">
                        <img id="messageSenderAvatar" :src="displayLatestMessageSenderAvatar( channel.id )">
                        <div id="messageSenderMessage">{{ displayLatestChannelMessageText( channel.id ) }} </div>
                    </div>

                    <!--<div id="displayChannelMessageBlock">
                        <img id="messageSenderAvatar" :src="displayLatestMessageSenderAvatar()">
                        <div id="messageSenderMessage">{{ displayLatestChannelMessage( channel.id ) }} </div>
                    </div>-->

                </div>

            </div>

            <div>
                <button id="displayChannelCreateChannelButton" @click="createNewChannel">Create channel</button>            
            </div>

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
         displayLatestChannelMessageText( channelId ) {
            for( let latestChannelMessage of this.latestChannelMessages ){
                if( latestChannelMessage.channelid === channelId ){
                    this.displayLatestMessageSenderAvatar( latestChannelMessage );
                    if( latestChannelMessage.text === null ){
                        return '';
                    }
                    return latestChannelMessage.text;
                }
            }
       },

         //Displays an avatar next to the latest channel message
        displayLatestMessageSenderAvatar( channelId ) {
            for( let latestChannelMessage of this.latestChannelMessages ){
                if( latestChannelMessage.channelid === channelId ){
                    for( let account of this.accounts ){
                        if( account.id === latestChannelMessage.accountid ){
                            return this.displayAccountOrDefaultAvatar( account.avatar );
                        }
                    }
                }
            }
       },

         displayAccountOrDefaultAvatar( avatar ){
            let allowedImageFileTypes = [ '.png', '.jpeg', '.jpg', '.gif' ];
            for( let type of allowedImageFileTypes ){
                if( avatar.toLowerCase().includes( type ) ){
                    return avatar;
                }                
            }
            return 'http://158.174.120.227/CatchUp/avatar01.png';
         },

         //Displays an avatar of evey member/friend of a channel
        displayChannelFriendAvatar( avatar ){
            return this.displayAccountOrDefaultAvatar( avatar );
        },

         

         //display all friends (members) in channel
        displayChannelFriends( channelId ) {
            let channelBuddies = []
            let channelAccounts = []
            
            for(let accountChannel of this.accountChannels) {
                if(accountChannel.channelid === channelId ) {
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
        async selectChannelAndShowItsMessages( myChannel ){

            this.$store.commit( 'setCurrentChannel', myChannel );

            await fetch('/rest/channel/messages/' + myChannel.id )
                .then(messages => messages.json())
                .then(messages => this.$store.commit( 'setCurrentChannelMessages', messages ))

            this.$router.push( '/channelMessage')
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
            this.$router.push( '/createchannel')
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

        //Fetches/gets via Spring accountID
        console.log("Test rest/accountChannels: " + this.currentAccount.id);
        
        await fetch('/rest/accountchannels/accountid/' + this.currentAccount.id )
            .then(accountchannelsid => accountchannelsid.json())
            .then(accountchannelsid => this.$store.commit('setAccountChannels', accountchannelsid))
            console.log("Reached???");
            
        //Run these methods when class is entered
        //this.getMyChannels();
        
    }
}