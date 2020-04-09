/********************************* /
* Orginal by Johan. 2020-04-07
* Last Edited by Johan, Tobbe, Alberts, Helena 2020-04-07
* Notes: 
/**********************************/
import addNewFriendComp from '../components/addNewFriendComp.js'
import navBar from '../components/navbar.js'

export default{
    components:{
        addNewFriendComp,
        navBar
    },

    template:`
    <div id="homeContainer">
            
            <div id="appButton">
                <h3>| | |</h3>
            </div>
            

            <div id="appNav">
                <navBar/>
            </div>

            
            <main id="appMain">
                <addNewFriendComp/>
            </main>
        </div>
    `,
}