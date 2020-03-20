
export default {
    template:`
    
    <form @submit.prevent="loginCurrentUserForm" class="loginUser">
        <div>
        <label>Enter username</label>
        <input placeholder="Username" v-model="enterUserName">
        <label>Enter password</label>
        <input placeholder="Password" v-model="enterPassword" type="password">
        </div>
        <button>Login</button>
    </form>
    
    `,

    data() {
        
        return {
            enterUserName: '',
            enterPassword: ''
        }
    },

    methods: {
        loginCurrentUserForm() {
            console.log("TEST " + this.enterUserName, this.enterPassword)

            let currentUser = {
                enterUserName: this.enterUserName,
                enterPassword: this.enterPassword
            }
            console.log("TEST 2 " + currentUser)
        }
    }
}