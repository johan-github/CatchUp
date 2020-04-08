/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by ......
* Notes: Not updated. will be fixed later by ......
/**********************************/
import listFriends from '../components/listFriends.js'
import navBar from '../components/navbar.js'

export default{
    components:{
        listFriends,
        navBar
    },

    //************************************************************** */


    template:`
        <div id="homeContainer">
            
            <div id="appButton">
                <h3>| | |</h3>
            </div>
            

            <div id="appNav">
                <navBar/>
            </div>

            
            <main id="appMain">
                <listFriends/>
            </main>

            
        </div>
    `,

    methods:
    {
        routeToAddFriend(){
            this.$router.push('/addNewFriend')
        }
    }
}