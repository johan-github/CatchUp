
export default {
    template:`
        <section>

            <form @submit.prevent="loginCurrentUserForm" id="container">

                <label id="label"> Please login to continue </label>
                
                <div id="loginUserFormFields">
                    
                    <div>
                        <input id="loginUserFormUsernameField" placeholder="Enter your email" v-model="enterUserEmail" type="text">
                        <div id="msgError">{{ msgErrorUsername }}</div>
                    </div>

                    <div>
                        <input id="loginUserFormPasswordField" placeholder="Enter your password" v-model="enterPassword" type="password">
                        <div id="msgError">{{ msgErrorPassword }}</div>
                    </div>

                    
                </div>             

                    <button id="loginUserFormButtonLogin">Login</button>
                
            </form>
                
        </section>    
    `,



    data() {
        
        return {
            enterUserEmail: '',
            enterPassword: '',

            msgErrorUsername : '',
            msgErrorPassword : '',
        }
    },



    methods: {
        async loginCurrentUserForm() {
            if (!this.enterUserEmail.trim()) {
                this.msgErrorUsername = 'Please enter your email!'
                this.msgErrorPassword = ''
                return
            }
            

            this.msgErrorUsername = ''


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
                    if( account.email.toLowerCase() === this.enterUserEmail.toLowerCase() ){
                        
                        let foundUserWithEnteredEmail = await fetch('/rest/accounts/email/' + this.enterUserEmail)
                        .then( rightAccount => rightAccount.json())
                        
                        console.log( "4")
                        console.log( "account.email " + account.email)
                        if ( foundUserWithEnteredEmail.password === this.enterPassword ){
                        this.$store.commit('setCurrentUser', foundUserWithEnteredEmail)
                        this.$store.commit('changeLoggedIn')
                        this.$router.push('/home')                        
                    }
                }                
            }
            
            this.msgErrorPassword = 'Please enter a valid username and/or password!'
            return
            
        }
    },



    computed:{

        userLoggedIn(){
            return this.$store.state.userLoggedIn
        }
    }





































}