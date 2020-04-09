package com.example.demo.services;

import com.example.demo.entities.FriendList;
import com.example.demo.repositories.FriendListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class FriendListService {


    @Autowired
    FriendListRepo friendListRepo;

    public List<FriendList> findAllFriendListById(int id){
        return friendListRepo.findByaccountid(id);
    }


}
