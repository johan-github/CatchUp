

export default{
    components:{
    },


/*********************************************************************************************************** Template: */


    template:`
        <section>
            
            <div id="displayChannelBox"
            v-for="(myChannel, i ) of myChannels">

                    <div id="displayChannelBoxAccountid"> {{myChannel}} </div>

                    <div id="displayChannelBoxFavorite">❤️</div>
            </div>
        </section>
    `,





/*********************************************************************************************************** Methods:*/

    data() {
        return {
            channelIds : [],
            myChannels : []
        }
    },

    methods:{
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
        //  console.log("hittade inga kanaler")
        //  return

         console.log(this.channelIds)
         this.getMyChannels()
            
        }

    //     async getSome( channelnameid ){

    //         let channels = await fetch('/rest/latestchannelmessages/'+5)
    //             .then( c => c.json())

    //         console.log( channelNames[channelnameid].name )
    //     },

    //     ifSameChannelId( id ){
    //         console.log("clicked")

    //         channels.forEach( c => {
    //             console.log( c.id )
    //             /*channelNames.forEach( cn => {
    //                 console.log( cn[ c.accountid ] )
    //             })*/
    //         })
    //     },

    //     getChannelNameFromId(){
    //         channelNames.forEach( channelName => console.log( channelName ))
    //     },
        

        
    //     /***************************************************************************** REMOVE */

    //     removeChannels( index ){
    //         this.$store.commit( 'removeChannel', index ) },

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

//        .then( channels => this.$store.commit( 'setChannels', channels ))

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
        .then(this.accountChannels.forEach(accountChannel => console.log(accountChannel)))

        this.getCurrentUserInfo()
        
    }



}