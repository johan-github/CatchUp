import { store } from './store.js'



let ws;
let isConnected = false;
connect();

function connect() {
    // change PORT to your backends PORT
    ws = new WebSocket('ws://158.174.120.227:3308/catchup?useSSL=false')
    
    ws.onmessage = (e) => {
      showSomething(e.data);

      let data = JSON.parse(e.data)

      if(data.timestamp) {
        // LocalDateTime.ofInstant(Instant.ofEpochMilli(socketExample.timestamp), TimeZone.getDefault().toZoneId())

        // 2020-03-16T12:01:51.834

        // 3/16/2020, 12:04:26 PM

        // Mon Mar 16 2020 12:05:06 GMT+0100 (Central European Standard Time)
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

      // checks if data exists, and the check if it 
      // contains the species property
      // (common pattern in JS)
      // if(data && data.species){
      //   store.commit('appendPet', data)
      // }

    }

    /**
     * onopen triggas när anslutningen
     * är genomförd
     */
    ws.onopen = (e) => {
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