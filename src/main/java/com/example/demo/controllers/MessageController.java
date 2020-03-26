package com.example.demo.controllers;

import com.example.demo.entities.AccountChannel;
import com.example.demo.entities.Channel;
import com.example.demo.entities.Message;
import com.example.demo.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    @Autowired
    MessageService messageService;

    @PostMapping("/rest/messages")
    public Message addNewMessage (@RequestBody Message message ){
        return messageService.addNewMessage( message );
    }

}
