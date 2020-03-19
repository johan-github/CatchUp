import displayFriends from './displayFriends.js'

export default{
    components:{
        displayFriends
    },

    
    template:`
        <section>
            <div id="displayChannelBox" v-for="(channel, i ) of getTestChannels" :key="channel.testChannelName + i">
                <div id="displayChannelBoxName">{{ channel.testChannelName }}</div>
                <div id="displayChannelBoxStatus">🟢{{ channel.status }}</div>
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

    methods:{

        /***************************************************** */

        removeChannel( index ){
            this.$store.commit( 'removeTestChannel', index )
        }

    },


    computed:{
        getChannels(){
            return this.$store.state.channels
        },

        getTestChannels(){
            return this.$store.state.testChannels
        },

        getNames(){
            return this.$store.state.names
        }

    }
}




