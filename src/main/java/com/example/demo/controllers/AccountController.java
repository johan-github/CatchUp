package com.example.demo.controllers;

import com.example.demo.entities.Account;
import com.example.demo.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class AccountController {

    @Autowired
    AccountService accountService;


    //************************************************************************************************* GetMapping

    @GetMapping("/rest/accounts")
    public List<Account> getAllAccounts(){
        return accountService.findAllAccounts();
    }


    @GetMapping("/rest/accounts/email/{email}")
    public Account loginAccount(@PathVariable String email) {
        return accountService.loginAccount(email);
    }

    @GetMapping("/rest/accounts/{id}")
    public Optional<Account> findById(@PathVariable int id) {
        return accountService.findAccountById(id);
    }

    //@GetMapping("/rest/accounts/{id}")
    /*public CurrentAccount loginAccount(@PathVariable int id) {
        return accountService.loginAccount(id);
    }*/

    //************************************************************************************************* PostMapping

    @PostMapping("/rest/accounts")
    public Account createNewAccount(@RequestBody Account account){
        return accountService.createNewAccount(account);
    }


    //************************************************************************************************* PutMapping

    @PutMapping("/rest/accounts")
    public Account updatAccount(@RequestBody Account account) {
        try {
            accountService.updateAccount(account);
            System.out.println("Account is updated");
            return account;
        } catch (Exception e) {
            System.out.println("Account NOT updated");
        }
        return null;
    }
}





