package com.example.demo.repositories;


import com.example.demo.entities.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MessageRepo extends CrudRepository<Message, Integer> {

    public Message findById(int id );

    public List<Message> findAllByAccountid(int id );

    public List<Message> findBychannelid(int id);
}
