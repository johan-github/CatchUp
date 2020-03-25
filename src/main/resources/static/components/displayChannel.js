

export default{
    components:{
    },


/*********************************************************************************************************** Template: */


    template:`
        <section>
            
            <div id="displayChannelBox"
            v-for="(channel, i ) of channels">            

                    <div id="displayChannelBoxAccountid"> {{channel.name}} {{channel.id}} </div>

                    <div id="displayChannelBoxFavorite">❤️</div>

            </div>

        </section>
    `,



/*********************************************************************************************************** Methods:*/

    methods:{

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
        }
    },


    



/*********************************************************************************************************** Created: */

    async created(){

//        .then( channels => this.$store.commit( 'setChannels', channels ))


        await fetch('/rest/channels')
        .then(channels => channels.json())
        .then(channels => this.$store.commit('setChannels', channels))
    }



}