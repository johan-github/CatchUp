
export default {
    template:`
    
    <form @submit.prevent="loginCurrentUserForm" class="loginUser">
        <div>
        <label>Enter username</label>
        <input placeholder="Username" v-model="enterUserEmail">
        <label>Enter password</label>
        <input placeholder="Password" v-model="enterPassword" type="password">
        </div>
        <button>Login</button>
    </form>
    
    `,

    data() {
        
        return {
            enterUserEmail: '',
            enterPassword: ''
        }
    },

    methods: {
        async loginCurrentUserForm() {
            if (!this.enterUserEmail.trim() || !this.enterPassword.trim()) {
                return
            }

            console.log("TEST " + this.enterUserEmail, this.enterPassword)

            let currentUser = {
                enterUserEmail: this.enterUserEmail,
                enterPassword: this.enterPassword
            }

            // currentUser = await fetch('/rest/accounts/email/' + this.enterUserEmail)
            
            currentUser = await fetch('/rest/accounts/email/' + this.enterUserEmail, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
                // body: JSON.stringify(currentUser)
              })
             
              currentUser = await currentUser.json()

            console.log(currentUser)
            console.log(currentUser.password);
            
        }
    }
}