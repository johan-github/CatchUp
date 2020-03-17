package com.example.demo.controllers;

import com.example.demo.services.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChannelController {

    @Autowired
    ChannelService channelService;

}
