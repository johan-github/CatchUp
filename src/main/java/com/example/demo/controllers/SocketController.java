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
import java.util.Map;

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
        System.out.println("SocketController: setService rad 34");
        this.socketService = socketService;
    }

    /**
     * handleTextMessage: Handles incoming messages from Vue, when a ws.send( JSON.stringify { return 'Hello' }) is made, handleTextMessage will run it and display its message.
     * Payload: The message from the FrontEnd (Vue) will be stored there
     */
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        System.out.println("SocketController: handleTextMessage rad 44");
        System.out.println("Received msg: " + message.getPayload());


        Map event = gson.fromJson(message.getPayload(), Map.class);

        String action = event.get("action").toString();
        switch (action) {
            case "message":
                System.out.println("SocketController: handleTextMessage rad 53");
                System.out.println("Message:");
                System.out.println(event.get("text").toString());
                //socketService.sendToAll(event.get("text").toString());
                socketService.sendToAll(message.getPayload());
                break;
            case "loginEvent":
                System.out.println("SocketController: handleTextMessage rad 59");
                System.out.println("LoginEvent:");
                System.out.println(event.get("text").toString());
                break;
            default:
                System.out.println("SocketController: handleTextMessage rad 64");
                System.out.println("Could not handle action: " + action);
                socketService.sendToOne(session, "Could not handle action: " + action);

        }
    }
    /**
     * When connected from FrontEnd
     */
    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        System.out.println("SocketController: afterConnectionEstablished rad 75");
        socketService.addSession(session);
    }

    /**
     * When disconnected from FrontEnd
     */
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        System.out.println("SocketController: afterConnectionClosed rad 84");
        socketService.removeSession(session);
    }
}