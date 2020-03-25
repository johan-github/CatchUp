package com.example.demo.repositories;

import com.example.demo.entities.LatestChannelMessage;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LatestChannelMessageRepo  extends CrudRepository<LatestChannelMessage, Integer> {

    public List<LatestChannelMessage> findByAccountid(int id );


}
