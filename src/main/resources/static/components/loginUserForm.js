
export default {
    template:`
    <div class="loginuser">
    <form @submit.prevent="loginCurrentUserForm" class="loginuserform">
    <h2>Please login to continue</h2>
        <div class="logindiv">
        <i class="fa fa-user"></i>
        <label >Enter your username</label>
        <input class="logininput" placeholder="Username" v-model="enterUserEmail">
        </div>
        <div class="logindiv">
        <i class="fa fa-key"></i>
        <label>Enter your password</label>
        <input  class="logininput" placeholder="Password" v-model="enterPassword" type="password">
        </div>
        <button class="loginbutton">Login</button>
    </form>
    </div>

    
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