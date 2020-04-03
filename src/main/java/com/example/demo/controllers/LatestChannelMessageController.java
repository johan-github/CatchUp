package com.example.demo.controllers;

import com.example.demo.entities.LatestChannelMessage;
import com.example.demo.services.LatestChannelMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LatestChannelMessageController {

    @Autowired
    LatestChannelMessageService latestChannelMessageService;


    //************************************************************************************************* GetMapping

    @GetMapping("/rest/latestchannelmessages/{id}") //fråga efter id
    public List<LatestChannelMessage> getAllLatestChannelMessageMessage(@PathVariable int id){
        return latestChannelMessageService.findAllLatestMessageChannelByAccountid( id );
    }
}
