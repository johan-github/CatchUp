package com.example.demo.controllers;

import com.example.demo.entities.AccountMessage;
import com.example.demo.entities.LatestChannelMessage;
import com.example.demo.services.AccountMessageService;
import com.example.demo.services.LatestChannelMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountMessageController {

    @Autowired
    AccountMessageService accountMessageService;


    @GetMapping("/rest/channel/messages/{id}")
    public List<AccountMessage> accountMessages(@PathVariable int id) {
        return accountMessageService.findMessageByChannelId(id);
    }
}



