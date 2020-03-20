package com.example.demo.services;

import com.example.demo.entities.ChannelName;
import com.example.demo.repositories.ChannelNameRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChannelNameService {

    @Autowired
    ChannelNameRepo channelNameRepo;

    //*************************************************************************************************

    public List<ChannelName> findAllChannelName(){
        return (List<ChannelName>) channelNameRepo.findAll();
    }

    public ChannelName findOneChannelName(int id) {
        return channelNameRepo.findById(id);
    }

    /*public List<ChannelName> findAllChannelNameByAccountid(int accountid) {
        return channelNameRepo.findByAccountid(accountid);
    }*/

    public ChannelName addNewChannelName(ChannelName channelName ){
        return channelNameRepo.save( channelName );
    }

    public void deleteById(int id ){
        channelNameRepo.deleteById( id );
    };

    public ChannelName updateChannelName(ChannelName channelName){
        return channelNameRepo.save(channelName);
    }
}
