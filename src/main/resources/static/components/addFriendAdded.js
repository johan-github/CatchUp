

export default{
    template:`
        <section id="addFriendAddedBox">            
            
            <div id="addFriendAddedBoxBottom">
                <div id="addFriendAddedBoxForm"
                    v-for="(friend, i) of friendsAdded"
                    @click="removeFriendFromAddList( friend, i )">

                    <div id="addFriendAddedBoxPic"></div>

                    <div id="addFriendAddedBoxName">{{ friend.name }}</div>
                </div>            
            </div>

        </section>
    `,


    methods:{

        removeFriendFromAddList( friend, index ){
            this.$store.commit( 'appendFriend', friend )
            this.$store.commit( 'removeFriendsAdded', index ) },
    },


    computed:{
        friendsAdded(){
            return this.$store.state.friendsAdded }


            
    },
















    
}