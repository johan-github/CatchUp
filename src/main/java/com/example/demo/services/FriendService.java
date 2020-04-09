package com.example.demo.services;

import com.example.demo.entities.Friend;
import com.example.demo.repositories.AccountRepo;
import com.example.demo.repositories.FriendRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FriendService {

    @Autowired
    FriendRepo friendRepo;

    public Friend addNewFriend(Friend friend) {
        return friendRepo.save(friend);
    }


}
