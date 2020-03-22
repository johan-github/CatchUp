

export default{
    template:`
        <section>
            <div id="displayChannelBox" v-for="friend of friendList" :key="friend.id">
                
                <div id="displayFriendNick">{{ friend.firstName }}</div>
                <div id="displayFriendStatus">{{ friend.status }}</div>
                <div id="displayChannelAddFavorite">❤️</div>
                <div id="displayFriendCreateChannelWith">➕</div>
                <div id="displayFriendRemove">🗑️</div>
            </div>
        </section>


        <!-- <section>
            <div id="displayFriendBox" v-for="(friend, i ) of getNames" :key="friend.firstName + i">
                <div id="displayFriendPic">{{ friend.picture }}</div>
                <div id="displayFriendNick">{{ friend.firstName }}</div>
                <div id="displayFriendAddFavorite">❤️</div>
                <div id="displayFriendCreateChannelWith">➕</div>
                <div id="displayFriendRemove">🗑️</div>
            </div>
        </section>  -->
    `,

/*********************************************************************************************************** */

methods:{
},

/*********************************************************************************************************** */

    computed:{
        computed:{
            friendList(){
                return this.$store.state.friendList },
    
        },
    /**
     * 
     *         Atm. friendslist is hardcoded to 9. Until store has current active user account.id    
     * 
     * */
        
       /* async created(){
            let friendList = await fetch('/rest/friendlist/' + 9)
            friendList = await friendList.json()
    
            console.log(friendList)
            this.$store.commit('setFriendList', friendList)
        }*/
    }
}