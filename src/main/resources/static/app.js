export default {

<<<<<<< HEAD

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
=======
    template: `
    
    <div id="app">
      <nav>
        <router-link to="/home"> Login </router-link>
        <router-link to="/register/user"> Register </router-link>
      </nav>
      <main>
        <router-view/>
      </main>
>>>>>>> registeruser
    
    </div>
    `,

<<<<<<< HEAD
    /*async created(){
        let channelNames = await fetch('/rest/channelnames')
        channelNames = await channelNames.json()
        
        this.$store.commit('setChannelNames', channelNames)
    }*/
=======
>>>>>>> registeruser
}