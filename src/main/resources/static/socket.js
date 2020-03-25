import { store } from './store.js'



let ws;
let isConnected = false;
connect();

function connect() {
    // PORT!
    ws = new WebSocket('ws://158.174.120.227:3308/catchup?useSSL=false')
    
    ws.onmessage = (e) => {
      showSomething(e.data);

      let data = JSON.parse(e.data)

      if(data.timestamp) {
        console.log(new Date(data.timestamp).toLocaleString())
      }

      switch(data.action) {
        case 'message':
          console.log(data)
          break;
        case 'new-channelName':
          store.commit('appendChannelNames', data)
          break;
      }
      

    }
    
    
    {
        sendSomething();
        isConnected = true;
    };

    ws.onclose = (e) => {
        console.log("Closing websocket...");
    };

  console.log("Connecting...");
}

function disconnect() {
    if (ws != null) {
        ws.close();
    }
    isConnected = false;
    console.log("Disconnected");
}

function sendSomething() {
  let socketExample = {
    action: 'message',
    message: 'Testing sockets',
    timestamp: Date.now()
  }

  let addressedMessage = {
    action: 'message',
    payload: socketExample
  }

    ws.send(JSON.stringify(socketExample));
}

function showSomething(message) {
    console.log(message);
}