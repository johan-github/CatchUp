/********************************* /
* Orginal by ......
* Last Edited by Johan (cleanUp) 2020-04-01
* Notes: First thing you see when going to CatchUp. Might need to change?
/**********************************/
// import navbar from './components/navbar.js'
import loginAccountForm from './components/loginAccountForm.js'

export default{
  components:{
    // navbar,
    loginAccountForm,
  },

  template:`

  <section>

    <loginAccountForm/>

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