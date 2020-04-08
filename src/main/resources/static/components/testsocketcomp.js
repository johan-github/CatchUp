/********************************* /
* Orginal by Hassan. 2020-03-24
* Last Edited by: Helena 2020-04-08
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
                <h3 id="label">Search and join a new channel</h3>
                <input type="text" placeholder="Search channel..." @keyup="searchChannel()" v-model="searchString">
                <button @click="resetSearchField()">Reset search!</button>
            </div>          

            <div id="scrollContainer">

                <div id="displayChannelBox" v-for="(channel, i ) of searchChannel()">
                <div id="displayChannelName" @click="selectChannelAndShowItsMessages( channel )"> {{ channel.name }}
                
                <div v-if="alreadyAddedChannel( channel )">{{ addedChannel }}</div>
                
                <div v-else style="font-size:2rem;width:50%;">{{ notAddedChannel }}
                <button @click="joinChannel" >J O I N ➕</button>
                </div>
                
            </div>
           
            </div>

            </div>

            <div>
                <button id="displayChannelCreateChannelButton" @click="createNewChannel">Create new channel</button>            
            </div>
            <div>
                <div id="clickBackToHome" @click="backToHome" style="font-size:3rem;width:50%;text-align:center;">↩️</div>
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
            addedChannel: '',
    
            searchString : '',
        }
    },

    /*********************************************************************************************************** Methods:*/


    methods:{        

        //search channel name
        searchChannel(){
            let tempChannels = [];

            if( this.searchString === '' ){
                return this.getChannels();
            }

            for( let channel of this.getChannels() ){
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


        //Method to activate when selecting/clicking a channel to route the user to channelMessage
        async selectChannelAndShowItsMessages( myChannel ){
                
            this.$store.commit( 'setCurrentChannel', myChannel );
            console.log(myChannel)

            await fetch('/rest/channel/messages/' + myChannel.id )
                .then(messages => messages.json())
                .then(messages => this.$store.commit( 'setCurrentChannelMessages', messages ))
                
                console.log("My channel id " + myChannel.id)
   
                for(let accountchannel of this.accountChannels){
                    if(accountchannel.accountid === this.currentAccount.id && myChannel.id === accountchannel.channelid){
                        this.$router.push( '/channelMessage')
                        return
                    }
                }

                this.joinChannel(myChannel.id, myChannel.name)

                
        },

        alreadyAddedChannel( channel ){
            for(let accountchannel of this.accountChannels){
                if(accountchannel.accountid === this.currentAccount.id && accountchannel.channelid === channel.id){
                    this.addedChannel = '✅'
                    return true
                }
                this.notAddedChannel = '⛔'
                
            }

        },



        //gets all channels by the logged in user and stores them in myChannels[]
        getChannels(){
            let tempChannels = [];

            for(let channel of this.channels) {
                if(channel.status === 'public'){
                    tempChannels.push( channel )
                    console.log(channel.status)
                }
                }
                return tempChannels;
            },

        async joinChannel(channelId, name){
            console.log("id" + channelId )
            console.log("name "  + name)
            console.log("current account "  + this.currentAccount.id)

            let addNewChannel = {
                accountid: this.currentAccount.id,
                channelid: channelId,
                admin: 'no'
            }

            //Post to database and update
            await fetch('/rest/accountchannels',{
                 method : 'POST',
                 headers : {
                     'Content-Type' : 'application/json'
                 },
                 body : JSON.stringify( addNewChannel )
             })

        },
            
      

        //router to views/createChannel
        createNewChannel(){
            //this.$router.push( '/createChannel')
            this.$router.push( '/createChannel')
        },

        backToHome(){
            this.$router.push( '/home')
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
        },

        getAllChannels(){
            return this.$store.state.channels
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
            
        
    }
}
  

