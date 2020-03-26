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
    MessageRepo messageRepo;

    public Message addNewMessage(Message message ){
        return messageRepo.save( message );
    }

    public List<Message> getChannelMessage(int id) {
        return (List<Message>) messageRepo.findBychannelid( id );
    }
}
