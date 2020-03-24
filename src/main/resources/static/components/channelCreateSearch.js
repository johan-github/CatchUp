import displayChannel from './displayChannel.js'
import createChannel from './createChannel.js'

export default{
    components:{
        createChannel,
        displayChannel,

    },
    

    template: `
        <section id="channelCreateSearchBox">

            <div id="channelCreateSearchBoxSearchBar">
                <input id="channelCreateSearchBoxSearchBarInput">
            </div>

            <div id="channelCreateSearchBoxCreateNewChannel">
                <button id="channelCreateSearchBoxCreateNewChannelButton">Create new Channel</button>                
            </div>

            <div id="channelCreateSearchBoxCompCreateChannel">
                <createChannel/>                
            </div>

            <div id="channelCreateSearchBoxCompDisplayChannel">
                <displayChannel/>                
            </div>            


        </section>
    `,


    data(){
        return{
            channelName: '',
            channelStatus: '',

            firstName: '',
            lastName: ''

        }
    },


    methods:{
        
        
        async createChannel(){
            if( !this.channelName.trim()){
                return;
            }

            let channel = {
                channelName: this.channelName
            }

            let result = await fetch( '/rest/channel/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( channel )
            })

            result = await result.json();
            
            this.$store.commit( 'appendChannel', channel);

            this.channelName = '';
        }
    },

    computed:{
        returnName(){
            return this.$store.state.names
        }
    }
}




