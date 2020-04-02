/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by ......
* Notes: Displays Accounts channels & searchbar & create new channel button / test
/**********************************/
import createChannel from '../components/createChannel.js'
import displayChannel from '../components/displayChannel.js'
import channelCreateSearch from '../components/channelCreateSearch.js'
import displayChannelName from '../components/displayChannelName.js'


export default{
    components:{
        createChannel,
        displayChannel,
        channelCreateSearch,
        displayChannelName,
    },

    //************************************************************** */


    template:`
        <div id="viewChannels">

                <displayChannel/>

        </div>
    `,

}