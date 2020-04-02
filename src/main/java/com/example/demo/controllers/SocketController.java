package com.example.demo.controllers;

import com.example.demo.entities.Message;
import com.example.demo.entities.Socket;
import com.example.demo.services.SocketService;
import com.google.gson.Gson;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

/**
 *  TextWebSocketHandler tar emot saker som strings, precis det vi gör mellan Vue och Spring (GSON/JSON.stringify)
 */
@Controller
public class SocketController extends TextWebSocketHandler {

    /**
     * GSON: The same as JSON. Stiringifies stuff
     */
    Gson gson = new Gson();

    /**
     *  SocketService har REDAN en @Autowired i WebSocketConfig-klassen och därfär skapas den inte här. @Autowired görs endast en enda gång på Controllers!
     *  Autowired är en automatisk setter.
     *  Då @Autowired redan körs i WebSocket måste vi manuellt skriva en Setter här ( this.socketService = socketService; )
     */
    private SocketService socketService;
    public void setSocketService(SocketService socketService) {
        this.socketService = socketService;
    }

    /**
     * handleTextMessage: Handles incoming messages from Vue, when a ws.send( JSON.stringify { return 'Hello' }) is made, handleTextMessage will run it and display its message.
     * Payload: The message from the FrontEnd (Vue) will be stored there
     */
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        System.out.println("Received msg: " + message.getPayload());

        /**
         * Create a Socket-object to store incoming data from Vue
         * In Vue we create an object: let socket = { message : 'hello', timestamp : Date.now() } , and send it: ws.send( JSON.stringify( socket ));
         * message.getPayload(): receives message from Vue and converts it, so it...
         * Socket.class: can be stored in Socket-class
         */

        // Adding Entity Message here
        Message chatMessage = gson.fromJson( message.getPayload(), Message.class );

        //Testing purpouse only, see if chat message prints
        //System.out.println(chatMessage.getText()); // How to add setters to this method?
        //System.out.println(chatMessage.getTime()); // Should this be set time?

        // Class (entity) to test socket connection
        Socket socket = gson.fromJson( message.getPayload(), Socket.class );

        // Testing the connection
        //System.out.println("Message: " + socket.message);
        //System.out.println("Timestamp: " + socket.timestamp);

        // Demonstration purpose only: send back "Hello" + same message as received
        // --- socketService.sendToAll("Hello " + message.getPayload());

        //socketService.sendToAll( socket, Socket.class );
        //socketService.sendToOne( session, socket, Socket.class );

        // Example with a generic Map instead of converting the JSON to a specific class
        // Map keysAndValues = new Gson().fromJson(message.getPayload(), Map.class);
        // Get the value of a key named "firstname"
        // String firstname = keysAndValues.get("firstname");


    }

    /**
     * When connected from FrontEnd
     */
    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        socketService.addSession(session);
    }

    /**
     * When disconnected from FrontEnd
     */
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        socketService.removeSession(session);
    }
}