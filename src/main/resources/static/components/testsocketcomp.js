
// TESTING PURPOSE ONLY!

export default{
  
    template:`

       <div id="chat-room">
			<h2>Start chatting</h2>
			
			<div class="connecting">Connecting...</div>

            <ul>
                <li v-for="(text, i ) of sentTexts">{{ text }} </li>
           </ul>


			<form id="messageForm" @submit.prevent="send" name="messageForm" nameForm="messageForm">
				
					<div class="input-group clearfix">
						<input type="text" v-model="text"  placeholder="Type a message..."/>
						<button type="submit" class="primary">Send</button>
					</div>
			</form>

            

		
    </div>
    
    `,

    data() {
        return {

            channelid:'3',
            time: '',
            accountid: '9',
            text: '',
            sentTexts: [],
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
          .then (result => result.json())
          .then(result => this.$store.commit("appendMessage", result))


          await fetch('/rest/messages')
          .then(messages => messages.json())
          .then(messages => this.$store.commit('setMessages', messages))

        //let text = this.text
        //this.sentTexts.push(text)
        
        this.text=''
        },

        postMessages(){
            for(text of this.messages){
                this.sentTexts.push(text)
                console.log("TEST TEXT: " + text)
            }
        },
 
   
        computed: {
            messages(){
                return this.$store.state.messages
            }
        }

    }
    }
        

           
        
    

    

    
  

