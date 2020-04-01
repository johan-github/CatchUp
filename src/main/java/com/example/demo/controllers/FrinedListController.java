package com.example.demo.controllers;

import com.example.demo.entities.FriendList;
import com.example.demo.services.FriendListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FrinedListController {

    @Autowired
    FriendListService friendListService;

    //************************************************************************************************* GetMapping

    @GetMapping("/rest/friendlist/{id}") //fråga efter id
    public List<FriendList> getAllFriendlist(@PathVariable int id){
        return friendListService.findAllFriendListById(id);
    }


}
