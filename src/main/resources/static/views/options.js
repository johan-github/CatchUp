/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by Tobbe och Johan 2020-04-08
* Notes: 
/**********************************/
import navBar from '../components/navbar.js'

export default{
    components:{
        navBar
    },

    //************************************************************** */

    template:`
        <div>
            <div id="homeContainer">
                <div id="appButton">
                    <h3>| | |</h3>
                </div>
                <div id="appNav">
                    <navBar/>
                </div>
                <main id="appMain">
                <div id="optionsContainer">
                    <h3>O P T I O N S</h3>
                    <form @submit.prevent="changeNickButton" id="optionsBox">
                    <input v-model="newNickname" id="optionsBoxTextField" type="text" placeholder="Change your nickname">            
                    <button id="optionsBoxAddButton">Submit</button>
                    </form>
                    <p>Your new nickname is: {{yourNewNickname}}</p>
                
                
                <form @submit.prevent="changeAvatarButton" id="optionsBox">
                    <input id="optionsBoxTextField" type="text" placeholder="Enter avatar URL">            
                    <button id="optionsBoxAddButton">Submit</button> 
                </form>

               
                </div> <!-- div-end tag id="container" -->
                </main>
            </div> <!-- end-tag homeContainer -->
        </div>
    `,

    data(){
        return {
            newNickname: '',
            yourNewNickname: '',
        }
    },

    methods: {

        async changeNickButton(){

            let changeNicknameOfAccount = {
                            
                id: this.currentAccount.id,
                email: this.currentAccount.email,
                usernick: this.newNickname,
                password: this.currentAccount.password,
                avatar: this.currentAccount.avatar,
                status: this.currentAccount.status
            
        }
        console.log(" 4: " + this.newNickname);
        await fetch('/rest/accounts',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(changeNicknameOfAccount)

        })

        this.$store.commit('setCurrentAccount', changeNicknameOfAccount)
        
        this.yourNewNickname = this.newNickname

        },
    },

    computed:{
        currentAccount() {
            return this.$store.state.currentAccount
        }
    }
}
