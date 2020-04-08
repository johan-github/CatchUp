/*********************************+/ 
* Orginal by Helena. 2020-04-02
* Edited by Matthias 2020-04-04
* Notes: A simple textbox and submit button for the channel. 
/**********************************/
// TESTING PURPOSE ONLY! -Matthias
// NOT ANYMORE I GUESS? -Hassan

import { sendSocketEvent  } from '../socket.js';

export default{
  
    template:`
    <section id="container">
        
        <p id="label">Messages</p>

        <div id="scrollContainer">

            <div id="messageBoxContainer"  v-for="message of messages" :key="message.id">

                <div id="messageBoxAvatarStatus">
                    <img id="messageBoxAvatar" :src="displayAvatar( message.avatar )">
                    <div id="messageBoxStatus">{{ currentAccountStatusIcon( message.status ) }}</div>
                </div>

                <div id="messageBoxNickDelete">
                    <div id="messageBoxNick">{{ message.usernick }}</div>
                    <div id="messageBoxMessageDelete" @click="removeMessage( message.id )">{{ removeMessageIcon() }}</div>
                </div>
                <!--<div id="messageBoxAdd">➕</div>-->
                <div id="messageBoxMessageTime">{{ message.time }}</div>
                <div id="messageBoxMessage">{{ message.text }}</div>

            </div>
                

        </div>

        <div>
            <input type="text" @keyup.enter="send()" v-model="text" placeholder="Type a message..."/>
            <button @click="send()">Send</button>
        </div>
    </section>
    
    `,

    data() {
        return {
            channelMessages : [],

            channelid:'1',
            time: '',
            accountid: '',
            text: '',
        }
    },

    created(){
        
        this.getMessages();
        this.setCurrentChannel();
    },
    
    
    methods: {
        
        keepScrollAtBottom(){
            let scrollContainer = document.getElementById("scrollContainer");
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        },

        displayAvatar( accountAvatar ){
            let allowedImageFileTypes = [ '.png', '.jpeg', '.jpg', '.gif' ];
            for( let type of allowedImageFileTypes ){
                if( accountAvatar.toLowerCase().includes( type ) ){
                    return accountAvatar;
                }                
            }
            return 'http://158.174.120.227/CatchUp/avatar01.png';
        },

        currentAccountStatusIcon( status ){
            if( status === 'online'){
                return '🟢';
            }
            return '🔴';
        },
        
        removeMessageIcon(){
            if( this.currentAccount != null ){
                return '🗑️';
            }
            return '';
        },

        //Delete a message (click on trashbin)
        async removeMessage( messageId ){
            await fetch('/rest/message/' + messageId, {
                method : 'DELETE'
            })
            console.log("testing " + message);
            

          this.getMessages();

        },

        async send( channelId ) {

            let message = {
                id: '',
                action: "message",
                channelid: this.channelid,
                time: this.time,
                accountid: this.currentAccount.id,
                text: this.text
            }

            if( !this.text.trim() ){
                return;
            }
            let newResult = await fetch('/rest/message',{
                method : 'POST',
                headers : { 'Content-Type' : 'application/json'},
                body : JSON.stringify( message )
            })
            .then(x => x.json())
            newResult.action = "newMsg"
            
            sendSocketEvent(newResult)

          //this.getMessages();

          this.keepScrollAtBottom();
        this.text='';
        },


        async getMessages(){
            await fetch('/rest/channel/messages/' + this.channelid)
            .then(messages => messages.json())
            .then(messages => this.$store.commit('setMessages', messages))

            //this.keepScrollAtBottom()
        },

        async setCurrentChannel(){
            this.$store.commit('setCurrentChannelId', this.channelid)
            console.log("setChannelid: " + this.$store.state.currentChannelId );
            
        }
    },

    computed: {
        messages(){
            return this.$store.state.messages
        },

        currentAccount() {
            return this.$store.state.currentAccount
        },
    }
}

        
    

    

    
  

