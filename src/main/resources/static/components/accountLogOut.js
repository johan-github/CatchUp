/********************************* /
* Orginal by Johan. 2020-03-31
* Last Edited by Johan 2020-04-02
* Notes: Temp / test
/**********************************/
import { sendSocketEvent  } from '../socket.js';

export default {
    template: /* html */ `
    <section id="container">
        <section class="logOutSection">
            <form class="logOutForm">
                <div class="logOutDivFields">
                    <div class="logOutDiv">
                        <p id="label">You have Successfully logged out!<br><br>
                        You will be redirected in 5 seconds to the login page
                        <br>Please wait...</p>
                    </div>
                </div>
            </form>
        </section>
    </section>
    `,

    async created(){
            
            let changeStatusToOffline = {
                            
                id: this.currentAccount.id,
                email: this.currentAccount.email,
                usernick: this.currentAccount.usernick,
                password: this.currentAccount.password,
                avatar: this.currentAccount.avatar,
                status: "offline"
            
        }
        await fetch('/rest/accounts',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(changeStatusToOffline)

        })
        let logoutAcc = {
            action: "logoutAcc",
            id: this.currentAccount.id,
        }
        sendSocketEvent(logoutAcc)
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