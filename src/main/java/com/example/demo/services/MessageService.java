

package com.example.demo.services;

import com.example.demo.entities.Channel;
import com.example.demo.entities.ChannelMessage;
import com.example.demo.entities.Message;
import com.example.demo.repositories.MessageRepo;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class MessageService {

    @Autowired
    private MessageRepo messageRepo;

    @Autowired
    private SocketService socketService;

    Gson gson = new Gson();

    // Websocket part
    private List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    public void sendToOne(WebSocketSession webSocketSession, String message) throws IOException {
        System.out.println("MessageService: sendToOne rad 34");
        webSocketSession.sendMessage(new TextMessage(message));
    }

    public void sendToOne(WebSocketSession webSocketSession, Object obj, Class klass) throws IOException {
        System.out.println("MessageService: sendToOne rad 35");
        sendToOne(webSocketSession, gson.toJson(obj, klass));
    }


    public void sendToAll(Object obj, Class klass) {
        System.out.println("MessageService: sendToAll rad 45");
        sendToAll( gson.toJson(obj, klass) );
    }

    public void sendToAll(String message) {
        System.out.println("MessageService: sendToAll rad 50");
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
        System.out.println("MessageService: addSession rad 62");
        sessions.add(session);
    }

    public void removeSession(WebSocketSession session) {
        System.out.println("MessageService: removeSession rad 67");
        sessions.remove(session);
    }



    public List<Message> getAllMessages(){
        System.out.println("MessageService: getAllMessages rad 47");
        return ( List<Message> ) messageRepo.findAll();
    }

    public List<Message> getAllMessagesByEAccountId( int id ){
        System.out.println("MessageService: getAllMessagesByEAccountId rad 79");
        return ( List<Message> ) messageRepo.findAllByAccountid( id );
    }

    // All connected clients will be notified a new message has been created
    // Save to database, then update to SocketService (sendToAll)
    public Message addNewMessage(Message newMessage ){
        System.out.println("MessageService: addNewMessage rad 86"); /// (2) sen till MessageService: addNewMessage rad 91
        Message dbMessage = newMessage;

        try{
            dbMessage = messageRepo.save( newMessage );
            System.out.println("MessageService: addNewMessage rad 91"); /// (3) sen till SocketService: sendToAll rad 36
            //socketService.sendToGroup(dbMessage, Message.class);  // <<< denna som ska fixa det till alla
            dbMessage.action = "message";
            //socketService.sendToGroup(dbMessage, Message.class);  // <<< denna som ska fixa det till alla
        }catch(Exception e ){
            e.printStackTrace();
        }
        return dbMessage;
    }


    public List<Message> getChannelMessage(int id) {
        System.out.println("MessageService: getChannelMessage rad 102"); /// (7) sedan slutar cirkeln här.
        return (List<Message>) messageRepo.findBychannelid( id );
    }









}
