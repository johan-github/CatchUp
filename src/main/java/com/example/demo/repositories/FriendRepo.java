package com.example.demo.repositories;

import com.example.demo.entities.Account;
import com.example.demo.entities.Channel;
import com.example.demo.entities.Friend;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FriendRepo extends CrudRepository<Friend, Integer> {



}