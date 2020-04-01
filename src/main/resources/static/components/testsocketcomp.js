
// TESTING PURPOSE ONLY!

export default{
  
    template:`

       <div id="chat-room">
			<h2>Start chatting</h2>
			
			<div class="connecting">Connecting...</div>
			<ul id="messageArea">
			</ul>
			<form id="messageForm" @submit.prevent="send" name="messageForm" nameForm="messageForm">
				<div class="form-group">
					<div class="input-group clearfix">
						<input type="text" v-model="text"  placeholder="Type a message..."/>
						<button type="submit" class="primary">Send</button>
					</div>
				</div>
			</form>
		
    </div>
    
    `,

    data() {
        return {

            channelid:'3',
            time: '',
            accountid: '9',
            text: ''
        }
    },

    methods: {

        // Connect and add username
        /*connect() {
            addUsername = this.addUsername
            console.log(addUsername)
    
        },*/

        // Send message
        async send() {
            
            let message = {
                channelid: this.channelid,
                time: this.time,
                accountid: this.accountid,
                text: this.text
            }
            console.log("TEST" + message);
            

              // Post object to database
        let result = await fetch('/rest/messages', { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( message )
          })
          result = await result.json()
          //this.$store.commit("appendMessage", result)
            }

        },
        

            /*onMessageReceived() {
                let message = this.message
            
                let messageElement = document.createElement('li');
                    messageElement.classList.add('event-message');
                    message.content = message.sender + ' joined!';
                    messageElement.classList.add('chat-message');
            
              
            
                let usernameElement = document.createElement('span');
                 let usernameText = document.createTextNode(message.sender);
                    usernameElement.appendChild(usernameText);
                    messageElement.appendChild(usernameElement);
                
            
                let textElement = document.createElement('p');
                let messageText = document.createTextNode(message.content);
                textElement.appendChild(messageText);
            
                messageElement.appendChild(textElement);
            
                messageArea.appendChild(messageElement);
                messageArea.scrollTop = messageArea.scrollHeight;
            }
            
            
            	<h1 class="title">Type your username</h1>

			<form id="usernameForm" @submit.prevent="connect" name="usernameForm">

				<div>
                    <label class="textlabel">Enter your username</label>
                    <input class="input-field" placeholder="username" v-model="addUsername" >
				</div>

				<div>
					<button  class="user-button">Start Chatting!</button>
				</div>
			</form>*/
            
            
        }
        
    



    
  

