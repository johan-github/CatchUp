import displayFriends from './displayFriends.js'

export default{
    components:{
        displayFriends
    },


/*********************************************************************************************************** */


    template:`
    <!--<ul>
      <li v-for="channelName of channelNames" 
          :key="channelName.id"
          class="channelName-card">
          <h3>{{ channelNames.name }}</h3> <br>
        </li>

        <button @click="getChannelNames">Get channelNames</button>
    </ul>
        <section>
            <div id="displayChannelBox"  v-for="channelName of channelNames">

                <div id="displayChannelBoxName">{{ channelName.name }}</div>
            </div>

            <div>
                <displayFriends/>
            </div>
        </section>-->

        <section>
            <div id="displayChannelBox" v-for="(cName, i ) of channelNames" :key="cName.firstName + i">
                <div id="displayChannelNick">{{ cName.name }}</div>
                <div id="displayChannelAddFavorite">❤️</div>
            </div>
        </section>
    `,



/*********************************************************************************************************** */

    methods:{
        removeChannel( index ){
            this.$store.commit( 'removeChannel', index ) },

            /************************************************* */

        async getChannelNames() {
            let channelNames = await fetch('/rest/channelnames')

            channelNames = await channelNames.json()

            console.log(channelNames)
            
            this.$store.commit('setChannelNames', channelNames)
        }

    },


/*********************************************************************************************************** */


    computed:{
        channelNames(){
            return this.$store.state.channelNames },

        getChannels(){
            return this.$store.state.channels },

        getNames(){
            return this.$store.state.names },

    },



    async created(){
        let channelNames = await fetch('/rest/channelnames')
        channelNames = await channelNames.json()
        
        this.$store.commit('setChannelNames', channelNames)
    }



}
/*
<div id="displayChannelBox"
                v-for="(channelName, i ) of getChannelNames"
                :key="channelName.name + i">

                <div id="displayChannelBoxName">{{ channelName.name }}</div>
                <div id="displayChannelBoxMember">Member(s)</div>

                <select id="displayChannelBoxMember" v-for="(name) of getNames">
                    <option>{{ name.firstName }}</option>
                </select>

                <div @click="removeChannel( i )" id="displayChannelBoxRemove">🗑️</div>
                <div id="displayChannelBoxLastMessage">Last messgae in channel here?!</div>
            </div>

            <div>*/