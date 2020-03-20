package com.example.demo.services;


import com.example.demo.entities.ChannelMessage;
import com.example.demo.entities.ChannelName;
import com.example.demo.repositories.ChannelMessageRepo;
import com.example.demo.repositories.ChannelNameRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChannelMessageService {


    @Autowired
    ChannelMessageRepo channelMessageRepo;

    //*************************************************************************************************


    public List<ChannelMessage> findAllChannelMessage(){
        return (List<ChannelMessage>) channelMessageRepo.findAll();
    }

    public ChannelMessage findOneChannelMessage(int id) {
        return channelMessageRepo.findById(id);
    }

    public ChannelMessage addNewChannelMessage(ChannelMessage channelMessage ){
        return channelMessageRepo.save( channelMessage );
    }

    public void deleteById(int id ){
        channelMessageRepo.deleteById( id );
    };

    public ChannelMessage updateChannelMessage(ChannelMessage channelMessage){
        return channelMessageRepo.save(channelMessage);
    }
}
