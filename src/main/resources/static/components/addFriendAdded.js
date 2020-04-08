/********************************* /
* Orginal by Hassan. 2020-03-24
* Last Edited by Hassan. 2020-04-08
* Notes: This component lists friends that will be members of new created channel
/**********************************/
export default{
    template:`
        <section id="friendListForCreateChannelContainer">

            <div id="friendListForCreateChannelSearchBox">
                <input id="friendListForCreateChannelSearch" type="text" placeholder="Search added friend..."
                    @keyup="searchFriend()" @keyup.enter="resetSearchField()" v-model="searchString">
                <button id="friendListForCreateChannelResetSearch" @click="resetSearchField()">Reset search!</button>
                <!--<button id="friendListForCreateChannelResetList" @click="resetFriendList()">Reset list!</button>-->
            </div>

            <div id="scrollContainer">

                <div id="friendListForCreateChannelBox"
                    v-for="(friend, i) of searchFriend()"
                    @click="removeFriendFromTempListToFriendList( friend, i )">
                    
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

        resetFriendList(){
            for( let friend of this.friendsToAddToChannel ){
                this.$store.commit( 'appendForChannelCreationMyFriend', friend )
                this.$store.commit( 'removeForChannelCreationMyFriendThatWillBeAddedToTheNewChannel', friend )
            }
        },

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
                return this.friendsToAddToChannel;
            }

            for( let friend of this.friendsToAddToChannel ){
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

        removeFriendFromTempListToFriendList( friend, index ){
            this.$store.commit( 'appendForChannelCreationMyFriend', friend )
            this.$store.commit( 'removeForChannelCreationMyFriendThatWillBeAddedToTheNewChannel', index )
        },

    },


    computed:{
        friendsToAddToChannel(){
            return this.$store.state.forChannelCreationMyFriendsThatWillBeAddedToTheNewChannel;
        },

        //Get all friends for the logged in account from $store
        forChannelCreationMyFriends(){
            return this.$store.state.forChannelCreationMyFriends },

        //Get information about the current account
        currentAccount(){
            return this.$store.state.currentAccount; }
            
    },
















    
}