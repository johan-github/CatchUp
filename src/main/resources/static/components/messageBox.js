/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by Johan (cleanUp) 2020-04-01
* Notes: Design of one message in a channel. ATM hard coded.
/**********************************/
import navbar from '../components/navbar.js'


export default{
    components:{
        navbar

    },

    template:`
        <div>

            <div id="messageBox">
                <div id="messageBoxAccountPic"></div>
                <div id="messageBoxAccountName">Barnen i Bullerbyn</div>
                <div id="messageBoxAccountAdd">➕ 🟢</div>
                <div id="messageBoxAccountMessageTime">10:57</div>
                <div id="messageBoxAccountMessage">Hassan, jag har problem :(</div>
            </div>
        </div>
    `,

}