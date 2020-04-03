package com.example.demo.repositories;

import com.example.demo.entities.LatestChannelMessage;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LatestChannelMessageRepo  extends CrudRepository<LatestChannelMessage, Integer> {

    public List<LatestChannelMessage> findByaccountid(int id );

}
