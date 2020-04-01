// import navbar from './components/navbar.js'
import loginUserForm from './components/loginUserForm.js'

export default{
  components:{
    // navbar,
    loginUserForm,
  },

  template:`

  <section>

    <loginUserForm/>

  </section>




  <!-- <section id="appContainer">

        <div id="appButton">
            <h3>| | |</h3>
        </div>

        <div id="appNav">
          <navbar/>
        </div>
        

        <main id="appMain">
            <router-view/>
        </main>
        
    </section> -->
    
    `,
}