/********************************* /
* Orginal by Tobias. 2020-03-27
* Last Edited by Johan (cleanUp) 2020-04-01
* Notes: Login need to fix security
/**********************************/
export default {
    template: /* html */`
        <section>

            <form @submit.prevent="loginCurrentAccountForm" id="container">

                <label id="label"> Please login to continue </label>
                
                <div id="loginAccountFormFields">
                    
                    <div>
                        <input id="loginAccountFormAccountnameField" placeholder="Enter your email" v-model="enterAccountEmail" type="text">
                        <div id="msgError">{{ msgErrorAccountname }}</div>
                    </div>

                    <div>
                        <input id="loginAccountFormPasswordField" placeholder="Enter your password" v-model="enterPassword" type="password">
                        <div id="msgError">{{ msgErrorPassword }}</div>
                    </div>

                    
                </div>             

                    <button id="loginAccountFormButtonLogin">Login</button><br>
                    <p>Don't have an account? <a href="/registerAccount">Register here!</a></p>
                
            </form>
                
        </section>    
    `,



    data() {
        
        return {
            enterAccountEmail: '',
            enterPassword: '',

            msgErrorAccountname : '',
            msgErrorPassword : '',
        }
    },



    methods: {
        async loginCurrentAccountForm() {
            if (!this.enterAccountEmail.trim()) {
                this.msgErrorAccountname = 'Please enter your email!'
                this.msgErrorPassword = ''
                return
            }
            

            this.msgErrorAccountname = ''


            if (!this.enterPassword.trim()) {
                this.msgErrorPassword = 'Please enter your password!'
                return
            }
            

            this.msgErrorPassword = ''
            

            let accountsFromDB = await fetch('/rest/accounts')
                .then( accounts => accounts.json())

                console.log( "1")
                for( let account of accountsFromDB ){
                    
                    console.log( "2")
                    if( account.email.toLowerCase() === this.enterAccountEmail.toLowerCase() ){
                        
                        let foundAccountWithEnteredEmail = await fetch('/rest/accounts/email/' + this.enterAccountEmail)
                        .then( rightAccount => rightAccount.json())
                        
                        console.log( "4")
                        console.log( "account.email " + account.email)
                        if ( foundAccountWithEnteredEmail.password === this.enterPassword ){
                        this.$store.commit('setCurrentAccount', foundAccountWithEnteredEmail)
                        this.$router.push('/home')
                    }
                }                
            }
            
            this.msgErrorPassword = 'Please enter a valid accountname and/or password!'
            return
            
        }
    },
}