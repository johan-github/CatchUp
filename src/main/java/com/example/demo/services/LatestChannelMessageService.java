package com.example.demo.services;


import com.example.demo.entities.LatestChannelMessage;
import com.example.demo.repositories.LatestChannelMessageRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class LatestChannelMessageService {

    @Autowired
    LatestChannelMessageRepo channelMessageRepo;

    public List<LatestChannelMessage> findAllLatestMessageChannelByAccountid(int accountid) {
        return channelMessageRepo.findByAccountid(accountid);
    }
}
