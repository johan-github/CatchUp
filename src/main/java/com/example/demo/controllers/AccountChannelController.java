package com.example.demo.controllers;

import com.example.demo.entities.AccountChannel;
import com.example.demo.services.AccountChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountChannelController {

    @Autowired
    AccountChannelService accountChannelService;


    //************************************************************************************************* GetMapping

    @GetMapping("/rest/accountchannels")
    public List<AccountChannel> getAllChannels(){
        return accountChannelService.findAllChannels();
    }

    @GetMapping("/rest/accountchannels/{id}") //fråga efter id
    public AccountChannel getOneChannel(@PathVariable int id){
        return accountChannelService.findOneChannel( id );
    }



    //************************************************************************************************* PostMapping

    @PostMapping("/rest/accountchannels")
    public AccountChannel addNewChannel( @RequestBody AccountChannel accountChannel ){
        return accountChannelService.addNewChannel( accountChannel );
    }


    //************************************************************************************************* @DeleteMapping

    @DeleteMapping("/rest/accountchannels/{id}")
    public String deleteOneUser(@PathVariable int id) {
        try {
            accountChannelService.deleteById( id );
            return "Success";
        } catch (Exception e) {
            return "Failed";
        }
    }

    //************************************************************************************************* @PutMapping (Update)

    @PutMapping("/rest/accountchannels")
    public String updateChannel(@RequestBody AccountChannel accountChannel) {
        try {
            accountChannelService.updateChannel( accountChannel );
            return "Success!";
        } catch (Exception e) {
            return "Failed!";
        }
    }



}
