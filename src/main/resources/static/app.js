/********************************* /
* Orginal by ......
* Last Edited by Johan Fixed toggle login/register. Removed navBar 2020-04-02
* Notes: First thing you see when going to CatchUp. Might need to change?
/**********************************/

// import loginAccountForm from './components/loginAccountForm.js'
// import home from './views/home.js'
// import loginAccount from './views/loginAccount.js'
export default{
  components:{
    // loginAccount
    // loginAccountForm,
    // home,
  },

  template: /* html */`

  <section>

    <!--  <loginAccount/> -->
    <router-view/>

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