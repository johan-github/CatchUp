package com.example.demo.controllers;

import com.example.demo.entities.Channel;
import com.example.demo.services.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChannelController {

    @Autowired
    ChannelService channelService;


    //************************************************************************************************* GetMapping

    @GetMapping("/rest/channels")
    public List<Channel> findAllChannelName(){
        return (List<Channel>) channelService.findAllChannelName();
    }

    @GetMapping("/rest/channels/{id}") //fråga efter id
    public Channel getOneChannelName(@PathVariable int id){
        return channelService.findOneChannelName( id );
    }



    //************************************************************************************************* PostMapping

    @PostMapping("/rest/channels")
    public Channel addNewChannelName(@RequestBody Channel channel ){
        return channelService.addNewChannelName( channel );
    }


    //************************************************************************************************* @DeleteMapping

    @DeleteMapping("/rest/channels/{id}")
    public String deleteOneChannelName(@PathVariable int id) {
        try {
            channelService.deleteById( id );
            return "Success";
        } catch (Exception e) {
            return "Failed";
        }
    }

    //************************************************************************************************* @PutMapping (Update)

    @PutMapping("/rest/channels")
    public String updateChannelName(@RequestBody Channel channelName) {
        try {
            channelService.updateChannelName( channelName );
            return "Success!";
        } catch (Exception e) {
            return "Failed!";
        }
    }

}