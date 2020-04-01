


let ws; //Var to store WebSocket-class in
let isConnected = false;
connect();

function connect() {

    /**
     * ws : WebSocket var
     * Important to add correct PORT. Socket route have to be the same as the one in WebSocket. ('ws://localhost:4000/your-socket-route')
     */
    ws = new WebSocket('ws://localhost:4000/chatUp-socket-route');

    
    ws.onopen = (e) => { //onopen : triggers when a connection is made with the server / when ChatUp is on/updated

      sendSomething();

      isConnected = true; };


    ws.onmessage = (e) => {
      showSomething(e.data); }
    
    
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

  let socket = {
    message : 'Hi and welcome!',
    timestamp : Date.now(),
  }

    //ws.send( JSON.stringify( { firstname: "Hello World!" })); //.send: Will send its content to the BackEnd ( handleTextMessage in Spring )

    ws.send( JSON.stringify( socket ))

}




function showSomething(message) {

    console.log(message);

}