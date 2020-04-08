/********************************* /
* Orginal by Johan. 2020-04-07
* Last Edited by Johan, Tobbe, Alberts, Helena 2020-04-07
* Notes: 
/**********************************/
export default{
    template:`
        <section>            
            <input v-model="searchNickname" type="text" placeholder="Enter nickname here"/>
            <button @click="searchByNickname" type="submit">Add Friend</button>
        </section>
    `,

    data()
    {
        return{
            searchNickname: '',
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
         
     }
        
    },

    computed:{
        currentAccount() {
        return this.$store.state.currentAccount
        }
    },

}