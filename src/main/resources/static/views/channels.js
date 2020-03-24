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

        

        <div id="viewChannelsBoxChannelCreateNew">
                <createChannel/>
            </div>
            
 <!--       
        
            <div id="viewChannelsDisplayChannelName">
                <displayChannelName/>
            </div>

            <div id="viewChannelsDisplayChannel">
                <displayChannel/>
            </div>

            <div id="viewChannelsChannelCreateSearch">
                <channelCreateSearch/>
            </div>  
                
            
            <div id="viewChannelsBoxChannelCreateNew">
                <createChannel/>
            </div>

            
            
            
            
-->
        </div>
    `,

}