package com.example.demo.controllers;

import com.example.demo.entities.ChannelMessage;
import com.example.demo.entities.ChannelName;
import com.example.demo.services.ChannelMessageService;
import com.example.demo.services.ChannelNameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChannelMessageController {

    @Autowired
    ChannelMessageService channelMessageService;


    //************************************************************************************************* GetMapping

    @GetMapping("/rest/channelmessages")
    public List<ChannelMessage> findAllChannelMessage(){
        return (List<ChannelMessage>) channelMessageService.findAllChannelMessage();
    }

    @GetMapping("/rest/channelmessages/{id}") //fråga efter id
    public ChannelMessage getOneChannelMessage(@PathVariable int id){
        return channelMessageService.findOneChannelMessage( id );
    }



    //************************************************************************************************* PostMapping

    @PostMapping("/rest/channelmessages")
    public ChannelMessage addNewChannelMessage(@RequestBody ChannelMessage channelMessage ){
        return channelMessageService.addNewChannelMessage( channelMessage );
    }


    //************************************************************************************************* @DeleteMapping

    @DeleteMapping("/rest/channelmessages/{id}")
    public String deleteOneChannelMessage(@PathVariable int id) {
        try {
            channelMessageService.deleteById( id );
            return "Success";
        } catch (Exception e) {
            return "Failed";
        }
    }

    //************************************************************************************************* @PutMapping (Update)

    @PutMapping("/rest/channelmessages")
    public String updateChannelMessage(@RequestBody ChannelMessage channelMessage) {
        try {
            channelMessageService.updateChannelMessage( channelMessage );
            return "Success!";
        } catch (Exception e) {
            return "Failed!";
        }
    }






}
