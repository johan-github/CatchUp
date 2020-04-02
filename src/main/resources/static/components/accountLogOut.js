/********************************* /
* Orginal by Johan. 2020-03-31
* Last Edited by Alberts 2020-04-02
* Notes: Temp / test
/**********************************/


export default {
    created(){
        setTimeout( () => this.$router.push({ path: '/loginAccount'}), 5000);
    },
    template: /* html */ `
        <section class="logOutSection">
            <form class="logOutForm">
                <div class="logOutDivFields">
                    <div class="logOutDiv">
                        <p>You have Successfully logged out!</p>
                        <p>You will be redirected in 5 seconds to the login page</p>
                    </div>
                </div>
            </form>
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
}