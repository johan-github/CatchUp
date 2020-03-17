package com.example.demo.controllers;

import com.example.demo.entities.ChannelMessage;
import com.example.demo.services.ChannelMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChannelMessagesController {

    @Autowired
    ChannelMessageService channelMessageService;

    @GetMapping("/rest/channelmessages/{channel_id}")
    public List<ChannelMessage> getAllMessagesByChannelsId(@PathVariable int channels_id) {
        return channelMessageService.findAllMessagesByChannelsId(channels_id); }

}
