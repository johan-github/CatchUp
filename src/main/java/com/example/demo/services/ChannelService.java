package com.example.demo.services;

import com.example.demo.repositories.ChannelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChannelService {
    
    @Autowired
    ChannelRepo channelRepo;
}

