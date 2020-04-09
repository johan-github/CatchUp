/********************************* /
* Orginal by Hassan. 2020-03-26
* Last Edited by Helena  2020-04-08
* Notes: Not in use any more. Old,. Is replaced with displayFriends.js
/**********************************/
export default{
    template:`
        <section id="container">
            <div id="displayFriendBox"
                v-for="(friend, accountid) of friendList" :key="accountid">
                <img id="displayFriendPic" v-bind:src="friend.avatar" />
                <div id="displayFriendNick">{{ friend.usernick }}</div>
                <div id="displayFriendStatus">{{ userStatus( friend.status ) }}</div>
                <div id="startChat" @click="startChatting">💬</div>
            </div>
            <button @click="routeToAddFriend" >Add new friend</button>
        </section>
    `,
/*********************************************************************************************************** */
 methods:{
     userStatus( status ){
         if(status === 'online'){
             return '🟢'
         }
             return '🔴'
     },
     
     routeToAddFriend(){
        this.$router.push('/addNewFriend')
    },

    startChatting(){
        this.$router.push('/createChannel')
    }
} ,


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
   
    async created(){
        console.log("our accountid " + this.getCurrentAccount.id)
        let friendList = await fetch('/rest/friendlist/' + this.getCurrentAccount.id)
        friendList = await friendList.json()

        //console.log(friendList.id)
        this.$store.commit('setFriendList', friendList)
     }
    
}