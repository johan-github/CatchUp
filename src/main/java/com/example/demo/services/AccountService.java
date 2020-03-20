package com.example.demo.services;

import com.example.demo.entities.Account;
import com.example.demo.repositories.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    AccountRepo accountRepo;

    public Account createNewAccount(Account newAccount) {
        return accountRepo.save(newAccount);
    }




}
