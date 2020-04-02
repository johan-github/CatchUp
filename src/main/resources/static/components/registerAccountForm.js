/********************************* /
* Orginal by Helena & Alberts. 2020-03-19
* Last Edited by Johan 2020-04-02
* Notes: Is for when registering a account. ./view/registerAccount.js
/**********************************/
export default {
    template: /* html */ `
    <section id="container">
    
        <label id="label">Register new account</label>

        <form @submit.prevent="registerNewAccountForm" class="registerFormp">
        
                    <input class="input-field" type="email" placeholder="Enter your email" v-model="addEmail" required >
                    
                    <input class="input-field" type="text" placeholder="Enter your nickname" v-model="addNickname" required >
                    
                    <input class="input-field" type="password" placeholder="Enter your password" v-model="addPassword" required >

                <div class="inputForm">
                    <input class="input-field" type="password" placeholder="Confirm your password" v-model="confirmPassword" required>
                    <h4 id="passwordalert" >{{ passwordAlert  }}</h4>
                </div>
                </div>

                <button class="registerButton">Register</button>

                <p class="ReturnToLoginPageText"> Go back to login-page
                <a class="ReturnToLoginPageLink" href="/loginAccount">here! </a>
                </p>
                
            </form>
        </section>
    </section>
    `,

    /* ORIGINAL
    <section id="container">
    <section class="registerAccount">
    <form @submit.prevent="registerNewAccountForm" class="registerForm">

        <label class="label">Register new account</label>
            
        <div class="registerAccountFormFields">
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

            <p class="ReturnToLoginPageText"> Go back to login-page
            <a class="ReturnToLoginPageLink" href="/loginAccount">here! </a>
            </p>
            
        </form>
    </section>
    </section>*/

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

   //Adds a new account to backend
    async registerNewAccountForm() {
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

        // Save variables to be added to database as an object newAccount
        let newAccount = {
        email: this.addEmail,
        accountnick: this.addNickname,
        password: this.addPassword,
        avatar:  this.defaultAvatar,
        status: this.defaultStatus
        }
        console.log(newAccount)

 
        // Post object to database
        let result = await fetch('/rest/accounts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAccount)
          })
          result = await result.json()

        // Empty input boxes 
        this.addEmail=''
        this.addNickname=''
        this.addPassword=''
        this.confirmPassword=''

        // Re-direct to login page
        this.$router.push('/loginAccount')
      
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