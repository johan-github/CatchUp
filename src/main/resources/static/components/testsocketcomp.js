/*********************************+/ 
* Orginal by Matthias. 2020-04-02
* Edited by Hassan 2020-04-04
* Notes: A simple textbox and submit button for the channel. 
/**********************************/
// TESTING PURPOSE ONLY! -Matthias
// NOT ANYMORE I GUESS? -Hassan

import { sendSocketEvent } from '../socket.js'
export default{
  
    template:`
    <section id="container">
        
        <p id="label">Messages</p>

        <div id="scrollContainer">

            <div id="messageBoxContainer"  v-for="message of channelMessages" :key="message.id">

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
                
            

                <!--<ul>
                    <li v-for="message of messages" 
                        :key="message.id"
                        class="message-card">
                        channelid: {{ message.channelid }} 
                        id: {{ message.id }} 
                        date: {{ message.time }}
                        accountid: {{ message.accountid }} <br />
                        text: {{ message.text }}
                    </li>
                </ul>-->

                <!-- <div v-model="hittas()"></div> 

                <form id="messageForm" @submit.prevent="send" name="messageForm" nameForm="messageForm">
                    <div class="input-group clearfix">
                        
                    </div>
                </form>-->

            

            

        </div>
        
        <!--<form @submit.prevent="send()">
            <input type="text" v-model="text" placeholder="Type a message..."/>
            <button type="submit" class="primary">Send</button>
            
        </form>-->
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
        /*await fetch('/rest/channel/messages/' + '1')
        .then(messages => messages.json())
        .then(messages => this.$store.commit('setMessages', messages))*/

        
        this.getMessages();
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
            await fetch('/rest/messages/' + messageId, {
                method : 'DELETE'
            })

            // Fetch messages from specific channel (Matthias, det skulle uppskattas om denna fetch fanns i en metod att kalla på, men vill inte ta bort från din kod :) )
          /*await fetch('/rest/channel/messages/' + '1')
          .then(messages => messages.json())
          .then(messages => this.$store.commit('setMessages', messages))*/

          this.getMessages();

        },

        async send( channelId ) {

            let message = {
                action: "message",
                channelid: this.channelid,
                time: this.time,
                accountid: this.currentAccount.id,
                text: this.text
            }

            if( !this.text.trim() ){
                return;
            }
            

            console.log(this.currentAccount.id)
            console.log("testsocetcomp rad 65: " + message.text);
            //console.log("TEST1: From component: " + message.text);

            //add the new message
            await fetch('/rest/messages',{
                method : 'POST',
                headers : { 'Content-Type' : 'application/json'},
                body : JSON.stringify( message )
            })

             // Post object to database
            /*let result = await fetch('/rest/messages', { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( message )
          })
          result = await result.json()
          sendSocketEvent(result)
          //this.$store.commit("appendMessage", result)


          // Fetch messages from specific channel
        /*  await fetch('/rest/channel/messages/' + '1')
          .then(messages => messages.json())
          .then(messages => this.$store.commit('setMessages', messages))   */

          this.getMessages();
          

        //let text = this.text
        //this.sentTexts.push(text)


       /* for(message of this.messages){
            this.sentTexts.push(message.text)
            console.log("CAN WE READ THIS: " + message.text)
        }*/
        
        this.text='';
        },


        async getMessages(){
            await fetch('/rest/channel/messages/' + '1')
            .then(messages => messages.json())
            .then(messages => this.channelMessages = messages)

            this.keepScrollAtBottom();
        }
    },

    computed: {
        //Behövs ej :)
        /*messages(){
            return this.$store.state.messages
        },*/

        currentAccount() {
            return this.$store.state.currentAccount
        },
    }
}

    /*postMessages(){
            for(text of this.messages){
                this.sentTexts.push(text)
                console.log("TEST TEXT: " + text)
            }
        }*/
        

        /*<ul>
        <li v-for="(textOut, i ) of sentTexts">{{ textOut }} </li>
   </ul>*/

           
        
    

    

    
  

