package com.example.demo.services;

import com.google.gson.Gson;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class SocketService {

    Gson gson = new Gson();

    /**
     * List<WebSocketSession> för att spara alla anslutna klienter i, som vi senare kan loopa igenom för att ett skicka meddelande
     * CopyOnWriteArrayList<>() detta används istället för en vanlig ArrayList för att Spring kommer att hantera flera trådar (sesssions) och för att innehållet inte ska bli korrupt
     */
    private List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    public void sendToOne(WebSocketSession webSocketSession, String message) throws IOException {
        System.out.println("SocketService: sendToOne rad 25");
        webSocketSession.sendMessage(new TextMessage(message));
    }

    public void sendToOne(WebSocketSession webSocketSession, Object obj, Class klass) throws IOException {
        System.out.println("SocketService: sendToOne rad 30");
        sendToOne(webSocketSession, gson.toJson(obj, klass));
    }


    public void sendToAll(Object obj, Class klass) {
        System.out.println("SocketService: sendToAll rad 36");  /// (4) sen till SocketService: sendToAll rad 46
        sendToAll( gson.toJson(obj, klass) );
    }
    public void sendToGroup(Object obj, Class klass) {
        System.out.println("SocketService: sendToGroup rad 40");  /// (4) sen till SocketService: sendToAll rad 46
        sendToGroup( gson.toJson(obj, klass) );
    }
    /**
     * sendToAll: takes a message from the FrontEnd and send in to ALL CONNECTED
     * TextMessage msg = new TextMessage(message): Stores the message from the FrontEnd to Spring
     * for(WebSocketSession webSocketSession : sessions): Loops through ALL connected sessions (try-catch to prevent crash if a connected session would close in the middle of the loop)
     */
    public void sendToAll(String message) {
        System.out.println("SocketService: sendToAll rad 46");   // (5)  här måste det vara att den skickar ut till alla. sedan dom som får det går till MessageController: getChannelMessage rad 50
        TextMessage msg = new TextMessage(message);
        for(WebSocketSession webSocketSession : sessions) {
            try {
                webSocketSession.sendMessage(msg);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void sendToGroup(String message) {
        System.out.println("SocketService: sendToGroup rad 61");   // (5)  här måste det vara att den skickar ut till alla. sedan dom som får det går till MessageController: getChannelMessage rad 50
        TextMessage msg = new TextMessage(message);
        for(WebSocketSession webSocketSession : sessions) {
            try {
                webSocketSession.sendMessage(msg);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    public void addSession(WebSocketSession session) {
        System.out.println("SocketService: addSession rad 72"); // is in use
        sessions.add(session);
    }

    public void removeSession(WebSocketSession session) {
        System.out.println("SocketService: removeSession rad 77");  // is in use
        sessions.remove(session);
    }

}