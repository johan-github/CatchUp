/********************************* /
* Orginal by Hassan. 2020-03-24
* Last Edited by Hassan. 2020-04-08
* Notes: This component lists available friends for logged in account
/**********************************/

export default{
    template:`
        <section id="friendListForCreateChannelContainer">

            <div>
                <input id="friendListForCreateChannelSearch" type="text" placeholder="Search available friend..."
                    @keyup="searchFriend()" @keyup.enter="resetSearchField()" v-model="searchString">
                <button id="friendListForCreateChannelResetSearch" @click="resetSearchField()">Reset search!</button>
            </div>
            
            <div id="scrollContainer">

                <div id="friendListForCreateChannelBox"
                    v-for="(friend, i) of searchFriend()"
                    @click="addFriendToTheChannelFriendsList( friend, i )">
                    
                    <img id="friendListForCreateChannelAvatar" :src="displayFriendAvatar( friend.avatar )">

                    <div id="friendListForCreateChannelUsernick">{{ friend.usernick }}</div>
                </div>

            </div>

        </section>
    `,

    data(){
        return{

            searchString : '',

        }
    },


    methods:{

        //Display avatar if file type is allowed
        displayAccountOrDefaultAvatar( avatar ){
            let allowedImageFileTypes = [ '.png', '.jpeg', '.jpg', '.gif' ];
            for( let type of allowedImageFileTypes ){
                if( avatar.toLowerCase().includes( type ) ){
                    return avatar;
                }                
            }
            return 'http://158.174.120.227/CatchUp/avatar01.png';
         },

        //Display friends avatar
        displayFriendAvatar( avatar ){
            return this.displayAccountOrDefaultAvatar( avatar )
        },

        //search for a friend by usernick
        searchFriend(){
            let tempFriends = [];

            if( this.searchString === '' ){
                return this.forChannelCreationMyFriends;
            }

            for( let friend of this.forChannelCreationMyFriends ){
                if( friend.usernick.toLowerCase().includes( this.searchString.toLowerCase() )){
                    tempFriends.push( friend );
                }
            }
            return tempFriends;
        },

        //Makes the search field, that holds searchString, empty
        resetSearchField(){
            this.searchString = '';
        },


        //When pressing on a friend, the friend will be moved to and used by another component
        addFriendToTheChannelFriendsList( friend, index ){
            console.log( friend.friendid )
            console.log( friend.usernick )
            this.$store.commit( 'appendForChannelCreationMyFriendThatWillBeAddedToTheNewChannel', friend )
            this.$store.commit( 'removeForChannelCreationMyFriend', index )
        },
            


    },


    computed:{
        //Get all friends for the logged in account from $store
        forChannelCreationMyFriends(){
            return this.$store.state.forChannelCreationMyFriends },

        //Get information about the current account
        currentAccount(){
            return this.$store.state.currentAccount; }

    },

    async created(){

        //Fetch friends from DB
        let friends = await fetch('/rest/friendlist/' + this.currentAccount.id )
            .then( friends => friends.json())
            .then( friends => this.$store.commit( 'setForChannelCreationMyFriends', friends ));



    },    
}