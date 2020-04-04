/********************************* /
* Orginal by Hassan. 2020-03-30
* Last Edited by Helena 2020-04-01
* Notes: ......
/**********************************/

import { store } from './store.js'
//import { testsocketcomp } from '/components/testsocketcomp.js'
let ws; //Var to store WebSocket-class in
let isConnected = false;
connect();

function connect() {

    /**
     * ws : WebSocket var
     * Important to add correct PORT. Socket route have to be the same as the one in WebSocket. ('ws://localhost:4000/socket-message')
     */
    ws = new WebSocket('ws://localhost:4000/socket-message');

    
/*************************************************************** OnOpen */

    ws.onopen = (e) => { //onopen : triggers when a connection is made with the server / when ChatUp is on/updated

      loginEvent();

      isConnected = true; };


/*************************************************************** OnMessage */

    ws.onmessage = (e) => {
      //showedata(e.data)
      console.log("showedata: rad 30 " + e.data)
      let data = JSON.parse(e.data)
      switch(data.action) {
        case 'message':
          console.log(data)
          
          store.commit('appendMessage', data)
          //keepScrollAtBottom()
          break;
        case 'login':
          //store.commit('appendPet', data)
          break;
      }
    
    }

    
/*************************************************************** OnClose */
    
    ws.onclose = (e) => { //Triggers when a connection is closed
        console.log("Closing websocket..."); 
        disconnect();
      };


  console.log("Connecting..."); //When the server is connected
}

export function sendSocketEvent(payload) {
  console.log("reading payload " + payload)
  ws.send(JSON.stringify(payload))
}

async function updateChannel(){
  await fetch('/rest/channel/messages/' + '1')
  .then(messages => messages.json())
  .then(messages => store.commit('setMessages', messages))
}

function disconnect() {

    if (ws != null) {
        ws.close(); }
    isConnected = false;
    console.log("Disconnected");
}

function loginEvent() {
  let socket = {
  action: 'loginEvent',
  text: 'testsocketcomp: loginEvent rad 70',
 // time: new Date().toISOString().slice(0,19).replace("T", " ")
}
  console.log("socket rad 73" + socket )
    ws.send( JSON.stringify( socket ))
}

function sendSomething() {
  let socket = {
  action: 'message',
  text: 'sendSomething rad 102',
  time: new Date().toISOString().slice(0,19).replace("T", " ")
}
console.log("socket rad 105" + socket )
    ws.send( JSON.stringify( socket ))
}

// Testing function to get messages instantly
function getOneMessage() {
  console.log( "getOneMessage: rad 89");
  // Messages from store
  let messagesFromStore = this.$store.state.messages
  for(let message of messagesFromStore){
    ws.send( JSON.stringify ( message ))
    
  }

}
function showedata(message) {

    console.log( "showedata: " + message);

}