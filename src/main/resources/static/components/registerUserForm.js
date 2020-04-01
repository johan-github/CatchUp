
export default {
    template: /* html */ `
    <section class="registerUser">
    <form @submit.prevent="registerNewUserForm" class="registerForm">

        <label class="label">Register new user</label>
            
        <div class="registerUserFormFields">
            <div class="inputForm">
                <input class="input-field" type="email" placeholder="Enter your email" v-model="addEmail" required >
            </div>

            <div class="inputForm">
                <input class="input-field" type="text" placeholder="Enter your nickname" v-model="addNickname" required >
            </div>

            <div class="inputForm">
                <input class="input-field" type="password" placeholder="Enter your password" v-model="addPassword" required>
            </div>

            <div class="inputForm">
                <input class="input-field" type="password" placeholder="Confirm your password" v-model="confirmPassword" required>
                <h4 id="passwordalert" >{{ passwordAlert  }}</h4>
            </div>
            </div>

            <button class="registerButton">Register</button>
            
        </form>
    </section>
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