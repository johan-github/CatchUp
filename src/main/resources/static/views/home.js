

import navbarLoggedIn from '../components/navbarLoggedIn.js'
import loginUserForm from '../components/loginUserForm.js'


import { createNamespacedHelpers } from '../libs/vuex.esm.browser.js'
import createChannel from '../components/createChannel.js'
import displayChannel from '../components/displayChannel.js'
import channelCreateSearch from '../components/channelCreateSearch.js'
import displayMsgAll from '../components/displayMsgAll.js'
import listFriends from '../components/listFriends.js'

export default {
    components: {
        createChannel,
        displayChannel,
        listFriends,
        channelCreateSearch,
        displayMsgAll,

    },

    template: `
        <div>
            <displayChannel/>
        </div>
    `,


    
}


/*export default{
  components:{
    loginUserForm,
    navbarLoggedIn,
  },


  template:`

    <section id="appContainer">

        <div id="appButton">
            <h3>| | |</h3>
        </div>

        <div id="appNav">
          <navbarLoggedIn/>
        </div>
        

        <main id="appMain">
            <router-view/>
            <!--<loginUserForm/>-->
        </main>
        
    </section>

  `,
    
    
}*/



/*import { createNamespacedHelpers } from '../libs/vuex.esm.browser.js'
import createChannel from '../components/createChannel.js'
import displayChannel from '../components/displayChannel.js'
import channelCreateSearch from '../components/channelCreateSearch.js'
import displayMsgAll from '../components/displayMsgAll.js'
import listFriends from '../components/listFriends.js'

export default {
    components: {
        createChannel,
        displayChannel,
        listFriends,
        channelCreateSearch,
        displayMsgAll,

    },

    template: `
        <div>
            <listFriends/>
        </div>
    `,


    
}*/