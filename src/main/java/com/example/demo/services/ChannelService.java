package com.example.demo.services;

import com.example.demo.entities.Channel;
import com.example.demo.repositories.ChannelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChannelService {

    @Autowired
    ChannelRepo channelRepo;

    //*************************************************************************************************

    public List<Channel> findAllChannelName(){
        return (List<Channel>) channelRepo.findAll();
    }

    public Channel findOneChannelName(int id) {
        return channelRepo.findById(id);
    }

    /*public List<ChannelName> findAllChannelNameByAccountid(int accountid) {
        return channelRepo.findByAccountid(accountid);
    }*/

    public Channel addNewChannelName(Channel channelName ){
        return channelRepo.save( channelName );
    }

    public void deleteById(int id ){
        channelRepo.deleteById( id );
    };

    public Channel updateChannelName(Channel channelName){
        return channelRepo.save(channelName);
    }
}
