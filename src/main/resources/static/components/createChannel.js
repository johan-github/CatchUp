/********************************* /
* Orginal by Hassan. 2020-03-19
* Last Edited by Johan (cleanUp) 2020-04-08
* Notes: This creates a channel. Is in ./views/createChannel.js
/**********************************/

import addFriend from './addFriend.js'
import addFriendAdded from './addFriendAdded.js'

export default{
    components:{
        addFriend,
        addFriendAdded,
    },
    

    template: `
        <section id="createChannelContainer">

            <form id="createChannelForm" @submit.prevent="createChannel()">
                
                <input id="createChannelNameInput"
                    placeholder="Enter channel name" type="text"
                    v-model="userInputString">

                <div id="msgError">{{ msgErrorChannelName }}</div>
                        
                <select id="selectBox"
                    v-model="channelStatus">

                    <option value="">Status form</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                        
                </select>

                <button id="createChannelButton">Create channel</button>
                    
            </form>

            <div>
                <div id="friendsListsContainer">
                    <addFriend id="addFriendList"/>
                    <addFriendAdded id="addFriendAddedList"/>
                </div>
            </div>
            <button @click="backToDisplayChannelPage">B A C K</button>



        </section>
    `,


    data(){
        return{

            channels : [],
            accountChannels : [],


            userInputString: '',
            channelURL: '',
            channelStatus: '',

            msgErrorChannelName : '',
            
        }
    },





    methods:{
        

        //Methos to create a new channel
        async createChannel(){
            console.log("1")                    

            //Checks the field so its not empty
            if( !this.userInputString.trim()){
                console.log("2")

                this.msgErrorChannelName = "Please choose a name for your new channel!"
                return
            }
            
            this.msgErrorChannelName = ""
            
            //Checks the status selector to not be empty
            if( this.channelStatus === '' ){
                console.log("21")
                this.msgErrorChannelName = "Please choose a status for your new channel!"
                return
            }
            
            this.msgErrorChannelName = ""

            //Method to check if the channel already exists. Loops through admin and status information
            for( let channel of this.channels ){
                for( let accountChannel of this.accountChannels ){
                    if( channel.id === accountChannel.channelid ){
                        
                        console.log("3")

                        if( channel.name.toLowerCase() === this.userInputString.toLowerCase() && accountChannel.admin === 'yes'){

                            if( channel.status === 'public' && this.channelStatus === 'public'){

                                this.msgErrorChannelName = "You already created the public channel \"" + this.userInputString + "\"!";
                                this.msgErrorChannelStatus = ""
                                return
                            }

                            if( channel.status === 'private' && this.channelStatus === 'private'){

                                this.msgErrorChannelName = "You already created the private channel \"" + this.userInputString + "\"!";
                                this.msgErrorChannelStatus = ""
                                return
                            }
                        }
                    }
                }
            }
            
            //creates an object of the new created channel
            let newChannel = {
                name : this.userInputString,
                url: '',
                status : this.channelStatus
            }
            console.log(newChannel)
            
            //Posts the new channel to the DB
            let newCreatedChannelFromDB = await fetch( '/rest/channels',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify( newChannel )
            })
            .then( result => result.json())

            //Current account with updated information of new created channel
            let updateCurrentAccountWithTheNewCreatedChannel = {
                accountid : this.currentAccount.id,
                channelid : newCreatedChannelFromDB.id,
                admin : 'yes'
            }
            
            //Updates accountchannels in DB with a row of information
            await fetch('/rest/accountchannels',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify( updateCurrentAccountWithTheNewCreatedChannel )
            })
            
            //creates a temp object to add friends with
            let updateFriendThatWillBeAddedToTheChannel = {
                accountid : '',
                channelid : newCreatedChannelFromDB.id,
                admin : 'no'
            }

            //Adds all friends to the channel
            for( let friend of this.forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel ){
                
                updateFriendThatWillBeAddedToTheChannel.accountid = friend.friendid;

                await fetch('/rest/accountchannels',{
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify( updateFriendThatWillBeAddedToTheChannel )
                })
                
            }
            
            /// resetta addFriendAdded arrayn så man inte får sina gamla vänner man använt innan
            this.channelName = ''
            this.channelURL = ''
            this.channelStatus = ''

            //reset temp list of friends in $store
            this.$store.commit( 'resetForChannelCreationMyFriendsThatWillBeAddedToTheNewChannel' );
            
            this.routeToChannels()

        },

        //Fetches channels from DB and adds them to channels in data()
        async fetchChannelsFromDB(){
            let channels = await fetch('/rest/channels')
                .then(channels => channels.json())
                .then( channels => this.channels = channels );
                //.then(channels => this.$store.commit('setChannels', channels));
        },

        //Fetches accountchannels by id and adds them to the array accountChannels
        async fetchAccountChannelsById(){//
            await fetch('/rest/accountchannels/accountid/' + this.currentAccount.id)
                .then(accountChannels => accountChannels.json())
                .then(accountChannels => this.accountChannels = accountChannels );
        },

        //routes to mychannels
        routeToChannels(){
            this.$store.commit( 'resetForChannelCreationMyFriendsThatWillBeAddedToTheNewChannel' );

            this.$router.push('/home')
        },


        //routes home
        backToDisplayChannelPage(){
            this.$store.commit( 'resetForChannelCreationMyFriendsThatWillBeAddedToTheNewChannel' );

            this.$router.push( '/home')
        },
    },


    computed:{

        //Get information about current user
        currentAccount(){
            return this.$store.state.currentAccount
        },

        //Gets a list of friends that will be added to the new channel
        forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel(){
            return this.$store.state.forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel;
        },
    },


    async created(){
            this.fetchChannelsFromDB();
            this.fetchAccountChannelsById();
        },









} /********* E N D */