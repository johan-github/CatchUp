package com.example.demo.services;

import com.example.demo.entities.Account;
import com.example.demo.repositories.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    AccountRepo accountRepo;

    public Account createNewAccount(Account account) {
        return accountRepo.save(account);
    }

    public List<Account> findAllAccounts(){ return (List<Account>) accountRepo.findAll(); }

    public Account loginAccount(String email) {
        return accountRepo.findByEmail(email);
    }
}
