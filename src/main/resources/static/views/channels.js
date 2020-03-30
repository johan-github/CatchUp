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

                <channelCreateSearch/>

        </div>
    `,

}