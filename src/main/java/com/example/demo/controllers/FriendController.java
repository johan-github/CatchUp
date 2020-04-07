package com.example.demo.controllers;

import com.example.demo.entities.Channel;
import com.example.demo.entities.Friend;
import com.example.demo.services.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FriendController {

    @Autowired
    FriendService friendService;

    @PostMapping("/rest/friends")
    public Friend addFriendToList(@RequestBody Friend friend ){
        return friendService.addNewFriend( friend );
    }
}
