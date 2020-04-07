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

@Controller
public class SocketController extends TextWebSocketHandler {

    Gson gson = new Gson();

    private SocketService socketService;
    public void setSocketService(SocketService socketService) {
        System.out.println("SocketController: setService rad 34");
        this.socketService = socketService;
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        System.out.println("Received msg: " + message.getPayload());


        Map event = gson.fromJson(message.getPayload(), Map.class);

        String action = event.get("action").toString();
        switch (action) {
            case "message":
                System.out.println("SocketController: message");
                System.out.print("Message: ");
                System.out.println(event.get("text").toString());
                socketService.sendToGroup(message.getPayload());
                break;
            case "loginEvent":
                System.out.println("SocketController: loginEvent");
                System.out.print("LoginEvent: ");
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