
// TESTING PURPOSE ONLY!

export default{
  
    template:`

       <div id="chat-room">

			<h2>Start chatting</h2>
			
			<div class="connecting">Connecting...</div>
            
		

            <ul>
                <li v-for="message of messages" 
                    :key="message.id"
                    class="message-card">
                    channelid: {{ message.channelid }} 
                    id: {{ message.id }} 
                    date: {{ message.time }}
                    accountid: {{ message.accountid }} <br />
                    text: {{ message.text }}
                </li>
            </ul>

            <!-- <div v-model="hittas()"></div> -->

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

            channelid:'1',
            time: '',
            accountid: '',
            text: '',
        }
    },
    async created(){
        await fetch('/rest/channel/messages/' + '1')
        .then(messages => messages.json())
        .then(messages => this.$store.commit('setMessages', messages))
    },
    methods: {

        async send() {

            let message = {
                channelid: this.channelid,
                time: this.time,
                accountid: this.currentAccount,
                text: this.text
            }
            console.log(this.currentAccount)
            console.log("TEST1: From component: " + message.text);

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


          // Fetch messages from specific channel
          await fetch('/rest/channel/messages/' + '1')
          .then(messages => messages.json())
          .then(messages => this.$store.commit('setMessages', messages))

        //let text = this.text
        //this.sentTexts.push(text)


       /* for(message of this.messages){
            this.sentTexts.push(message.text)
            console.log("CAN WE READ THIS: " + message.text)
        }*/
        
        this.text=''
        }
    },

    computed: {
        messages(){
            return this.$store.state.messages
        },

        currentAccount() {
            return this.$store.state.currentAccount
        }
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

           
        
    

    

    
  

