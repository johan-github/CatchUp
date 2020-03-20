

export default {
    template:`
    <form @submit.prevent="registerNewUserForm" class="registerUser" >
        <div>
            <label>Enter user name</label>
            <input placeholder="Username" v-model="addUserName">

            <label>Enter password</label>
            <input placeholder="Password" v-model="addPassword">
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

  methods: {
    registerNewUserForm() {
        console.log("TEST " + this.addUserName, this.addPassword)

        let newUser = {
        addUserName: this.addUserName,
        addPassword: this.addPassword
        }
        console.log("TEST 2 " + newUser)
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