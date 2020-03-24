import addFriend from './addFriend.js'
import addFriendAdded from './addFriendAdded.js'



export default{
    components:{
        addFriend,
        addFriendAdded,
    },
    

    template: `
        <section>
            <form id="createChannelBox"
                @submit.prevent="addNewChannelToTestChannels" >

                <input id="createChannelBoxTextField"
                    type="text" required
                    placeholder="Name your new channel here..."
                    v-model="channelName" >
                
            </form>

            <div id="createChannelBoxFriendAllLists">

                <div id="createChannelBoxFriendList">
                    <addFriend/>
                </div>

                <div id="createChannelBoxFriendListAdded">
                    <addFriendAdded/>
                </div>
                
                <button id="createChannelBoxButton">Create</button>

            </div>

        </section>
    `,

    data(){
        return{
            channelName: ''
        }
    },


    methods:{
        
        async addNewChannelName(){

            if( !this.channelName.trim() ){
                console.log( "channelName is empty")
                return };

            console.log( this.channelName );

            let newChannelName = {
                channelName: this.channelName };

            let result = await fetch( '/rest/channelnames/',{
                method: 'POST',
                headers: { 'Content-type' : 'application/json' },
                body: JSON.stringify( newChannelName ) }); //addNewChannel object
            
            result = await result.json();

            this.$store.commit( 'appendChannelNames', newChannelName);

            this.channelName = ''; },
        



   }


}
    




