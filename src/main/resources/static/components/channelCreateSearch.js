/********************************* /
* Orginal by Hassan. 2020-03-24
* Last Edited by Hassan. 2020-03-30
* Notes: When in channels this will popup from displayChannel.js
/**********************************/
export default{

    components:{

    },
    

    template: `
        <section id="container">

             <form id="channelCreateSearchSearchAndCreateBox">

                <input id="channelCreateSearchBar"
                    type="text" placeholder="Search channel..."
                    @keyup.enter = "channelName">
            
                <button id="channelCreateSearchButton"
                    @click="">Search</button>

                <button id="channelCreateSearcCreateNewChannelButton"
                    @click="routeToCreateChannels">Create new channel</button>
                    
            </form>

            <!------------------------------------------------------------------->

            <div  id="channelCreateSearchForm">
                <div v-for="(myChannel, i ) of myChannels">

                    <div id="channelCreateSearchChannelInfo">{{ myChannel }}</div>

                </div>
            </div>


        </section>
    `,


    data(){
        return{

            channelName: '',
            channelURL: '',
            channelStatus: '',

            channelIds : [],
            myChannels : [],
            

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

        
        getMyChannels(){
            for(let channel of this.channels) {
                for(let channelId of this.channelIds) {
                    if(channel.id === channelId) {
                        this.myChannels.push(channel.name)
                        console.log(channel.name)
                    }
                }
            }
        },


        getCurrentUserInfo(){
         for(let accountChannel of this.accountChannels) {
             if(accountChannel.accountid === this.currentUsers.id) {
                 this.channelIds.push(accountChannel.channelid)
             } 
         }

         this.getMyChannels()
            
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

        currentUsers(){
            return this.$store.state.currentUser
        },
    },


/*********************************************************************************************************** Created: */

    async created(){
        
        await fetch('/rest/channels')
        .then(channels => channels.json())
        .then(channels => this.$store.commit('setChannels', channels))


        await fetch('/rest/accountchannels')
        .then(accountChannels => accountChannels.json())
        .then(accountChannels => this.$store.commit('setAccountChannels', accountChannels))
        .then(this.accountChannels.forEach(accountChannel => console.log(accountChannel)))

        this.getCurrentUserInfo()
        
    }









} /********* E N D */