/********************************* /
* Orginal by Hassan. 2020-03-30
* Last Edited by ......
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

                <div v-for="(message, i ) of currentUserMessages">

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
            for( let message of this.currentUserMessages ){
                console.log( message.text )
            }
            console.log( this.currentUserMessages.length );
            console.log( index );
        },


        backToDisplayChannelPage(){
            this.$store.commit( 'setCurrentChannelMessages', '' )
            this.$router.push( '/home')
        },

    },


/*********************************************************************************************************** Computed: */

    computed:{

        currentUserMessages(){
            return this.$store.state.currentChannelMessages;
        },
    },


    



/*********************************************************************************************************** Created: */

    async created(){

        this.showMessageIndex()
        
    }



}