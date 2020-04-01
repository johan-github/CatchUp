

import navbar from '../components/navbar.js'
// import loginAccountForm from '../components/loginAccountForm.js'
/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by Johan (cleanUp) 2020-04-01
* Notes: Displays when logged in. Need to be edited later on.
/**********************************/
import loginAccountForm from '../components/loginAccountForm.js'


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
        navbar,

    },

    template: `
    <div>
        <div id="appButton">
            <h3>| | |</h3>
        </div>
        <div id="appNav">
            <navbar/>
        </div>
        <main id="appMain">
            <router-view/>
        </main>
        <div>
            <displayChannel/>
        </div>
    `,


    
}

/************************     USEABLE CODE???    ****************************************** */
/*export default{
  components:{
    loginAccountForm,
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
            <!--<loginAccountForm/>-->
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
/****************************************************************************************** */