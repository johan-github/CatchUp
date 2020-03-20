export default {

  template: `
  
  <div id="app">
    <nav>
      <router-link to="/loginUser"> Login </router-link>
      <router-link to="/register/user"> Register </router-link>
    </nav>
    <main>
      <router-view/>
    </main>
  
  </div>
  `,

    /*async created(){
        let channelNames = await fetch('/rest/channelnames')
        channelNames = await channelNames.json()
        
        this.$store.commit('setChannelNames', channelNames)
    }*/
}