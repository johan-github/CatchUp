/********************************* /
* Orginal by Hassan. 2020-03-30
* Last Edited by Johan (cleanUp) 2020-04-01
* Notes: This is when you go in to a channel it will display all the messages in the channel.
/**********************************/
export default{
    components:{
    },


/*********************************************************************************************************** Template: */


    template:`
        <section id="container">

        <h3 id="label">#ChannelName here?</h3>

            <div  id="scrollContainer">

                <div v-for="(message, i ) of currentAccountMessages">

                    <div id="channelCreateSearchChannelInfo"
                        @click="showMessageIndex( i )">{{ message.text }}</div>

                </div>

            </div>

            <button @click="backToDisplayChannelPage">B A C K</button>

        </section>
    `,





/*********************************************************************************************************** Methods:*/

    data() {
        return {
            messages : [],
            
        }
    },
    

/*********************************************************************************************************** Methods:*/


    methods:{


        showMessageIndex( index ){
            for( let message of this.currentAccountMessages ){
                console.log( message.text )
            }
            console.log( this.currentAccountMessages.length );
            console.log( index );
        },


        backToDisplayChannelPage(){
            this.$store.commit( 'setCurrentChannelMessages', '' )
            this.$router.push( '/home')
        },

    },


/*********************************************************************************************************** Computed: */

    computed:{

        currentAccountMessages(){
            return this.$store.state.currentChannelMessages;
        },
    },


    



/*********************************************************************************************************** Created: */

    async created(){

        //Fetches/gets all the channels from channels.db and stores it in a channels ("class-array")
        await fetch('/rest/messages')
            .then( messages => messages.json())
            .then( messages => this.allMessages = messages )

        this.showMessageIndex()
        
    }



}