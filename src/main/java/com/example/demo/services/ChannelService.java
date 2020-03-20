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

    public List<Channel> findAllChannels(){
        return (List<Channel>) channelRepo.findAll();
    }

    public Channel findOneChannel(int id) {
        return channelRepo.findById(id);
    }

    public List<Channel> findAllChannelByAccountid(int accountid) {
        return channelRepo.findByAccountid(accountid);
    }

    public Channel addNewChannel( Channel channel ){
        return channelRepo.save( channel );
    }

    public void deleteById(int id ){
        channelRepo.deleteById( id );
    };

    public Channel updateChannel( Channel channel ){
        return channelRepo.save( channel );
    }

}

