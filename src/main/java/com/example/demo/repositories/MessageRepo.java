package com.example.demo.repositories;

import com.example.demo.entities.Account;
import com.example.demo.entities.ChannelMessage;
import com.example.demo.entities.Friend;
import com.example.demo.entities.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MessageRepo extends CrudRepository<Message, Integer> {

    public Message findById(int id );

    public List<Message> findAllByAccountid(int id );

}
