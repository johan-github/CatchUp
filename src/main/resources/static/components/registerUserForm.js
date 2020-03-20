
export default {
    template:`
    <div class="registerUser">
    <h2>Register new user</h2>
    
    <form @submit.prevent="registerNewUserForm">
        <div>

            <label>Add username</label>
            <input placeholder="username" v-model="addUserName" >

            <label>Add nickname</label>
            <input placeholder="nickname?" v-model="addNickname" >

            <label>Add password</label>
            <input type="password" placeholder="add password" v-model="addPassword">
        </div>
        <button>Register</button>
    </form>
    </div>
    `,

data() {

    return {
        addUserName: '',
        addNickname: '',
        addPassword: '',
        defaultAvatar: '',
        defaultOnline: 'no'
    }
  },

  // Created by the Vue Ninjas Helena and Matthias
  methods: {
    async registerNewUserForm() {
        console.log("TEST " + this.addUserName, this.addPassword)
        if(!this.addUserName.trim() && !this.addPassword.trim() && this.addNickname.trim()){
            return
        } 

     
        let newUser = {
        username: this.addUserName,
        nickname: this.addNickname,
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






