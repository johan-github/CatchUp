import { store } from './store.js'
/********************************* /
* Orginal by Hassan. 2020-03-30
* Last Edited by Helena 2020-04-01
* Notes: ......
/**********************************/

let ws; //Var to store WebSocket-class in
let isConnected = false;
connect();

function connect() {

    /**
     * ws : WebSocket var
     * Important to add correct PORT. Socket route have to be the same as the one in WebSocket. ('ws://localhost:4000/socket-message')
     */
    ws = new WebSocket('ws://localhost:4000/socket-message');

    
    ws.onopen = (e) => { //onopen : triggers when a connection is made with the server / when ChatUp is on/updated

      sendSomething();

      isConnected = true; };


    ws.onmessage = (e) => {
      showSomething(e.data)

      let data
      try{
        data = JSON.parse(e.data)
      } 
      catch{
      }
      console.log("TEST2: Data to store.js from socket.js: " + data)

      // If data exists and if it contains text (messages)
      // To make nothing undefined
      if(data && data.text){
        store.commit('appendMessage', data)
      }
    
    }

    
    
    
    ws.onclose = (e) => { //Triggers when a connection is closed
        console.log("Closing websocket..."); };


  console.log("Connecting..."); //When the server is connected
}

function disconnect() {

    if (ws != null) {
        ws.close(); }
    isConnected = false;
    console.log("Disconnected");
}


function sendSomething() {

  // Testing socket connection
  let socket = {
    message : 'Socket test',
    timestamp : new Date().toISOString().slice(0,19).replace("T"," ")

  }
  console.log( socket)

    //ws.send( JSON.stringify( { firstname: "Hello World!" })); //.send: Will send its content to the BackEnd ( handleTextMessage in Spring )

    // Testing from backend, Entity Socket and SocketController
    ws.send( JSON.stringify( socket ))

}

// Testing function to get messages instantly
function getOneMessage() {

  // Messages from store
  let messagesFromStore = this.$store.state.messages
  for(let message of messagesFromStore){
    ws.send( JSON.stringify ( message ))
    
  }

}





function showSomething(message) {

    console.log(message);

}