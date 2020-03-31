/****************************************
 *  Original created by Johan,
 * 2020-03-31
 * Notes:
 * 
 *****************************************/


 

export default {
    template:`
        <section>
            <div type="alert">
                <loggingOut/>
                <logOutCurrentUser/>
            </div>
                
        </section>    
    `,


loggingOut(){
this.$dialog.confirm('Do you wish to log out?')
.then(function() {
    loggingOff()
        logOutCurrentUser()
    
    console.log('Clicked on PROCEED')
})
.catch(function() {
    console.log('Clicked on CANCEL')
})} ,


    data() {
        return {
            // logOutAlert: '',
            // logOutCheck: '',
            logOutCurrentUser: '',
        }
    },



    methods: {

        async logOutCurrentUser() {
            
            this.$router.push('/loginUser')
            
            //     this.$dialog.confirm
                // let accountsFromDB = await fetch('/rest/accounts')
                //     .then( accounts => accounts.json())
        }
    },


    computed:{

    }





































}