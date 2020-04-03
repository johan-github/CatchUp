/********************************* /
* Orginal by Tobias. 2020-03-27
* Last Edited by Johan, Hassan, Tobbe (cleanUp) 2020-04-03
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

                for( let account of accountsFromDB ){
                    
                    if( account.email.toLowerCase() === this.enterAccountEmail.toLowerCase() ){
                        
                        let foundAccountWithEnteredEmail = await fetch('/rest/accounts/email/' + this.enterAccountEmail)
                        .then( rightAccount => rightAccount.json())
                        
                        if ( foundAccountWithEnteredEmail.password === this.enterPassword ){
                            let changeStatusToOnline = {
                                
                                    id: foundAccountWithEnteredEmail.id,
                                    email: foundAccountWithEnteredEmail.email,
                                    usernick: foundAccountWithEnteredEmail.usernick,
                                    password: foundAccountWithEnteredEmail.password,
                                    avatar: foundAccountWithEnteredEmail.avatar,
                                    status: "online"
                                
                            }
                            await fetch('/rest/accounts',{
                                method:'PUT',
                                headers:{
                                    'Content-Type':'application/json'
                                },
                                body: JSON.stringify(changeStatusToOnline)

                            })
                            console.log(changeStatusToOnline.status)
                        this.$store.commit('setCurrentAccount', changeStatusToOnline)
                        this.$router.push('/home')
                    }
                }                
            }
            
            this.msgErrorPassword = 'Please enter a valid accountname and/or password!'
            return
            
        }
    },
}