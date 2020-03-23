
export default{
    components:{

    },
    

    template: `
            <form @submit.prevent="addNewChannelToTestChannels" id="createChannelBox">
                <input id="createChannelBoxTextField" v-model="channelName" type="text" placeholder="Channel name..." required>

                <label id="createChannelBoxMembersLabel">Friends</label>

                <select id="createChannelBoxMembers" multiple>
                    <option value="helena">Helena</option>
                    <option value="alberts">Alberts</option>
                    <option value="tobbe">Tobbe</option>
                    <option value="johan">Johan</option>
                    <option value="matthias">Matthias</option>
                    <option value="hassan">Hassan</option>
                </select>
            
                <button id="createChannelBoxAddButton">➕ Create channel</button>
            </form>
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
        addNewChannelToTestChannels(){
            if( !this.channelName.trim() ){
                console.log( "channelName is empty")
                return
            }

            console.log( this.channelName )

            let channel = {
                channelName: this.channelName
            }

            this.$store.commit( 'appendChannel', channel)

            this.channelName = ''


        },

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
        /*async createChannel(){
            if(!this.channelName.trim()) {
              return
            }

            let channel = {
                channelName: this.channelName,
                channelStatus: this.channelStatus
            }
            
            let result = await fetch( '/rest/channel', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(channel)
              })
              
              result = await result.json()

            this.channelName = '';

            this.$store.commit('appendChannel', channel)
            
        }*/
    },

    computed:{
        returnName(){
            return this.$store.state.names
        }
    }
}




