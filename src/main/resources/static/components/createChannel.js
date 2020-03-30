


export default{
    components:{

    },
    

    template: `
        <section id="container">

            <form @submit.prevent="createChannelForm">
                
                <input id="createChannelNameInput"
                    placeholder="Enter channel name" type="text"
                    v-model="channelName">

                <div id="msgError">{{ msgErrorChannelName }}</div>
                
                <input  id="createChannelURLInput"
                    placeholder="Avatar URL (Optional)" type="text"
                    v-model="channelURL">
                        
                <select id="selectBox"
                    v-model="channelStatus">

                    <option value="">Status form</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                        
                </select>

                <div id="msgError">{{ msgErrorChannelStatus }}</div>

                <button id="createChannelButton">Create new channel</button>
                    
            </form>

            <button @click="backToDisplayChannelPage">B A C K</button>

        </section>
    `,


    data(){
        return{

            channelName: '',
            channelURL: '',
            channelStatus: '',

            channelIds : [],
            myChannels : [],

            msgErrorChannelName : '',
            msgErrorChannelStatus : '',
            

        }
    },





    methods:{
        

        getMyChannels(){   //add to myChannels-array
            for(let channel of this.channels) {
                for(let channelId of this.channelIds) {
                    if(channel.id === channelId) {
                        this.myChannels.push(channel.name)
                        console.log(channel.name)
                    }
                }
            }
        },


        getCurrentUserInfo(){   //add to channelIds-array
            for(let accountChannel of this.accountChannels) {
                if(accountChannel.accountid === this.currentUser.id) {
                    this.channelIds.push(accountChannel.channelid)
                } 
            }
   
            this.getMyChannels()
        },



        routeToChannels(){
            this.$router.push('/channels')
        },


        backToDisplayChannelPage(){
            this.$router.push( '/home')
        },
        

        async createChannelForm(){

            if( this.currentUser.id > 0){ //tas bort när man inte behöver logga in hela tiden!
                    

                if( !this.channelName.trim()){
                    this.msgErrorChannelName = "Please choose a name for your new channel!"
                    this.msgErrorChannelStatus = ""
                    return
                }
                
                
                for( let channel of this.myChannels ){
                    if( this.channelName.toLowerCase() === channel.toLowerCase() ){
                        this.msgErrorChannelName = "Please choose another name for your new channel! You have already a channel with this name!"
                        this.msgErrorChannelStatus = ""
                        return
                    }
                }

                
                this.msgErrorChannelName = ""

                
                if( this.channelStatus === '' ){
                    this.msgErrorChannelStatus = "Please choose a status for your new channel!"
                    return
                }
                
                
                this.msgErrorChannelStatus = ""

                
                if( this.channelURL === '' ){
                    this.channelURL = 'https://www.barriblog.com/wp-content/uploads/2011/02/python.png'
                }

                
                let newChannel = {
                    name : this.channelName,
                    url: this.channelURL,
                    status : this.channelStatus
                }
                
                            
                await fetch( '/rest/channels',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify( newChannel )
                })
                .then( result => result.json())
                .then( result => this.$store.commit( 'appendChannel', result ))



                await fetch('/rest/channels')
                .then(channels => channels.json())
                .then(channels => this.$store.commit('setChannels', channels))
                


                let updatedCurrentUserWithNewChannel = {
                    accountid : this.currentUser.id,
                    channelid : this.channels[ this.channels.length - 1 ].id,
                    admin : 'yes'
                }


                await fetch('/rest/accountchannels',{
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify( updatedCurrentUserWithNewChannel )
                })
                .then( updateDBWithNewAccountChannel => updateDBWithNewAccountChannel.json() )
                .then( updateDBWithNewAccountChannel => this.$store.commit( 'appendAccountChannel', updateDBWithNewAccountChannel ))


                this.channelName = ''
                this.channelURL = ''
                this.channelStatus = ''

                this.routeToChannels()

            } else {
                console.log("Finns ingen inloggad")
            }

        },
    },


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


    },


    async created(){
        
            await fetch('/rest/channels')
            .then(channels => channels.json())
            .then(channels => this.$store.commit('setChannels', channels))
    
    
            await fetch('/rest/accountchannels')
            .then(accountChannels => accountChannels.json())
            .then(accountChannels => this.$store.commit('setAccountChannels', accountChannels))
    

            this.getCurrentUserInfo()
            
        },









} /********* E N D */