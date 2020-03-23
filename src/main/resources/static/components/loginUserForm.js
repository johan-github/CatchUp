
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

            currentUser = await fetch('/rest/accounts/email/' + this.enterUserEmail)
             
            currentUser = await currentUser.json()

            if (currentUser.password == this.enterPassword){
                console.log(currentUser)

                this.$store.commit('setMyAccount', currentUser)
                
            }

            console.log(currentUser.password);
            
        }
    }
}