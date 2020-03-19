export default {

    template: `
    
    <div id="app">
      <nav>
        <router-link to="/home"> Login </router-link>
        <router-link to="/register-new-user"> Register </router-link>
      </nav>
      <main>
        <router-view/>
      </main>
    
    </div>
    `,

}