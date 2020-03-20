import navbar from './components/navbar.js'


export default{
    components:{
        navbar
    },


    template:`

        <section id="appContainer">

            <div id="appButton">
                <h3>| | |</h3>
            </div>

            <div id="appNav">
                <navbar/>
            </div>
            

            <main id="appMain">
                <router-view/>
            </main>
            
        </section>
    
    `,

    /*async created(){
        let channelNames = await fetch('/rest/channelnames')
        channelNames = await channelNames.json()
        
        this.$store.commit('setChannelNames', channelNames)
    }*/
}