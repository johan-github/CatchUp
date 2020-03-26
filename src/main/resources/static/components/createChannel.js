


export default{
    components:{

    },
    

    template: `
        <section>

        <div id="createChannelContainer">

            <form @submit.prevent="createChannelForm">
                
                <div>
                    <input  id="createChannelNameInput"
                        placeholder="Enter channel name" type="text" required
                        v-model="channelName">
                </div>
                
                <div>
                    <input  id="createChannelURLInput"
                        placeholder="Avatar URL (Optional)" type="text"
                        v-model="channelURL">
                </div>

                <div>
                    <select id="createChannelSelect"
                        v-model="channelStatus" required>

                        <option value="">Status form</option>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>

                    </select>
                </div>

                <div>
                    <button id="createChannelButton">Create new channel</button>
                    </div>
                    
                </form>
                <button id="createChannelButton"
                    @click="checkCurrentUser">Check user</button>

            </div>

        </section>
    `,


    data(){
        return{

            channelName: '',
            channelURL: '',
            channelStatus: '',
            

        }
    },





    methods:{

        checkCurrentUser(){
            console.log( this.currentUser.id )
            console.log( this.currentUser.email )
            console.log( this.currentUser.usernick )

        },

        routeToChannels(){
            this.$router.push('/channels')
        },
        

        async createChannelForm(){

            if( !this.channelName.trim()){
                return
            }
            
            if( this.channelURL === '' ){
                this.channelURL = 'https://www.barriblog.com/wp-content/uploads/2011/02/python.png'
            }
            
            let newChannel = {

                name : this.channelName,
                url: this.channelURL,
                status : this.channelStatus
            }           
            
            let result = await fetch( '/rest/channels',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify( newChannel )
            })
            
            result = await result.json();
            
            this.$store.commit( 'appendChannel', newChannel );

            this.channelName = ''
            this.channelURL = ''
            this.channelStatus = ''
        },
    },


    computed:{

        currentUser(){
            return this.$store.state.currentUser
        },

        returnName(){
            return this.$store.state.names
        },

        
        channels(){
            return this.$store.state.channels
        },
    },



    async created(){

        await fetch('/rest/channels')
            .then( channels => channels.json())
            .then( channels => this.$store.commit( 'setChannels', channels))

            console.log("hheofihadlfkhlashdflshdfsa")

        await fetch('/rest/accountchannels')
            .then( accountChannels => accountChannels.json())
            .then( accountChannels => this.$store.commit( 'setAccountChannels', accountChannels))
            .then( accountChannels => accountChannels.forEach( channel => console.log( channel )))
    }









} /********* E N D */