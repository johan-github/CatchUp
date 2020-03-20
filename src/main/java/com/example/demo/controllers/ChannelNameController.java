package com.example.demo.controllers;

import com.example.demo.entities.ChannelName;
import com.example.demo.services.ChannelNameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChannelNameController {

    @Autowired
    ChannelNameService channelNameService;


    //************************************************************************************************* GetMapping

    @GetMapping("/rest/channelnames")
    public List<ChannelName> findAllChannelName(){
        return (List<ChannelName>) channelNameService.findAllChannelName();
    }

    @GetMapping("/rest/channelnames/{id}") //fråga efter id
    public ChannelName getOneChannelName(@PathVariable int id){
        return channelNameService.findOneChannelName( id );
    }



    //************************************************************************************************* PostMapping

    @PostMapping("/rest/channelnames")
    public ChannelName addNewChannelName(@RequestBody ChannelName channel ){
        return channelNameService.addNewChannelName( channel );
    }


    //************************************************************************************************* @DeleteMapping

    @DeleteMapping("/rest/channelnames/{id}")
    public String deleteOneChannelName(@PathVariable int id) {
        try {
            channelNameService.deleteById( id );
            return "Success";
        } catch (Exception e) {
            return "Failed";
        }
    }

    //************************************************************************************************* @PutMapping (Update)

    @PutMapping("/rest/channelnames")
    public String updateChannelName(@RequestBody ChannelName channelName) {
        try {
            channelNameService.updateChannelName( channelName );
            return "Success!";
        } catch (Exception e) {
            return "Failed!";
        }
    }

}