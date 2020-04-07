/********************************* /
* Orginal by Johan. 2020-04-07
* Last Edited by Johan, Tobbe, Alberts, Helena 2020-04-07
* Notes: 
/**********************************/
export default{
    template:`
        <section>            
            <input v-model="searchNickname" type="text" placeholder="Enter nickname here"/>
            <button type="submit">Search</button>
         

        </section>
    `,

    data()
    {
        return{
            searchNickname: ''
        }
    },

    methods:{
        async searchByNickname(){
            await fetch( '/rest/accounts', {
                method: 'POST',
                headers: {
                'Content-Type' : 'application/json'
                },
                body: JSON.stringify( newFriend ) // ???
                })
        }
        
    },


    computed:{
            // Needed ???
            
    },


 
}