/*********************************+/ 
* Orginal by Matthias. 2020-04-02
* Edited by Hassan 2020-04-05
* Notes: Here will a channels messages be displayed
/**********************************/


export default{
  
    template:`
    <section id="container">
        
        <p id="label">{{ currentChannel.name }}</p>

        <div id="scrollContainer">

            <div id="messageBoxContainer"  v-for="(message, i) of channelMessages" :key="message.id">

                <div id="messageBoxAvatarStatus">
                    <img id="messageBoxAvatar" :src="displayAvatar( message )">
                    <div id="messageBoxStatus">{{ currentAccountStatusIcon( message.status ) }}</div>
                </div>

                <div id="messageBoxNickDelete">
                    <div id="messageBoxNick">{{ message.usernick }}</div>
                    <div id="messageBoxMessageDelete" @click="removeMessage( message, i )">{{ removeMessageIcon() }}</div>
                </div>
                
                <div id="messageBoxMessageTime">{{ message.time }}</div>
                <div id="messageBoxMessage">{{ message.text }}</div>

            </div>

        </div>

        <div @submit.prevent="send()">
            <input v-model="text" @keyup.enter="send()" type="text" placeholder="Type a message..."/>
            <button @click="send()">S E N D</button>
            <button id="messageBoxButtonBack" @click="returnToChannels()">B A C K</button>
        </div>

    </section>
    
    `,

    data() {
        return {
            channelMessages : [],
            accounts : [],

            channelid:'1',
            time: '',
            accountid: '',
            text: '',
        }
    },

    async created(){

        //Fetched accounts from DB
        await fetch('/rest/accounts')
            .then( accounts => accounts.json() )
            .then( accounts => this.accounts = accounts );

         
        //this.getMessages();
        this.getCurrentChannelMessages();
        this.keepScrollAtBottom();
    },
    
    
    methods: {

        getCurrentChannelMessages(){
            this.channelMessages = this.currentChannelMessages;
        },

        displayAvatar( message ){
            let allowedImageFileTypes = [ '.png', '.jpeg', '.jpg', '.gif' ];
            let accountWithAvatar;

            for( let account of this.accounts ){
                if( account.usernick === message.usernick ){
                    accountWithAvatar = account.avatar;
                }
            }
            if( accountWithAvatar != null ){
                for( let type of allowedImageFileTypes ){
                    if( accountWithAvatar.toLowerCase().includes( type ) ){
                        return accountWithAvatar;
                    }
                }
            }
            return 'http://158.174.120.227/CatchUp/avatar01.png';
        },

        //Makes the search field, that holds searchString, empty
        resetSearchField(){
            this.text = '';
        },

        displayCurrentChannelMessages(){
            let messages = this.currentChannelMessages;
            return messages;
        },

        returnToChannels(){
            this.$router.push( '/home' );
        },
        
        keepScrollAtBottom(){
            let scrollContainer = document.getElementById("scrollContainer");
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
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
        async removeMessage( message, index ){
            console.log( message );
            console.log( index );
            let answer = await fetch('/rest/messages/' + message.id, {
                method : 'DELETE'
            });

            console.log( "answer " + answer );
            
            this.$store.commit( 'removeCurrentChannelMessage', index );
        },



        async send( channelId ) {
        
            if( !this.text.trim() ){
                    return;
            }
            
            let messageToSendToDB = {
                channelid: this.currentChannel.id,
                time: this.time,
                accountid: this.currentAccount.id,
                text: this.text
            }

            let messageToSendToStore = {
                /*id : this.currentChannelMessages.slice(-1)[0].id + 1,*/
                channelid : this.currentChannel.id,
                avatar : this.currentAccount.avatar,
                status : 'online',
                usernick : this.currentAccount.usernick,
                time : this.time,
                text : this.text,
            }

            await fetch('/rest/messages',{
                    method : 'POST',
                    headers : { 'Content-Type' : 'application/json'},
                    body : JSON.stringify( messageToSendToDB )
            });
            
            this.$store.commit( 'appendCurrentChannelMessage', messageToSendToStore );
            
            this.resetSearchField();
            this.getCurrentChannelMessages();
            //this.keepScrollAtBottom();
        },        
    },



    computed: {
        currentAccount() {
            return this.$store.state.currentAccount;
        },

        currentChannelMessages(){
            return this.$store.state.currentChannelMessages;
        },

        currentChannel(){
            return this.$store.state.currentChannel;
        }
    }
}

           
        
    

    

    
  

