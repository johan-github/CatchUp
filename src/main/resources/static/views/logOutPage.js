/********************************* /
 * Orginal by Alberts och Johan. 2020-04-02
 * Last Edited by Alberts 2020-04-02
 * Notes: 
 /**********************************/
 
import accountLogOut from '../components/accountLogOut.js'
 
export default {
     components: {
        accountLogOut,
     },
 
     template: /* html */ `
     <div class="logOutPageDiv">
     <h2>Log out page</h2>
     <accountLogOut/>
     <!--<router-view/> -->
     </div>

     `,

}