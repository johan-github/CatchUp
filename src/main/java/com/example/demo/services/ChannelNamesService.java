package com.example.demo.services;

import com.example.demo.repositories.ChannelNamesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChannelNamesService {

    @Autowired
    ChannelNamesRepo channelNamesRepo;
}
