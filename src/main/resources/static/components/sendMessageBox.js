/*********************************+/ 
* Orginal by Matthias. 2020-03-31
* Edited by ......
* Notes: 
/**********************************/
import navbar from '../components/navbar.js'


export default{
    components:{
        navbar

    },

    template:`
    <form @submit.prevent="enterNewMessage" id="container">
        <div id="messageBox">
            <div>
                <input id="messageBoxMessageField" placeholder="Enter Message" v-model="message" type="text">
            </div>
        </div>             
        <button id="messageBoxFormButtonLogin">Submit</button>
    </form> 
    `,

    data() {
        return {
            accountId: '',
            channelId: '',
            message: ''
        }
    },

    methods: {
        async enterNewMessage(){
            if(!this.message.trim()){ return }  // returns if string is empty.
            let newMessage = {
                channelId = currentChannelId(),
                accountId = currentUser().accountId,
                text = this.message
            }    
            console.log(newMessage)

            let messageReturn = await fetch('/rest/message')
            .then( result => result.json())


            this.message = ''
        }
    },
    computed:{

        currentUser(){
            return this.$store.state.currentUser
        },
        currentChannelId(){
            return this.$store.state.currentChannelId
        }


    }




}