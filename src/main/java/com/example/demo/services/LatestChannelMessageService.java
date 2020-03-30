package com.example.demo.services;


import com.example.demo.entities.LatestChannelMessage;
import com.example.demo.repositories.LatestChannelMessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LatestChannelMessageService {

    @Autowired
    LatestChannelMessageRepo channelMessageRepo;

    public List<LatestChannelMessage> findAllLatestMessageChannelByAccountid(int id) {
        return channelMessageRepo.findByaccountid(id);
    }
}
