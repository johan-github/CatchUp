/********************************* /
* Orginal by Hassan. 2020-03-30
* Last Edited by Helena 2020-04-01
* Notes: ......
/**********************************/

import { store } from './store.js'
let ws; 
let isConnected = false;
let currentChannelId = 0;  // this needs to found from store but I can't get it from teh fucking $store.
connect();

function connect() {

    /**
     * ws : WebSocket var
     * Important to add correct PORT. Socket route have to be the same as the one in WebSocket. ('ws://localhost:4000/socket-message')
     */
    ws = new WebSocket('ws://localhost:4000/socket-message');

    
    ws.onopen = (e) => { //onopen : triggers when a connection is made with the server / when ChatUp is on/updated

      //sendSomething();

      isConnected = true; };


    ws.onmessage = (e) => {
      let data = JSON.parse(e.data)
      if(store.state.currentChannel.id !== undefined){      
        currentChannelId = store.state.currentChannel.id
      }
      else { 
        currentChannelId = 0
      }
      switch(data.action) {
        case 'newMsg':
          if(currentChannelId == 0){ // this is ment to update if you are in the route-home 

          }
          else if(currentChannelId == data.channelid){ // if you are in the right channel then print it out.         
            store.commit('appendMessage', data)
          }
          else { // TODO: This can be a popup thing if you are in another channel and then can't see the message from current channel.

          }
          break;
        case 'delMsg':
          if(currentChannelId == 0){ // this is ment to update if you are in the route-home 

          }
          else if(currentChannelId == data.channelid){ // if you are in the right channel then print it out.         
            delMsgEvent();
          }
          else { // TODO: This can be a popup thing if you are in another channel and then can't see the message from current channel.

          }
          break;
          case 'loginAcc':
            if(currentChannelId === 0){ // this is ment to update if you are in the route-home 

  
            }
            else { // if you are in the right channel then print it out.   
               console.log(currentChannelId);
                
              onlineEvent();
            }
            break;
            case 'logoutAcc':
              if(currentChannelId === 0){ // this is ment to update if you are in the route-home 
    
              }
              else { // if you are in the right channel then print it out.         
                offlineEvent();
              }
              break;
      }
    
    }
    
/*************************************************************** OnClose */
    
ws.onclose = (e) => { //Triggers when a connection is closed
  console.log("Closing websocket..."); 
  disconnect();
};
console.log("Connected...");
}




export function sendSocketEvent(payload) {
  ws.send(JSON.stringify(payload))
}

async function delMsgEvent(){
  console.log("socket: delMsg");
  
  await fetch('/rest/channel/messages/' + currentChannelId)
  .then(messages => messages.json())
  .then(messages => store.commit('setMessages', messages))
}

async function onlineEvent(){
  console.log("socket: online");
  
  await fetch('/rest/channel/messages/' + currentChannelId)
  .then(messages => messages.json())
  .then(messages => store.commit('setMessages', messages))
}

async function offlineEvent(){
  console.log("socket: online");
  
  await fetch('/rest/channel/messages/' + currentChannelId)
  .then(messages => messages.json())
  .then(messages => store.commit('setMessages', messages))
}

function disconnect() {

    if (ws != null) {
        ws.close(); }
    isConnected = false;
    console.log("Disconnected");
}

function loginEvent() { // implemented when the first stepp of sockets is working.
let socket = {
action: 'loginEvent',
text: 'testsocketcomp: loginEvent rad 70',
}
  ws.send( JSON.stringify( socket ))
}

