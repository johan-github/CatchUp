import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from "constants"


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