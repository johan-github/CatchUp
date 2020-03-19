package com.example.demo.services;

import com.example.demo.repositories.ChannelNameRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChannelNameService {

    @Autowired
    ChannelNameRepo channelNameRepo;
}
