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
        webSocketSession.sendMessage(new TextMessage(message));
    }

    public void sendToOne(WebSocketSession webSocketSession, Object obj, Class klass) throws IOException {
        sendToOne(webSocketSession, gson.toJson(obj, klass));
    }


    public void sendToAll(Object obj, Class klass) {
        sendToAll( gson.toJson(obj, klass) );
    }

    /**
     * sendToAll: takes a message from the FrontEnd and send in to ALL CONNECTED
     * TextMessage msg = new TextMessage(message): Stores the message from the FrontEnd to Spring
     * for(WebSocketSession webSocketSession : sessions): Loops through ALL connected sessions (try-catch to prevent crash if a connected session would close in the middle of the loop)
     */
    public void sendToAll(String message) {
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
        sessions.add(session);
    }

    public void removeSession(WebSocketSession session) {
        sessions.remove(session);
    }

}