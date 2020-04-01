/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by Hassan. 2020-03-24
* Notes: Not in use
/**********************************/
import navbarLoggedIn from './components/navbarLoggedIn.js'
import loginUserForm from './components/loginUserForm.js'




export default{
  components:{
    loginUserForm,
    navbarLoggedIn,
  },


  template:`

    <section id="appContainer">

        <div id="appButton">
            <h3>| | |</h3>
        </div>

        <div id="appNav">
          <navbarLoggedIn/>
        </div>
        

        <main id="appMain">
            <router-view/>
            <!--<loginUserForm/>-->
        </main>
        
    </section>

  `,
    
    
}