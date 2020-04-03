/********************************* /
* Orginal by Hassan. 2020-03-20
* Last Edited by ......
* Notes: Not in use
/**********************************/
export default{
    components:{

    },


    template:`
    
        <section>
            
            <div id="displayChannelNamesBox"
                v-for="cName of channelNames">

                <div id="displayChannelNamesBoxPic">{{ cName.name }}</div>
                <div id="displayChannelNamesBoxName">{{ cName.url }}</div>
                <div id="displayChannelNamesBoxFavorite">❤️</div>
                <div id="displayChannelNamesBoxSettings">⚙️</div>

            </div>

        </section>
    `,


/***************************************************************************************************************** Methods: */


    methods:{

    },


/***************************************************************************************************************** Computed: */


    computed:{

        channelNames(){
            return this.$store.state.channelNames
        }

    },

/***************************************************************************************************************** Created: */

    async created(){

        /*await fetch('/rest/channelnames')
            .then( channelNames => channelNames.json() )
            .then( channelNames => this.$store.commit( 'setChannelNames', channelNames ))
            .catch(error => console.error(error))*/

        await fetch('/rest/channelnames')
            .then( channelNames => channelNames.json())
            .then( channelNames => this.$store.commit( 'setChannelNames', channelNames ))
    }

    
/***************************************************************************************************************** Created: */
/***************************************************************************************************************** Created: */



}