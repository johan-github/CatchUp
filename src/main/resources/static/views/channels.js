import createChannel from '../components/createChannel.js'
import listChannels from '../components/listChannels.js'


export default{
    components:{
        createChannel,
        listChannels
    },

    //************************************************************** */


    template:`
        <div>
            <createChannel/>
            <listChannels/>

        </div>
    `,

}