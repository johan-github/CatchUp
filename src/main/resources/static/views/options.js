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
                    <input id="optionsBoxTextField" type="text" placeholder="Change your nickname">            
                    <button id="optionsBoxAddButton">Submit</button>    
                    </form>
                
                
                <form @submit.prevent="changeAvatarButton" id="optionsBox">
                    <input id="optionsBoxTextField" type="text" placeholder="Enter avatar URL">            
                    <button id="optionsBoxAddButton">Submit</button> 
                </form>

               
                </div> <!-- div-end tag id="container" -->
                </main>
            </div> <!-- end-tag homeContainer -->
        </div>
    `,

    methods: {

        changeNickButton() {
            console.log("funkar det?")
            setNewNickname    
        },

        changeAvatarButton() {
            console.log("change avatar")
        }
    },

    computed:{

        getCurrentAccount(){
            return this.$store.state.currentAccount
        }
        
        },
   
    async setNewNickname(){
        console.log("your new nickname is: " + this.getCurrentAccount.usernick)
        let newUserNick = await fetch('/rest/accounts/' + this.getCurrentAccount.usernick)
        newUserNick = await newUserNick.json()

        //console.log(friendList.id)
        this.$store.commit('setCurrentAccount', newUserNick)
     }

}