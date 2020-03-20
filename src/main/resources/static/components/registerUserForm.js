
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
        defaultNickname: '',
        addPassword: '',
        defaultAvatar: '',
        defaultOnline: 'no'
    }
  },

  // Created by the Vue Ninjas Helena and Matthias
  methods: {
    async registerNewUserForm() {
        console.log("TEST " + this.addUserName, this.addPassword)
        if(!this.addUserName.trim() && !this.addPassword.trim()){
            return
        } 

     
        let newUser = {
        username: this.addUserName,
        nickname: this.defaultNickname,
        password: this.addPassword,
        avatar:  this.defaultAvatar,
        online: this.defaultOnline
        }

        console.log(newUser)

        let result = await fetch('/rest/accounts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
          })
          result = await result.json()

        this.addUserName=''
        this.addPassword=''

        //this.$router.push('/loginUser')
    }
  }
}






