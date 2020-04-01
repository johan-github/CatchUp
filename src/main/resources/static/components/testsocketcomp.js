
// TESTING PURPOSE ONLY!

export default{
  
    template:`

       <div id="chat-room">
			<h2>Start chatting</h2>
			
			<div class="connecting">Connecting...</div>

			<ul id="messageArea">
			</ul>
			<form id="messageForm" @submit.prevent="send" name="messageForm" nameForm="messageForm">
				
					<div class="input-group clearfix">
						<input type="text" v-model="text"  placeholder="Type a message..."/>
						<button type="submit" class="primary">Send</button>
					</div>
			</form>
            <div v-for="(sentMessage, i ) of sentMessages">

                    <div id="channelCreateSearchChannelInfo">{{ sentMessage }}</div>

                </div>
		
    </div>
    
    `,

    data() {
        return {

            channelid:'3',
            time: '',
            accountid: '9',
            text: '',
            sentMessages: [],
        }
    },

    methods: {

        async send() {
            
            let message = {
                channelid: this.channelid,
                time: this.time,
                accountid: this.accountid,
                text: this.text
            }
            console.log("TEST" + message);
            

              // Post object to database
        await fetch('/rest/messages', { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( message )
          })
          .then (result = result.json())
          .then(result => this.$store.commit("appendMessage", result))


          await fetch('/rest/messages')
          .then(messages => messages.json())
          .then(messages => this.$store.commit('setMessages', messages))
            },

            getMessageSent(){
            for(let message of this.messages) {
                this.sentMessages.push(message.text)     
        }                 
            }


        },
   
        computed: {
            messages(){
                return this.$store.state.messages
            }
        }

    }
        

            /*onMessageReceived() {
                let message = this.message
            
                let messageElement = document.createElement('li');
                    messageElement.classList.add('event-message');
                    message.content = message.sender + ' joined!';
                    messageElement.classList.add('chat-message');
            
                
                let textElement = document.createElement('p');
                let messageText = document.createTextNode(message.content);
                textElement.appendChild(messageText);
            
                messageElement.appendChild(textElement);
            
                messageArea.appendChild(messageElement);
                messageArea.scrollTop = messageArea.scrollHeight;
            }
            
            
            
            
            
        }*/
        
    

    

    
  

