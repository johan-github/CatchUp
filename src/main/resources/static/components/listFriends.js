

export default{
    template:`
        <section>
            <div id="displayFriendBox" v-for="friend of friendList" :key="friend.id">
            <img id="displayFriendPic" v-bind:src="friend.avatar" />
                <div id="displayFriendNick">{{ friend.usernick }}</div>
                <div id="displayFriendStatus">Online: {{ friend.status }}</div>
                <div id="displayFriendAddFavorite">❤️</div>
                <div id="displayFriendCreateChannelWith">➕</div>
                <div id="displayFriendRemove">🗑️</div>
            </div>
        </section>
    `,
/*********************************************************************************************************** */
   
methods:{
            
    async getFriendList(){
        let friendList = await fetch('/rest/friendlist/' + 4)
        friendList = await friendList.json()

        console.log(friendList)
        this.$store.commit('setFriendList', friendList)
    }
},

/*********************************************************************************************************** */

    computed:{
            friendList(){
                return this.$store.state.friendList },
        
        getNames(){
            return this.$store.state.names }
        
        },
    /**
     * 
     *         Atm. friendslist is hardcoded to 9. Until store has current active user account.id    
     * 
     * */
    async created(){
        let friendList = await fetch('/rest/friendlist/' + 4)
        friendList = await friendList.json()

        console.log(friendList)
        this.$store.commit('setFriendList', friendList)
    }
    
}