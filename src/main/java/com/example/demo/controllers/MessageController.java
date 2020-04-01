package com.example.demo.controllers;

import com.example.demo.entities.Message;
import com.example.demo.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MessageController {

    @Autowired
    MessageService messageService;

    //************************************************************************************************* PostMapping


    @PostMapping("/rest/messages")
    public Message addNewMessage (@RequestBody Message message ){
        return messageService.addNewMessage( message );
    }


    //************************************************************************************************* GetMapping

    @GetMapping("/rest/messages/{id}")
    public List<Message> getChannelMessage (@PathVariable int id ){
        return messageService.getChannelMessage( id );
    }


    //************************************************************************************************* DeleteMapping





}
