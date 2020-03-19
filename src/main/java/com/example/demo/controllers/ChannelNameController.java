package com.example.demo.controllers;

import com.example.demo.services.ChannelNameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChannelNameController {

    @Autowired
    ChannelNameService channelNameService;
}