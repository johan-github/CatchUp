package com.example.demo.controllers;

import com.example.demo.entities.Channel;
import com.example.demo.repositories.ChannelRepo;
import com.example.demo.services.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ChannelController {

    @Autowired
    ChannelService channelService;


    //************************************************************************************************* GetMapping

    @GetMapping("/rest/channels")
    public List<Channel> getAllChannels(){
        return channelService.findAllChannels();
    }

    @GetMapping("/rest/channels/{id}") //fråga efter id
    public Channel getOneChannel(@PathVariable int id){
        return channelService.findOneChannel( id );
    }



    //************************************************************************************************* PostMapping

    @PostMapping("/rest/channels")
    public Channel addNewChannel( @RequestBody Channel channel ){
        return channelService.addNewChannel( channel );
    }


    //************************************************************************************************* @DeleteMapping

    @DeleteMapping("/rest/channels/{id}")
    public String deleteOneUser(@PathVariable int id) {
        try {
            channelService.deleteById( id );
            return "Success";
        } catch (Exception e) {
            return "Failed";
        }
    }

    //************************************************************************************************* @PutMapping (Update)

    @PutMapping("/rest/channels")
    public String updateChannel(@RequestBody Channel channel) {
        try {
            channelService.updateChannel( channel );
            return "Success!";
        } catch (Exception e) {
            return "Failed!";
        }
    }



}
