/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by Alberts 2020-04-02
* Notes: We are using this at the moment
/**********************************/

export default{


    template: /* html */ `

        <div class="nav">

            <div id="navHome">
                <router-link to="/home">C H A N N E L S</router-link>
            </div>

            <div id="navChannels">
                <router-link to="/testsocketview">T E S T</router-link>
            </div>

            <div id="navFriends">
                <router-link to="/friends">F R I E N D S</router-link>
            </div>

            <div id="navOptions">
                <router-link to="/options">O P T I O N S</router-link>
            </div>

            <div id="navAbout">
                <router-link to="/about">A B O U T</router-link>
            </div>

            <div id="navLogout">
                <router-link to="/logOutPage">L O G   O U T</router-link>
            </div>

        </div>

    `,

}