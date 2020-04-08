/********************************* /
* Orginal by Hassan. 2020-03-26
* Last Edited by Johan (cleanUp) 2020-04-01
* Notes: Not in use any more. Old,. Is replaced with displayFriends.js
/**********************************/
export default{
    template:`
        <section id="container">
            <div id="displayFriendBox"
                v-for="friend of friendList" :key="friend.accountid">
                <img id="displayFriendPic" v-bind:src="friend.avatar" />
                <div id="displayFriendNick">{{ friend.usernick }}</div>
                <div id="displayFriendStatus">Status: {{ friend.status }}</div>
                <!-- <div id="displayFriendAddFavorite">❤️</div>
                <div id="displayFriendCreateChannelWith">➕</div> -->
                <!-- <div id="displayFriendRemove">🗑️</div> -->
            </div>
        </section>
    `,
/*********************************************************************************************************** */
   
 methods:{
            
     async getFriendList(){
         console.log("Current account id " + this.getCurrentAccount.id)
        let friendList = await fetch('/rest/friendlist/' + this.getCurrentAccount.id)
         friendList = await friendList.json()

         console.log(friendList)
         this.$store.commit('setFriendList', friendList)
     },

     userStatus(){
         
     }
 },

/*********************************************************************************************************** */

    computed:{

        friendList(){
                return this.$store.state.friendList },
        
        getNames(){
            return this.$store.state.names },

        getCurrentAccount(){
            return this.$store.state.currentAccount
        }
        
        },
    /**
     * 
     *         Atm. friendslist is hardcoded to 9. Until store has current active account account.id    
     * 
     * */
    async created(){
        console.log("our accountid " + this.getCurrentAccount.id)
        let friendList = await fetch('/rest/friendlist/' + this.getCurrentAccount.id)
        friendList = await friendList.json()

        //console.log(friendList.id)
        this.$store.commit('setFriendList', friendList)
     }
    
}