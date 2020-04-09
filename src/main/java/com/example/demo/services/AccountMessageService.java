package com.example.demo.services;

import com.example.demo.entities.AccountMessage;
import com.example.demo.repositories.AccountMessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountMessageService {

    @Autowired
    AccountMessageRepo accountMessageRepo;

    public List<AccountMessage> findMessageByChannelId(int id) {
        return accountMessageRepo.findBychannelid(id);
    }

    public AccountMessage findMessageById(int id) {
        return accountMessageRepo.findByid(id);
    }

}



