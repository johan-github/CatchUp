/********************************* /
* Orginal by Johan. 2020-03-31
* Last Edited by Johan 2020-04-01
* Notes: Temp / test
/**********************************/


export default {
    template:`
        <section>
        <!-- Replace button for nav-button later! -->
        <button @click="logOutCurrentAccount">
          Log out </button>
        </section>    
    `,


    methods: {
        logOutCurrentAccount() {
            fetch('/logout') // For Socket
            this.$store.commit('setAccount', null)
            console.log("Successfully logged out");
            this.$router.push('/loginAccount')
        }
    },

    data(){
        return {
            currentAccount: {},

        }
    }




































}