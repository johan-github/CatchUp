/********************************* /
* Orginal by Helena & Alberts. 2020-03-19
* Last Edited by Alberts 2020-04-07
* Notes: Is for when registering a account. ./view/registerAccount.js
/**********************************/
export default {
    template: /* html */ `
    <section>
    
        <form @submit.prevent="registerNewAccountForm" id="container">

            <label id="label">Register new account</label>

                <div id="registerAccountFormFields">

                    <div>
                        <input class="registerAccountFormAccountemailField" type="email" placeholder="Enter your email" v-model="addEmail" required >
                    </div>

                    <div>
                        <input class="registerAccountFormAccountnameField" type="text" placeholder="Enter your nickname" v-model="addNickname" required >
                    </div>

                    <div>
                        <input class="registerAccountFormAccountpasswordField" type="password" placeholder="Enter your password" v-model="addPassword" required >
                    </div>

                    <div>
                        <input class="registerAccountFormAccountpasswordField" type="password" placeholder="Confirm your password" v-model="confirmPassword" required>
                        <h4 id="passwordalert" >{{ passwordAlert  }}</h4>
                    </div>

                </div>    

                <button class="registerButton">Register</button>
                
                <button @click="backButton"> Back </button>
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

    backButton(){
        this.$router.push('/loginAccount')
    },
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
        usernick: this.addNickname,
        password: this.addPassword,
        avatar:  this.defaultAvatar,
        status: this.defaultStatus
        }
        console.log(newAccount)

        // Check if e-mail already exists in database
        /*let emailAlreadyExists = await fetch('/rest/accounts/email/' + this.addEmail)
        emailAlreadyExists = await emailAlreadyExists.json()
        console.log("TEST EMAIL EXISTS? " + emailAlreadyExists)
        if(this.addEmail == emailAlreadyExists){
            console.log("TEST 1: EMAIL ALREADY EXISTS!")
        }*/

        

        // Post object to database
        let result = await fetch('/rest/accounts', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAccount)
        })
        result = await result.json()
        console.log("TEST 2: " + result)

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