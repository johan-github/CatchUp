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
}