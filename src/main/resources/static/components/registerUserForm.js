

export default {
    template:`
    <form @submit.prevent="registerNewUserForm" class="registerUser" >
        <div>
            <label>Enter user name</label>
            <input placeholder="Username" v-model="addUserName" >

            <label>Enter password</label>
            <input type="password" placeholder="Password" v-model="addPassword">
        </div>
        <button>Register</button>
    </form>
    `,

data() {

    return {
        addUserName: '',
        addPassword: ''
    }
  },

  // Created by the Vue Ninjas Helena and Matthias
  methods: {
    registerNewUserForm() {
        console.log("TEST " + this.addUserName, this.addPassword)

        



        

        let newUser = {
        addUserName: this.addUserName,
        addPassword: this.addPassword
        }
        console.log("TEST 2 " + newUser)
        
        this.addUserName=''
        this.addPassword=''
    }
      
  }
  

 

}