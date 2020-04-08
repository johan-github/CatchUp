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
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class MessageService {

    @Autowired
    private MessageRepo messageRepo;

    @Autowired
    private SocketService socketService;

    Gson gson = new Gson();

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
        }catch(Exception e ){
            e.printStackTrace();
        }
        return dbMessage;
    }


    public List<Message> getChannelMessage(int id) {
        return (List<Message>) messageRepo.findBychannelid( id );
    }

    public void deleteMessageById(int id ){
        messageRepo.deleteById( id );
    }







}
