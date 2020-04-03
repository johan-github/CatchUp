/********************************* /
* Orginal by Johan. 2020-03-31
* Last Edited by Johan 2020-04-02
* Notes: Temp / test
/**********************************/


export default {
    template: /* html */ `
    <section id="container">
        <section class="logOutSection">
            <form class="logOutForm">
                <div class="logOutDivFields">
                    <div class="logOutDiv">
                        <p id="label">You have Successfully logged out!<br>
                        You will be redirected in 5 seconds to the login page
                        <br>Please wait...</p>
                    </div>
                </div>
            </form>
        </section>
    </section>
    `,

    async created(){

        /*let foundAccountWithEnteredEmail = await fetch('/rest/accounts/email/' + this.$store.currentAccount.email)
            .then( rightAccount => rightAccount.json())*/
              
            console.log(this.$store.currentAccount.id);
            
            let changeStatusToOffline = {
                            
                id: this.$store.currentAccount.id,
                email: this.$store.currentAccount.email,
                usernick: this.$store.currentAccount.usernick,
                password: this.$store.currentAccount.password,
                avatar: this.$store.currentAccount.avatar,
                status: "offline"
            
        }
        await fetch('/rest/accounts',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(changeStatusToOffline)

        })
        console.log(changeStatusToOffline.status)

        this.$store.commit('setAccount', null)
        
        setTimeout( () => this.$router.push({ path: '/loginAccount'}), 5000);
    },

    computed:{
        currentAccount() {
            return this.$store.state.currentAccount
        }
    }
}