package com.example.demo.controllers;

import com.example.demo.entities.Account;
import com.example.demo.entities.Channel;
import com.example.demo.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @Autowired
    AccountService accountService;

    @PostMapping("/rest/accounts")
    public Account createNewAccount(@RequestBody Account account){

        return accountService.createNewAccount(account);
    }
}



