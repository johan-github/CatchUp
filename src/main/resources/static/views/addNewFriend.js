/********************************* /
* Orginal by Johan. 2020-04-07
* Last Edited by Johan, Tobbe, Alberts, Helena 2020-04-07
* Notes: 
/**********************************/
import addNewFriendComp from '../components/addNewFriendComp.js'

export default{
    components:{
        addNewFriendComp
    },

    template:`
        <div>
        <h2> ADD NEW FRIEND </h2>
        <addNewFriendComp/>
        <button @click="routeToFriends" > Back </button>
        </div>
    `,


    methods:
    {
        routeToFriends(){
            this.$router.push('/friends')
        }
    }

}