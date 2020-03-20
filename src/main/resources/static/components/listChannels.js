import displayFriends from './displayFriends.js'

export default{
    components:{
        displayFriends
    },


/*********************************************************************************************************** */


    template:`
        <section>
            <div id="displayChannelBox"
                v-for="(channelName, i ) of getChannelNames"
                :key="channelName.name + i">

                <div id="displayChannelBoxName">{{ channel.channelName }}</div>
                <div id="displayChannelBoxMember">Member(s)</div>

                <select id="displayChannelBoxMember" v-for="(name) of getNames">
                    <option>{{ name.firstName }}</option>
                </select>

                <div @click="removeChannel( i )" id="displayChannelBoxRemove">🗑️</div>
                <div id="displayChannelBoxLastMessage">Last messgae in channel here?!</div>
            </div>

            <div>
                <displayFriends/>
            </div>
        </section>
    `,



/*********************************************************************************************************** */

    methods:{
        removeChannel( index ){
            this.$store.commit( 'removeChannel', index ) }

    },


/*********************************************************************************************************** */


    computed:{
        getChannelNames(){
            return this.$store.state.channelnames },

        getChannels(){
            return this.$store.state.channels },

        getTestChannels(){
            return this.$store.state.testChannels },

        getNames(){
            return this.$store.state.names },

    }
}




