package com.example.demo.services;

import com.example.demo.entities.Message;
import com.example.demo.repositories.MessageRepo;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
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

    private List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    /******************************************************************* Send to One.*/

    public void sendToOne(WebSocketSession webSocketSession, Object obj, Class klass) throws IOException {
        sendToOne(webSocketSession, gson.toJson(obj, klass));
    }

    public void sendToOne(WebSocketSession webSocketSession, String message) throws IOException {
        webSocketSession.sendMessage(new TextMessage(message));
    }

    /******************************************************************* Send To Group.*/

    public void sendToGroup(Object obj, Class klass) {
        sendToGroup( gson.toJson(obj, klass) );
    }

    public void sendToGroup(String message) {
        TextMessage msg = new TextMessage(message);
        for(WebSocketSession webSocketSession : sessions) {
            try {
                webSocketSession.sendMessage(msg);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    /******************************************************************* Send To All.*/

    public void sendToAll(Object obj, Class klass) {
        sendToAll( gson.toJson(obj, klass) );
    }

    public void sendToAll(String message) {
        TextMessage msg = new TextMessage(message);
        for(WebSocketSession webSocketSession : sessions) {
            try {
                webSocketSession.sendMessage(msg);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        System.out.println("SocketService: sendToAll rad 62");
    }

    /******************************************************************* Login and Out*/

    public void addSession(WebSocketSession session) {
        sessions.add(session);
    }

    public void removeSession(WebSocketSession session) {
        sessions.remove(session);
    }

}