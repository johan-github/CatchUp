/********************************* /
* Orginal by Johan. 2020-04-07
* Last Edited by Johan, Tobbe, Alberts, Helena 2020-04-07
* Notes: 
/**********************************/
export default{
    template:`
        <section id="container">
            <div>
                <h3 id="label">Add a new friend</h3>
                <input v-model="searchNickname" type="text" placeholder="Enter nickname here"/>
                <button @click="searchByNickname" type="submit">Add Friend</button>
                <div id="addedFriend">{{ addedFriend }}</div>
            </div>
            <div></div>
            <button @click="routeToFriends" > Back </button>
        </section>
    `,

    data()
    {
        return{
            searchNickname: '',
            addedFriend: '',
            accounts: []
        }
    },

    methods:{
        async searchByNickname(){

            await fetch('/rest/accounts')
            .then( accounts => accounts.json())
            .then( accounts => this.accounts = accounts )
            this.findAccounts();
            this.searchNickname = ''   
        },

        findAccounts() {
            for(let account of this.accounts) {
                if(account.usernick === this.searchNickname) {
                    console.log(account.id)
                    console.log(account.usernick)
                    this.addFriendToFriendlist(account.id);
                    this.addedFriend = "You have added " + account.usernick + " as a friend"
                    //console.log("TEST usernick " + this.addedFriend)
                    break
                }
                if(account.usernick !== this.searchNickname){
                    this.addedFriend = "Could not find user " + this.searchNickname
                }
            }
           
        },

        async addFriendToFriendlist( friendId ) {

         let friend = {
             accountid: this.currentAccount.id,
             accountfriendid: friendId
         }
         console.log(this.currentAccount.id)
         console.log(friendId)

         await fetch('/rest/friends',{
             method: 'POST',
             headers: { 'Content-Type' : 'application/json'},
             body: JSON.stringify( friend )
         })

         
         
     },
        routeToFriends(){
        this.$router.push('/friends')
        }
    },

    computed:{
        currentAccount() {
        return this.$store.state.currentAccount
        }
    },

}