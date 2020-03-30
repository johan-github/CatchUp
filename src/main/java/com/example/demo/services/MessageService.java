package com.example.demo.services;

import com.example.demo.entities.ChannelMessage;
import com.example.demo.entities.Message;
import com.example.demo.repositories.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    MessageRepo messageRepo;

    @Autowired
    private SocketService socketService;

    public List<Message> getAllMessages(){
        return ( List<Message> ) messageRepo.findAll();
    }

    public List<Message> getAllMessagesByEAccountId( int id ){
        return ( List<Message> ) messageRepo.findAllByAccountid( id );
    }



    public Message addNewMessage(Message message ){

        Message dbMessage = null;

        try{ //Simple way for avoiding crashes
            dbMessage = messageRepo.save( message );
        }catch(Exception e ){
            e.printStackTrace();
        }
        return dbMessage;
    }
}
