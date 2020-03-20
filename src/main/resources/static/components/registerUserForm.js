
export default {
    template:`
    <div class="registerUser">
    
    
    <form @submit.prevent="registerNewUserForm">

        <h2>Register new user</h2>
            <div class="inputForm">
                <i class="fa fa-user"></i>
                <label>Add username</label>
                <input class="input-field" type="text"  placeholder="username" v-model="addUserName" >
            </div>

            <div class="inputForm">
                <i class="fa fa-user"></i>
                <label>Add nickname</label>
                <input class="input-field" type="text"  placeholder="nickname" v-model="addNickname" >
            </div>

            <div class="inputForm">
                <i class="fa fa-key"></i>
                <label>Add password</label>
                <input class="input-field" type="password" placeholder="password" v-model="addPassword">
            </div>
        <button class="registerButton">Register</button>

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






