


export default{
    components:{

    },


    template:`

        <div class="nav">

            <div id="navHome">
                <router-link to="/home">H O M E</router-link>
            </div>

            <div id="navChannels">                
                <router-link to="/channels">C H A N N E L</router-link>
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
                <router-link to="/logout">L O G   O U T</router-link>
            </div>
            

        </div>
    `,
}