package com.example.demo.services;


import com.example.demo.entities.ChannelMessage;
import com.example.demo.repositories.ChannelMessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChannelMessageService {


    @Autowired
    private ChannelMessageRepo channelMessageRepo;

    public List<ChannelMessage> findAllMessagesByChannelsId(int channels_id) {
        return (List<ChannelMessage>) channelMessageRepo.findAllMessagesByChannelsId(channels_id);
    }
}
