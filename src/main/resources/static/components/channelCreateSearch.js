import displayChannel from './displayChannel.js'
import createChannel from './createChannel.js'

export default{
    components:{
        createChannel,
        displayChannel,

    },
    

    template: `
        <section id="channelCreateSearchContainer">

             <form id="channelCreateSearchSearchAndCreateBox">

                <input id="channelCreateSearchBar"
                    type="text" placeholder="Search channel..."
                    @keyup.enter = "channelName">
            
                <button id="channelCreateSearchButton"
                    @click="namn">Search</button>

                <button id="channelCreateSearcCreateNewChannelButton"
                    @click="routeToCreateChannels">Create new channel</button>
                    
            </form>

            <!------------------------------------------------------------------->
            <!------------------------------------------------------------------->
    <div  id="channelCreateSearchForm">
            <div
                v-for="(channel, i ) of channels">

                <div id="channelCreateSearchChannelInfo"
                    @click="filterByName">{{ channel.name }}</div>

            </div>
            </div>






            <!--<div id="channelCreateSearchBoxCompDisplayChannel">
                <displayChannel/>                
            </div>-->          


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
        clicked(){
            console.log("clicked")
        },

        


        filterByName(){

            /*for( let channel of this.channels ){
                console.log( channel )
            }*/

            this.channels.filter( channel => {
                if( channel === this.channelName ){
                    console.log( channel.name )
                }

                console.log( channel )
            })

            /*channels().fiter( channel => channel.name === this.channelName )*/
            
            






        },



        routeToCreateChannels(){
            console.log("cliked")
            this.$router.push( '/createChannel')

        },

        async createChannel(){

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
    }









} /********* E N D */