export default {

  template: `
  
  <div id="app">
    <nav class="nav">
      <div id="navLogin">
      <i class="fa fa-user"></i>
        <router-link to="/loginUser"> L O G I N </router-link>
      </div>

      <div id="navRegister"> 
      <i class="fa fa-unlock-alt"></i>    
       <router-link to="/registerUser"> R E G I S T E R </router-link>
      </div>
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