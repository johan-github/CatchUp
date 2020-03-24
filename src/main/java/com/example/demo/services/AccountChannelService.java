package com.example.demo.services;

import com.example.demo.entities.AccountChannel;
import com.example.demo.repositories.AccountChannelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountChannelService {

    @Autowired
    AccountChannelRepo accountChannelRepo;

    //*************************************************************************************************

    public List<AccountChannel> findAllChannels(){
        return (List<AccountChannel>) accountChannelRepo.findAll();
    }

    public AccountChannel findOneChannel(int id) {
        return accountChannelRepo.findById(id);
    }

    public List<AccountChannel> findAllChannelByAccountid(int accountid) {
        return accountChannelRepo.findByAccountid(accountid);
    }

    public AccountChannel addNewChannel( AccountChannel channel ){
        return accountChannelRepo.save( channel );
    }

    public void deleteById(int id ){
        accountChannelRepo.deleteById( id );
    };

    public AccountChannel updateChannel( AccountChannel channel ){
        return accountChannelRepo.save( channel );
    }

}

