/********************************* /
* Orginal by ......
* Last Edited by ......
* Notes: Not In use
/**********************************/
export default{
    components:{
    },


/*********************************************************************************************************** Template: */


    template:`
        <section>
            
            <div id="displayChannelBox"
            v-for="(channel, i ) of channels">

                <div id="channelNamesFor"
                    v-for="channelName of channelNames">
            

                    <div id="displayChannelBoxAccountid">{{ channel.accountid }}</div>
                    <div id="displayChannelBoxChannelnameid">{{ channel.channelnameid }}</div>
                    <div id="displayChannelBoxChannelform">{{ channel.channelform }}</div>
                    <div id="displayChannelBoxAdmin">{{ channel.admin }}</div>

                    <div id="displayChannelBoxFavorite">❤️</div>

                </div>

            </div>

        </section>
    `,



/*********************************************************************************************************** Methods:*/

    methods:{

        async getSome( channelnameid ){

            let channels = await fetch('/rest/channels')
                .then( c => c.json())

            console.log( channelNames[channelnameid].name )
        },

        ifSameChannelId( id ){
            console.log("clicked")

            channels.forEach( c => {
                console.log( c.id )
                /*channelNames.forEach( cn => {
                    console.log( cn[ c.accountid ] )
                })*/
            })
        },

        getChannelNameFromId(){
            channelNames.forEach( channelName => console.log( channelName ))
        },
        

        
        /***************************************************************************** REMOVE */

        removeChannels( index ){
            this.$store.commit( 'removeChannel', index ) },

    },


/*********************************************************************************************************** Computed: */


    computed:{
        
        channels(){
            return this.$store.state.channels },

        
        channelNames(){
            return this.$store.state.channelNames },

    },



/*********************************************************************************************************** Created: */

    async created(){

        await fetch('/rest/channels')
        .then( channels => channels.json())
        .then( channels => this.$store.commit( 'setChannels', channels ))
    }



}