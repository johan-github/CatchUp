/********************************* /
* Orginal by Johan. 2020-04-07
* Last Edited by Johan, Tobbe, Alberts, Helena 2020-04-07
* Notes: 
/**********************************/
export default{
    template:`
        <section>            
            <input v-model="searchNickname" type="text" placeholder="Enter nickname here"/>
            <button @click="searchByNickname" type="submit">Search</button>
         

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
        },

        findAccounts() {
            for(let account of this.accounts) {
                if(account.usernick === this.searchNickname) {
                    console.log(account.usernick)
                }
            }
        }

        
        
    },


    computed:{
            // Needed ???
            
    },


 
}