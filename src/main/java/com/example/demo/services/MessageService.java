package com.example.demo.services;

import com.example.demo.entities.Channel;
import com.example.demo.entities.ChannelMessage;
import com.example.demo.entities.Message;
import com.example.demo.repositories.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepo messageRepo;

    @Autowired
    private SocketService socketService;

    public List<Message> getAllMessages(){
        return ( List<Message> ) messageRepo.findAll();
    }

    public List<Message> getAllMessagesByEAccountId( int id ){
        return ( List<Message> ) messageRepo.findAllByAccountid( id );
    }



    public Message addNewMessage(Message newMessage ){
        Message dbMessage = null;

        //Simple way for avoiding crashes
        try{
            dbMessage = messageRepo.save( newMessage );
            socketService.sendToAll(dbMessage, Message.class);

        }catch(Exception e ){
            e.printStackTrace();
        }
        return dbMessage;
    }



    public List<Message> getChannelMessage(int id) {
        return (List<Message>) messageRepo.findBychannelid( id );
    }
}
