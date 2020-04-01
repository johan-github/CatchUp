/********************************* /
* Orginal by Helena & Alberts. 2020-03-19
* Last Edited by ......
* Notes: Is for when registering a user. ./view/registerUser.js
/**********************************/
export default {
    template:`
    <div class="registerUser">
    <form class="form" @submit.prevent="registerNewUserForm">

        <h2>Register new user</h2>
                
            <div class="inputForm">
            <i class="fa fa-envelope"></i>
                <label class="textlabel">Enter your e-mail</label>
                <input class="input-field" type="email" placeholder="e-mail" v-model="addEmail" required >
            </div>

            <div class="inputForm">
                <i class="fa fa-user"></i>
                <label class="textlabel">Enter your nickname</label>
                <input class="input-field" placeholder="nickname" v-model="addNickname" required >
            </div>

            <div class="inputForm">
                <i class="fa fa-key"></i>
                <label class="textlabel">Enter your password</label>
                <input class="input-field" type="password" placeholder="password" v-model="addPassword" required>
            </div>

            <div class="inputForm">
                <i class="fa fa-key"></i>
                <label class="textlabel">Confirm your password</label>
                <input class="input-field" type="password" placeholder="confirm password" v-model="confirmPassword" required>
                <h4 id="passwordalert" >{{ passwordAlert  }}</h4>

            </div>
        <button class="registerButton">Register</button>
    </form>
    </div>
    `,

data() {
    return {
        addEmail: '',
        addNickname: '',
        addPassword: '',
        defaultAvatar: 'http://158.174.120.227/CatchUp/avatar01.png',
        defaultStatus: 'offline',
        confirmPassword: '',
        passwordAlert: ''
    }
  },

  
  methods: {

   //Adds a new user to backend
    async registerNewUserForm() {
        console.log("In register form now ")

         if( !this.addEmail.trim() && !this.addPassword.trim() && !this.addNickname.trim() ){
             return
         } 

         // If password does not match
        if(!this.addPassword === !this.confirmPassword){
            console.log("ERROR")
            this.passwordAlert = ''
            this.passwordAlert = "Password does not match! "
            console.log(this.addPassword)
            console.log(this.confirmPassword)
        }

        if(this.addPassword === this.confirmPassword){
            console.log("PASSWORD OK")

        // Save variables to be added to database as an object newUser
        let newUser = {
        email: this.addEmail,
        usernick: this.addNickname,
        password: this.addPassword,
        avatar:  this.defaultAvatar,
        status: this.defaultStatus
        }
        console.log(newUser)

 
        // Post object to database
        let result = await fetch('/rest/accounts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
          })
          result = await result.json()

        // Empty input boxes 
        this.addEmail=''
        this.addNickname=''
        this.addPassword=''
        this.confirmPassword=''

        // Re-direct to login page
        this.$router.push('/loginUser')
      
  }
}
}

}

// methods: {

//     addNewProject() {

//       console.log(this.title, this.description)


//       let project = {

//         title: this.title, 

//         description: this.description

//       }


//       this.$store.commit('appendProject', project)

//       this.$router.push('/')

//     }

//   }

// }