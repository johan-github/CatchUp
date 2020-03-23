

export default{
    components:{

    },


    template:`
        <section>
            <div id="displayFriendBox" v-for="(friend, i ) of getNames" :key="friend.firstName + i">
                <div id="displayFriendPic">{{ friend.picture }}</div>
                <div id="displayFriendNick">{{ friend.firstName }}</div>
                <div id="displayFriendAddFavorite">❤️</div>
                <div id="displayFriendCreateChannelWith">➕</div>
                <div id="displayFriendRemove">🗑️</div>
            </div>
        </section>
    `,


    methods:{

    },


    computed:{

    }

}