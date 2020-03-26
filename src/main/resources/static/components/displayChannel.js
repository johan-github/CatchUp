

export default{
    components:{
    },


/*********************************************************************************************************** Template: */


    template:`
        <section>
            
            <div id="displayChannelBox"
            v-for="(currentUser, i ) of currentUsers">

                    <div id="displayChannelBoxAccountid"> {{currentUser.enterUserEmail}} </div>

                    <div id="displayChannelBoxFavorite">❤️</div>
            </div>

        <button @click='getCurrentUserInfo'>See Current User</button>
        </section>
    `,



/*********************************************************************************************************** Methods:*/

    methods:{

        getCurrentUserInfo(){
            console.log(this.currentUsers.id);
            console.log(this.currentUsers.email);
            console.log(this.currentUsers.usernick);
            
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
        .then(accounts => accounts.forEach(account => console.log(account)))
        
    }



}