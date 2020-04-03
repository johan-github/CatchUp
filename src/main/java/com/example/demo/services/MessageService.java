/********************************* /
 * Original by Matthias & Helena. 2020-04-03
 * Last Edited by Matthias & Helena 2020-04-03
 * Notes: ......
 /**********************************/

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
        webSocketSession.sendMessage(new TextMessage(message));
    }

    public void sendToOne(WebSocketSession webSocketSession, Object obj, Class klass) throws IOException {
        sendToOne(webSocketSession, gson.toJson(obj, klass));
    }


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
    }

    public void addSession(WebSocketSession session) {
        sessions.add(session);
    }

    public void removeSession(WebSocketSession session) {
        sessions.remove(session);
    }


    public List<Message> getAllMessages(){
        return ( List<Message> ) messageRepo.findAll();
    }

    public List<Message> getAllMessagesByEAccountId( int id ){
        return ( List<Message> ) messageRepo.findAllByAccountid( id );
    }


    // All connected clients will be notified a new message has been created
    // Save to database, then update to SocketService (sendToAll)
    public Message addNewMessage(Message newMessage ){
        Message dbMessage = null;

        try{
            dbMessage = messageRepo.save( newMessage );
            socketService.sendToAll(dbMessage, Message.class);
            System.out.println("IN MESSAGE SERVICE: addNewMessage");

        }catch(Exception e ){
            e.printStackTrace();
        }
        return dbMessage;
    }


    public List<Message> getChannelMessage(int id) {
        return (List<Message>) messageRepo.findBychannelid( id );
    }









}
