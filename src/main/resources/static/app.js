
import navbarNotLoggedIn from './components/navbarNotLoggedIn.js'
import loginUserForm from './components/loginUserForm.js'





export default{
  components:{
    navbarNotLoggedIn,
    loginUserForm,
  },

  template:`

  
  <section id="appContainer">

        <div id="appButton">
            <h3>| | |</h3>
        </div>

        <div id="appNav">
          <navbarNotLoggedIn/>
        </div>
        

        <main id="appMain">
            <router-view/>
        </main>
        
    </section>
    
    `,
}