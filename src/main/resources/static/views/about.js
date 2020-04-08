/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by ......
* Notes: Displays info and creators
/**********************************/
import aboutCatchUp from '../components/aboutCatchUp.js'
import navBar from '../components/navbar.js'


export default{
    components:{
        aboutCatchUp,
        navBar
    },

    //************************************************************** */


    template:`
        <div id="inget">
            
            <div id="homeContainer">

                <div id="appButton">
                    <h3>| | |</h3>
                </div>

                <div id="appNav">
                    <navBar/>
                </div>

                <main id="appMain">
                    <aboutCatchUp/>
                </main>

            </div> <!-- end-tag 'homeContainer' -->
            <!-- <div id="label"> </div> -->
        </div>
    `,

}