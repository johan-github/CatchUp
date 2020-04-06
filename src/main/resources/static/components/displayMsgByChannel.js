/*********************************+/ 
* Orginal by Hassan. 2020-03-30
* Edited by Helena, Johan, Tobbe 2020-04-06
* Notes: Here will a channels messages be displayed
/**********************************/


export default{
  
    template: /* html */ `
    <section id="container">
      
    <div>
        <p id="label">{{ currentChannel.name }} </p>
        <button @click= "leaveChannel()">Leave</button>
        </div>
            
        
            <div id="scrollContainer">

                <div id="messageBoxContainer"  v-for="(message, i) of channelMessages" :key="message.id">

                    <div id="messageBoxAvatarStatus">
                        <img id="messageBoxAvatar" :src="displayAvatar( message )">
                        <div id="messageBoxStatus">{{ currentAccountStatusIcon( message.status ) }}</div>
                    </div>

                    <div id="messageBoxNickDelete">
                    <div id="messageBoxNick">{{ message.usernick }}</div>
                    <div id="messageBoxMessageDelete" @click="removeMessage( message, i )">{{ removeMessageIcon( message ) }}</div>
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
            loggedInAccountChannels : [],

            time: '',
            text: '',
        }
    },

    //constructor
    async created(){
        this.getMessages();
        this.getAccount();
        this.getAccountChannel();
    },
    
    
    methods: {

        //Displays an avatar for every member and only allows a specific file-types, or else a default avatar will be chosen
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


        async leaveChannel() {
            for(let accountChannel of this.accountChannels){
                if(accountChannel.id === this.currentChannel.id){
                    await fetch('/rest/accountchannels/' + this.accountChannelid,{
                    method: 'DELETE'
                    }); 
                    returnToChannels()
                } 
            }
        },

        //Makes the search field, that holds searchString, empty
        resetSearchField(){
            this.text = '';
        },

        //Routes to "home" page
        returnToChannels(){
            this.$router.push( '/home' );
        },
        
        //Makes the scroll-bar always at the bottom
        keepScrollAtBottom(){
            let scrollContainer = document.getElementById("scrollContainer");
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        },        

        //Displays online status of every member/friend of the channel
        currentAccountStatusIcon( status ){
            if( status === 'online'){
                return '🟢';
            }
            return '🔴';
        },
        
        //Displays a trash bin if youre logged in as an admin. Else the trach bin will not be visible
        removeMessageIcon( message ){
            for( let loggedInAccountChannel of this.loggedInAccountChannels ){
                if( loggedInAccountChannel.channelid === this.currentChannel.id && loggedInAccountChannel.admin === 'yes' ){
                    return '🗑️';
                }
            }

            if( message.accountid === this.currentAccount.id ){
                return '🗑️'
            }
            return '';
        },

        //Delete a message (click on trashbin)
        async removeMessage( message ){
            await fetch('/rest/messages/' + message.id, {
                method : 'DELETE'
            });

            this.getMessages();
        },


        //The message/text from input field will be merged in a message object and sent to the DB
        async send() {
        
            if( !this.text.trim() ){
                    return;
            }
            
            let messageToSendToDB = {
                channelid: this.currentChannel.id,
                time: this.time,
                accountid: this.currentAccount.id,
                text: this.text
            }

            await fetch('/rest/messages',{
                    method : 'POST',
                    headers : { 'Content-Type' : 'application/json'},
                    body : JSON.stringify( messageToSendToDB )
            });
            
            this.getMessages( true );
            this.resetSearchField();
        },
        
        //Fetches messages by id from DB
        async getMessages( scrollDownYesOrNo ){
            let scrollDown = scrollDownYesOrNo;

            await fetch('/rest/channel/messages/' + this.currentChannel.id )
                .then(messages => messages.json())
                .then(messages => this.channelMessages = messages);

            if( scrollDown === true ){
                this.keepScrollAtBottom();
            }
            
        },

        //Fetched accounts from DB
        async getAccount(){
            await fetch('/rest/accounts')
                .then( accounts => accounts.json() )
                .then( accounts => this.accounts = accounts );
        },

        //Fetched accountChannel for current logged in account from DB
        async getAccountChannel(){
            await fetch('/rest/accountchannels/accountid/' + this.currentAccount.id )
                .then( loggedInAccountChannels => loggedInAccountChannels.json() )
                .then( loggedInAccountChannels => this.loggedInAccountChannels = loggedInAccountChannels );
        },

    },



    computed: {
        //Get logged in account information from $store
        currentAccount() {
            return this.$store.state.currentAccount;
        },

        //Get selected channel information from $store
        currentChannel(){
            return this.$store.state.currentChannel;
        },

        accountChannels(){
            return this.$store.state.accountChannels;
        }
    }
}

           
        
    

    

    
  

