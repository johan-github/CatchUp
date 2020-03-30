package com.example.demo.controllers;

import com.example.demo.entities.AccountChannel;
import com.example.demo.entities.Channel;
import com.example.demo.entities.Message;
import com.example.demo.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MessageController {

    @Autowired
    MessageService messageService;

    /************************************************************************************* GetMapping */

    @GetMapping("/rest/messages")
    public List<Message> getAllMessages(){
        return ( List<Message> ) messageService.getAllMessages();
    }

    @GetMapping("/rest/messages/{id}")
    public List<Message> getAllMessagesByUser(@PathVariable int id){
        List<Message> userMessages = new ArrayList<>();

        userMessages = messageService.getAllMessagesByEAccountId( id );

        return userMessages;
    }



    /************************************************************************************* PostMapping */

    @PostMapping("/rest/messages")
    public Message addNewMessage (@RequestBody Message message ){
        return messageService.addNewMessage( message );
    }

}
